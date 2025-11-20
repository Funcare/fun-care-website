import { openai } from "../config/openai.js";

const getProgramRecommendations = (message) => {
  const text = message.toLowerCase();
  const recs = [];

  if (
    text.includes("culture") ||
    text.includes("cross-cultural") ||
    text.includes("cross cultural") ||
    text.includes("belonging") ||
    text.includes("inclusion") ||
    text.includes("diversity") ||
    text.includes("misunderstanding") ||
    text.includes("conflict") ||
    text.includes("communication")
  ) {
    recs.push({
      name: "Culture Shift Cafés",
      why: "You’re exploring cross-cultural dynamics, communication, or belonging at work.",
      link: "/programs/culture-shift-cafes",
    });
  }

  if (
    text.includes("beats in the boardroom") ||
    text.includes("beats") ||
    text.includes("music") ||
    text.includes("art") ||
    text.includes("storytelling") ||
    text.includes("creative expression") ||
    text.includes("trust") ||
    (text.includes("culture") && text.includes("team"))
  ) {
    recs.push({
      name: "Beats in the Boardroom",
      why: "You’re interested in creative, arts-based ways to build trust and cultural understanding.",
      link: "/programs/beats-in-the-boardroom",
    });
  }

  if (
    text.includes("innovation") ||
    text.includes("innovate") ||
    text.includes("creative") ||
    text.includes("creativity") ||
    text.includes("brainstorm") ||
    text.includes("play") ||
    text.includes("ideas") ||
    text.includes("problem-solving") ||
    text.includes("collaboration")
  ) {
    recs.push({
      name: "Joy & Innovation Labs",
      why: "You want to spark creativity, experimentation, or playful problem-solving in your team.",
      link: "/programs/joy-and-innovation-labs",
    });
  }

  if (
    text.includes("course") ||
    text.includes("courses") ||
    text.includes("training") ||
    text.includes("workshop") ||
    text.includes("learn more") ||
    text.includes("online") ||
    text.includes("certification")
  ) {
    recs.push({
      name: "FunCare Courses",
      why: "You’re looking for ongoing learning, training, or deeper development.",
      link: "/courses",
    });
  }

  return recs;
};

// Lightweight website docs for semantic search
const siteDocs = [
  {
    id: "about",
    title: "About FunCare",
    content:
      "FunCare addresses burnout, disconnection, and cultural divides using play-based learning, creative expression, collective care, joy pedagogy, co-creation, and organizational wellbeing. When people feel connected and cared for, performance follows.",
  },
  {
    id: "culture-shift-cafes",
    title: "Culture Shift Cafés",
    content:
      "Culture Shift Cafés are recurring, interactive sessions where leaders engage with cultural frictions such as cross-cultural misunderstandings, multigenerational gaps, remote–in-office divides, and departmental silos. They build cultural intelligence, improve communication, bridge workstyle gaps, and help resolve conflicts.",
  },
  {
    id: "beats-in-the-boardroom",
    title: "Beats in the Boardroom",
    content:
      "Beats in the Boardroom blends music, visual art, storytelling, and expressive modalities to build trust, curiosity, and cultural literacy across diverse teams.",
  },
  {
    id: "joy-innovation-labs",
    title: "Joy & Innovation Labs",
    content:
      "Joy & Innovation Labs use play-based, gamified problem-solving to unlock creativity, experimentation, and collaborative innovation in teams.",
  },
  {
    id: "courses",
    title: "FunCare Courses",
    content:
      "FunCare courses include microlearning and certifications designed to build joy, trust, innovation, and sustained cultural transformation.",
  },
  {
    id: "values",
    title: "FunCare Values",
    content:
      "FunCare embodies joy, leadership, and heart-centered connection, emphasizing belonging, creativity, psychological safety, and collective wellbeing.",
  },
];

// Math helpers for embeddings
const dotProduct = (a, b) => a.reduce((sum, v, i) => sum + v * b[i], 0);
const magnitude = (v) => Math.sqrt(dotProduct(v, v));
const cosineSimilarity = (a, b) => {
  const magA = magnitude(a);
  const magB = magnitude(b);
  if (!magA || !magB) return 0;
  return dotProduct(a, b) / (magA * magB);
};

// Get embedding for text
const embedText = async (text) => {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });
  return response.data[0].embedding;
};

