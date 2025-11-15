import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendWelcomeEmail = async (toEmail) => {
  try {
    const data = await resend.emails.send({
      from: "FunCare <onboarding@resend.dev>",
      to: toEmail,
      subject: "Welcome to FunCare!",
      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2 style="color:#E59BAA;">Welcome to FunCare!</h2>
          <p>We're so glad you're here.</p>

          <p>
            At FunCare, we help teams reconnect through
            joy, cultural intelligence, and playful learning experiences.
          </p>

          <p>Here are some useful links:</p>

          <ul>
            <li><a href="https://fun-care.com/#programs" style="color:#90B7B3;">Browse Our Programs</a></li>
            <li><a href="https://instagram.com/funcareinstitute" style="color:#E59BAA;">Follow us on Instagram</a></li>
            <li><a href="https://www.tiktok.com/@funcareinstitute" style="color:#FFD166;">Join us on TikTok</a></li>
          </ul>

          <p>Thanks for joining our community — joyful things are ahead! 🌼</p>

          <p>Warmly,<br>FunCare Institute</p>
        </div>
      `,
    });

    console.log("Email sent:", data);
    return true;
  } catch (err) {
    console.error("Email Error:", err);
    return false;
  }
};