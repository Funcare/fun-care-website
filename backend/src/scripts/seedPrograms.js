import mongoose from "mongoose";
import { connectDB } from "../config/db.js";
import Program from "../models/Program.js";
import dotenv from "dotenv";

dotenv.config();

const seedPrograms = async () => {
  try {
    await connectDB();
    console.log("Connected to database");

    // Clear existing programs (optional - comment out if you want to keep existing)
    // await Program.deleteMany({});
    // console.log("Cleared existing programs");

    const programs = [
      {
        title: "Culture Shift Cafés",
        slug: "culture-shift-cafes",
        description: "Culture Shift Cafés are recurring, interactive sessions where leaders engage directly with the cultural frictions that can slow progress and strain team dynamics, including cross-cultural misunderstandings, multigenerational workstyle gaps, the remote–in-office divide, and departmental silos. Through facilitated knowledge exchange and experiential learning, leaders build cultural intelligence and create actionable strategies that improve communication, bridge workstyle gaps, and resolve conflicts. Each session equips leaders to unite teams around shared goals, boost employee engagement, and deliver stronger organizational outcomes.",
        shortDescription: "Culture Shift Cafés are recurring, interactive sessions where leaders engage directly with the cultural frictions that can slow progress and strain team dynamics, including cross-cultural misunderstandings, multigenerational workstyle gaps, the remote–in-office divide, and departmental silos. Through facilitated knowledge exchange and experiential learning, leaders build cultural intelligence and create actionable strategies that improve communication, bridge workstyle gaps, and resolve conflicts.",
        color: "bg-coral",
        icon: "/icons/CultureShiftCafes.png",
        link: "/programs/culture-shift-cafes",
        content: {
          paragraphs: [
            "Culture Shift Cafés are recurring, interactive sessions where leaders engage directly with the cultural frictions that can slow progress and strain team dynamics—cross-cultural misunderstandings, multigenerational workstyle gaps, remote–in-office divides, and departmental silos. Through facilitated knowledge exchange and experiential learning, leaders build cultural intelligence and create actionable strategies that improve communication and resolve conflict.",
            "Each Café is designed as a brave, joyful space where people can name tension without blame, listen across difference, and practice new ways of relating. Over time, these conversations help teams move from friction and fatigue toward shared purpose, trust, and belonging.",
          ],
          bulletPoints: [
            "Surface real cultural frictions in a facilitated, supportive way.",
            "Build shared language around culture, identity, and belonging.",
            "Practice communication strategies that reduce misunderstandings.",
            "Explore multigenerational and hybrid workstyle differences.",
            "Co-create small, tangible shifts to strengthen everyday culture.",
          ],
          idealFor: {
            title: "Ideal for teams who are:",
            description: "Navigating cross-cultural friction, rapid growth, restructuring, or seeking to deepen equity, inclusion, and belonging.",
          },
          ctaText: "Talk to us about Culture Shift Cafés",
          sideDescription: "A recurring space for courageous, joyful dialogue about culture, identity, and how we work together.",
        },
        gradientColors: ["#F3C6A4", "#FFF4E3", "#F3C6A4"],
        isActive: true,
        order: 0,
      },
      {
        title: "Beats in the Boardroom",
        slug: "beats-in-the-boardroom",
        description: "Beats in the Boardroom and Beyond is an interactive workplace learning experience that blends music, visual art, storytelling, and other expressive modalities to bridge cultural divides, spark curiosity, and build trust across team differences. Through exploring cultural teachings and traditions in creative and participatory ways, participants gain the competencies and skills to strengthen cultural literacy, enhancing their ability to understand, interpret, and work effectively across different cultural contexts.",
        shortDescription: "Beats in the Boardroom and Beyond is an interactive workplace learning experience that blends music, visual art, storytelling, and other expressive modalities to bridge cultural divides, spark curiosity, and build trust across team differences.",
        color: "bg-teal",
        icon: "/icons/BeatsintheBoardroom.png",
        link: "/programs/beats-in-the-boardroom",
        content: {
          paragraphs: [
            "Beats in the Boardroom and Beyond is an interactive workplace learning experience that blends music, visual art, storytelling, and other expressive modalities to bridge cultural divides, spark curiosity, and build trust across team differences.",
            "Rather than talking about culture only in abstract terms, participants experience it—through sound, image, rhythm, and story. This opens up new ways of listening to one another and makes space for voices that are often quieter in traditional meetings.",
          ],
          bulletPoints: [
            "Use music and art to explore identity, culture, and values.",
            "Build trust through shared creative experiences.",
            "Practice deep listening and storytelling across differences.",
            "Strengthen cultural literacy in a playful, low-stakes way.",
            "Leave with tangible practices to keep creativity alive at work.",
          ],
          idealFor: {
            title: "Ideal for teams who are:",
            description: "Ready to experiment with arts-based learning, deepen trust across diverse identities, or re-energize team culture through creativity.",
          },
          ctaText: "Talk to us about Beats in the Boardroom",
          sideDescription: "A playful, arts-based lab where rhythm, story, and image help teams see one another—and their culture—with fresh eyes.",
        },
        gradientColors: ["#90B7B3", "#FFF4E3", "#E59BAA"],
        isActive: true,
        order: 1,
      },
      {
        title: "Joy & Innovation Labs",
        slug: "joy-and-innovation-labs",
        description: "Joy & Innovation Labs are monthly, play-based learning sessions where employees use the science and practice of play to unlock creativity, experimentation, and collaboration in solving real workplace challenges. Through hands-on activities, gamified problem-solving, and imaginative scenarios, participants learn to break habitual thinking patterns and explore new possibilities. Supported by frameworks like Design Thinking and Agile Collaboration, the labs channel the energy of play into structured innovation that delivers tangible business results.",
        shortDescription: "Joy & Innovation Labs are monthly, play-based learning sessions where employees use the science and practice of play to unlock creativity, experimentation, and collaboration in solving real workplace challenges.",
        color: "bg-peach",
        icon: "/icons/Joy&InnovationLabs.png",
        link: "/programs/joy-and-innovation-labs",
        content: {
          paragraphs: [
            "Joy & Innovation Labs are monthly, play-based learning sessions where employees use the science and practice of play to unlock creativity, experimentation, and collaboration in solving real workplace challenges.",
            "Through hands-on activities, gamified problem-solving, and imaginative scenarios, participants learn to break habitual thinking patterns and explore new possibilities. Supported by frameworks like design thinking and agile collaboration, the labs channel the energy of play into structured innovation that delivers tangible business results.",
          ],
          bulletPoints: [
            "Work on real challenges through playful, creative lenses.",
            "Experiment with rapid prototyping and low-risk testing.",
            "Strengthen collaboration and cross-functional problem-solving.",
            "Learn simple tools to keep innovation alive between sessions.",
            "Connect joyfully, even when working on complex issues.",
          ],
          idealFor: {
            title: "Ideal for teams who are:",
            description: "Seeking fresh thinking, wanting to reduce burnout while still delivering results, or building a culture where experimentation is welcomed—not punished.",
          },
          ctaText: "Talk to us about Joy & Innovation Labs",
          sideDescription: "A structured, playful space where teams turn curiosity into concrete ideas and experiments.",
        },
        gradientColors: ["#FFF4E3", "#F3C6A4", "#FFD166"],
        isActive: true,
        order: 2,
      },
      {
        title: "Courses",
        slug: "courses",
        description: "Explore our expanding library of FunCare courses designed to deepen learning and sustain cultural transformation. From microlearning modules to immersive certification programs, our courses empower individuals and teams to build joy, trust, and innovation into everyday work life.",
        shortDescription: "Explore our expanding library of FunCare courses designed to deepen learning and sustain cultural transformation. From microlearning modules to immersive certification programs, our courses empower individuals and teams to build joy, trust, and innovation into everyday work life.",
        color: "bg-yellow",
        icon: "/icons/courses.png",
        link: "/courses",
        content: {
          paragraphs: [
            "Explore our expanding library of FunCare courses designed to deepen learning and sustain cultural transformation. From microlearning modules to immersive certification programs, our courses empower individuals and teams to build joy, trust, and innovation into everyday work life.",
          ],
        },
        gradientColors: ["#E59BAA", "#FFF4E3", "#90B7B3"],
        isActive: true,
        order: 3,
      },
    ];

    // Insert programs
    for (const programData of programs) {
      const existingProgram = await Program.findOne({ slug: programData.slug });
      if (existingProgram) {
        console.log(`Program "${programData.title}" already exists, skipping...`);
      } else {
        const program = new Program(programData);
        await program.save();
        console.log(`Created program: ${programData.title}`);
      }
    }

    console.log("Seed completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding programs:", error);
    process.exit(1);
  }
};

seedPrograms();