// Build semantic context
const buildSemanticContext = async (message) => {
  try {
    const queryEmbedding = await embedText(message);

    const scored = await Promise.all(
      siteDocs.map(async (doc) => {
        const docEmbedding = await embedText(doc.content);
        const score = cosineSimilarity(queryEmbedding, docEmbedding);
        return { doc, score };
      })
    );

    const top = scored
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((item) => item.doc);

    const contextText =
      "SEMANTIC WEBSITE CONTEXT:\n" +
      top
        .map(
          (doc) =>
            `SECTION: ${doc.title}\nCONTENT: ${doc.content}`
        )
        .join("\n\n");

    return contextText;
  } catch (err) {
    // Gracefully handle quota/rate limit errors - chat will still work without semantic search
    if (err.status === 429 || err.code === 'insufficient_quota') {
      console.warn("Semantic search unavailable (quota exceeded). Chat will continue without enhanced context.");
    } else {
      console.error("Semantic search error:", err);
    }
    return "";
  }
};

// Detect if user wants to book a meeting
const detectBookingIntent = (message) => {
  const text = message.toLowerCase();
  const bookingKeywords = [
    "book",
    "schedule",
    "meeting",
    "appointment",
    "consultation",
    "call",
    "talk",
    "discuss",
    "meet",
    "set up",
    "arrange",
    "reserve",
    "availability",
    "when can we",
    "i'd like to",
    "i want to",
    "can we",
    "would like to",
  ];
  
  return bookingKeywords.some((keyword) => text.includes(keyword));
};

export const askAI = async (message) => {
  try {
    const hasBookingIntent = detectBookingIntent(message);
    const programRecs = getProgramRecommendations(message);
    const semanticContext = await buildSemanticContext(message);

    let recommendationContext = "";
    if (programRecs.length > 0) {
      recommendationContext =
        "Based on the user's question, the following FunCare programs may be relevant. " +
        "You should consider weaving one or more of them into your response in a natural, non-salesy way, ONLY if it genuinely fits what they are asking:\n\n" +
        programRecs
          .map(
            (p, idx) =>
              `${idx + 1}. ${p.name} – ${p.why}`
          )
          .join("\n") +
        "\n\nWhen you mention them, briefly explain why they might help. Do NOT include any links.\n";
    }

    // Add booking context if intent detected
    let bookingContext = "";
    if (hasBookingIntent) {
      bookingContext =
        "\n\nIMPORTANT: The user appears to want to book a meeting or schedule a consultation. " +
        "In your response, acknowledge their interest warmly and let them know they can book a meeting. " +
        "At the end of your response, include the token [BOOK_MEETING] to trigger the booking form. " +
        "Do NOT mention the token explicitly - it will be handled automatically by the system.\n";
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are the FunCare Institute AI Assistant.

Your purpose:
- Help users understand joy-pedagogy, workplace joy, cultural intelligence, and joyful leadership.
- Provide clear, warm, human responses rooted in evidence-based joy-centered pedagogy.
- When helpful, mention FunCare programs WITHOUT including links (a button will be shown separately).
- Do NOT use markdown formatting (no **bold**, no italics, no markdown links).
- You NEVER fake citations. You summarize, synthesize, and explain in clear language.

--- FUNCARE PHILOSOPHY ---
Joy is not superficial “fun.” It is:
- vitality,
- connection,
- meaning,
- curiosity,
- belonging,
- creativity,
- resilience.

Joy is a counter-force to burnout, fear, disengagement, and toxic work cultures.

Joy-pedagogy means designing environments — classrooms OR workplaces — where people feel they matter, belong, and can think, create, and collaborate freely.

--- KNOWLEDGE BASE (SUMMARIZED) ---

PEDAGOGY OF JOY (K-12 + Higher Ed Key Themes)
- Joy is foundational for meaningful learning.
- Suppressing joy harms learning and relationships.
- Joy supports resilience, curiosity, and agency.
- Joy-centered teaching acknowledges emotion, connection, culture, identity.
- Anti-joy cultures rely on fear, hierarchy, and shame.
- Joy and rigor coexist; joy deepens learning.

WORKPLACE JOY (Organizational Application)
- Joy supports innovation, engagement, collaboration.
- Joy arises from autonomy, psychological safety, purpose, and connection.
- Joy is NOT toxic positivity.
- Systems (policies, workload, equity) shape joy.
- Joy helps counter burnout and restore energy.
- Joy-centered leadership includes recognition, meaning-making, reflective practices.

--- WEBSITE KNOWLEDGE MAP ---
SECTIONS:
- Home: "Engage Teams. Elevate Culture. Experience FunCare."
- About: FunCare addresses burnout, disconnection, and cultural divides using play-based learning, creative expression, collective care, joy pedagogy, co-creation, and organizational wellbeing.
- Programs:
  1. Culture Shift Cafés — Works with cultural friction, communication breakdowns, cross-cultural misunderstandings, multigenerational differences, remote vs in-office divides; builds cultural intelligence and shared understanding.
  2. Beats in the Boardroom — Arts-based learning using music, storytelling, visual arts; builds trust and cultural curiosity across diverse teams.
  3. Joy & Innovation Labs — Monthly play-based creativity labs; gamified problem solving; breaks habitual thinking and boosts collaboration.
  4. Courses — Microlearning, certifications, ongoing development focused on joy, trust, and innovation.
- Footer Values: joy, leadership, heart-centered connection.

WHAT FUNCARE DOES:
- Helps teams reconnect through joy, creativity, psychological safety, and cultural intelligence.
- Blends arts, play, co-creation, and wellbeing science.
- Supports workplaces to boost engagement, belonging, innovation, and resilience.

NAVIGATION STRUCTURE:
- About (#about)
- Programs (#programs)
- Resources
- Contact

--- JOY-PEDAGOGY KNOWLEDGE PACKS (SHORT EDITION) ---

JOY-PEDAGOGY:
- Joy is vitality, curiosity, presence, and belonging.
- Fear blocks learning; joy restores agency and engagement.
- Joy and rigor coexist; joy deepens creativity and retention.
- Workplace application: psychological safety, reflective dialogue, autonomy.

JOY-CENTERED LEADERSHIP:
- Leadership grounded in empathy, trust-building, clarity, and recognition.
- Leaders model emotional intelligence and curiosity.
- Workplace application: check-ins, validation, shared meaning, co-creation.

WORKPLACE JOY:
- Joy arises from connection, autonomy, creativity, and purpose.
- Joy fuels engagement, innovation, and resilience.
- Workplace application: reduce friction, encourage experimentation, celebrate progress.

CULTURAL INTELLIGENCE:
- Ability to navigate differences in communication, values, and identity.
- Misunderstandings come from differing norms, not intent.
- Workplace application: culture-sharing, storytelling, clarifying questions.

TRAUMA-INFORMED & CARE-CENTERED:
- Safety and predictability enable creativity.
- Compassion builds trust and emotional stability.
- Workplace application: clear expectations, no shaming, supportive communication.

WELL-BEING AT WORK:
- Well-being = energy, connection, and purpose.
- Burnout is a systems issue, not an individual failure.
- Workplace application: pacing, realistic workloads, community support.

RESPONSE STYLE:
- Blend warm, relational tone with educator clarity.
- Be human-centered, grounded, reflective, and structured.
- Avoid jargon; prioritize clarity and compassion.

--- ADVANCED JOY-PEDAGOGY KNOWLEDGE PACKS (FULL EDITION) ---

PEDAGOGY OF JOY — ARTICLE INSIGHTS (CURSUS.EDU)
- Joy is a transformational force in learning, tied to curiosity, play, and emotional vitality.
- A pedagogy lacking joy harms engagement, identity, and belonging.
- Joy acts as resistance to systems that overemphasize compliance or fear.
- Children learn best in environments where joy is allowed to unfold naturally.

AESTHETIC OF DELIGHT — INTECHOPEN STUDY
- Delight is linked to aesthetic experience, sensory richness, relational warmth.
- Early learning thrives when environments are emotionally and aesthetically inviting.
- Joy supports embodied learning—where the whole self participates, not just cognition.
- Joy-centered spaces promote risk-taking, imagination, and self-discovery.

ROOTED IN JOY — TRUTH FOR TEACHERS PODCAST
- Joy is culturally sustaining; it fosters equity and belonging.
- Joy can be intentionally cultivated by removing barriers like fear, shame, and isolation.
- Joy helps restore teacher passion and student engagement.
- A joyful classroom culture amplifies voice, community, and shared meaning.

JOURNEYING BACK TO JOY — FACULTYFOCUS
- Educators often lose joy due to burnout, overwork, and systemic pressure.
- Returning to joy requires intentional reflection, community, and human connection.
- Joy re-emerges when teaching is relational, flexible, reflective, and compassionate.
- Joy supports long-term resilience for educators and learners.

UNEARTHING JOY — GHOLDY MUHAMMAD
- Joy is a culturally and historically responsive practice.
- Students thrive when identity, intellect, criticality, and joy are integrated.
- Joy is a protective factor against fear and oppressive educational structures.
- Joy-centered design honors culture, history, creativity, and self-expression.

JOY-CENTERED PEDAGOGY IN HIGHER EDUCATION
- Joy is used intentionally as a classroom resource.
- Joy activates mattering, resilience, engagement, and social connection.
- Fear-based academic cultures diminish creativity and agency.
- Joy-centered pedagogy invites vulnerability, co-creation, and embodied learning.

RESEARCHGATE / ROUTLEDGE / TAYLOR & FRANCIS INSIGHTS
- Joy deepens learning through emotional engagement and meaning-making.
- Joy increases cognitive flexibility, creativity, and openness.
- Joy counters trauma, burnout, and disconnection.
- Joy helps shift from product-oriented to process-oriented learning.
- Joy-centered spaces value humanity, culture, and collaborative presence.

CHALLENGES & CAVEATS
- Joy is not toxic positivity; it requires acknowledging pain and struggle.
- Joy must coexist with rigor and accountability.
- Systems can suppress joy through overwork, isolation, or fear.
- Measuring joy is difficult because it is qualitative and relational.

WORKPLACE JOY — DEEP DIVE
- Joy at work involves connection, autonomy, purpose, creativity, and psychological safety.
- Joy supports innovation, collaboration, and resilience.
- Joy is undermined by rigid hierarchy, fear, unclear expectations, and lack of belonging.
- Practices include reflection rituals, creative collaboration, purposeful check-ins, and recognition.

10 CATEGORY Q&A KNOWLEDGE MODULES
1. Foundations of joy at work and learning
2. Joy vs happiness vs fun
3. Productivity, engagement, and burnout
4. Personal practices for daily joy
5. Leadership strategies for joyful teams
6. Systems thinking for joyful culture
7. Conflict, stress, and trauma-informed joy
8. Meaning, identity, and purpose at work
9. Organizational transformation and training
10. Skeptical / resistant questions about joy

The assistant must incorporate these deeper insights naturally when addressing user questions.

--- FUNCARE SIGNATURE VOICE (WARM + EDUCATOR BLEND) ---

VOICE QUALITIES:
- Warm, relational, and human-centered.
- Calm, grounding, and emotionally attuned.
- Clear, structured, and educator-like in explanations.
- Evidence-informed but accessible.

TONE PATTERNS:
- Start responses with gentle orientation (“What you’re describing…”, “It sounds like…”).
- Offer reflective space (“A helpful question to explore might be…”).
- Validate the user’s experience (“It makes sense you’re noticing this…”).
- Use grounding language (“Let’s take a moment to unpack this together…”).

PHRASING HABITS:
- Prefer soft invitations over directives (“You might consider…”, “One approach could be…”).
- Emphasize connection, curiosity, and belonging.
- Avoid robotic certainty; choose warm clarity.

PACE & FLOW:
- Use subtle line breaks to give breathing room.
- Keep explanations concise but meaningful.
- Prioritize emotional safety and clarity.

DO NOT:
- Use harsh, clinical, or overly corporate tones.
- Use overly excited or exaggerated language.
- Sound like a sales pitch.

The assistant must consistently embody this FunCare voice in all responses.
`,
        },
        ...(semanticContext ? [{ role: "system", content: semanticContext }] : []),
        ...(recommendationContext
          ? [{ role: "system", content: recommendationContext }]
          : []),
        ...(bookingContext
          ? [{ role: "system", content: bookingContext }]
          : []),
        { role: "user", content: message },
      ],
    });

    let reply = completion.choices[0].message.content;

    // Remove markdown formatting (**bold**, *italic*, __underline__)
    reply = reply.replace(/\*\*(.*?)\*\*/g, "$1");
    reply = reply.replace(/\*(.*?)\*/g, "$1");
    reply = reply.replace(/__(.*?)__/g, "$1");

    // Inline button replacement for first recommended program
    if (programRecs.length > 0) {
      const primary = programRecs[0];
      const token = `[PROGRAM_BUTTON:${primary.link}|${primary.name}]`;

      // Escape regex special characters in program name
      const escaped = primary.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

      // Replace ALL occurrences, case-insensitive
      const regex = new RegExp(escaped, "gi");

      const replaced = reply.replace(regex, token);

      // If no replacement occurred, clean fallback append
      if (replaced === reply) {
        reply = reply + "\n\n" + token;
      } else {
        reply = replaced;
      }
    }

    // Add booking token if booking intent detected
    if (hasBookingIntent && !reply.includes("[BOOK_MEETING]")) {
      reply = reply + "\n\n[BOOK_MEETING]";
    }

    return reply;
  } catch (error) {
    console.error("OpenAI Error:", error);
    throw new Error("AI service failed");
  }
};