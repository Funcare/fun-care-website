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

export const sendMeetingConfirmationEmail = async (meetingData) => {
  try {
    const { name, email, preferredDate, preferredTime, meetingType, message } = meetingData;
    const date = new Date(preferredDate).toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    const data = await resend.emails.send({
      from: "FunCare <onboarding@resend.dev>",
      to: email,
      subject: "Meeting Request Confirmed - FunCare Institute",
      html: `
        <div style="font-family: Arial; padding: 20px; max-width: 600px;">
          <h2 style="color:#E59BAA;">Thank You, ${name}!</h2>
          <p>We've received your meeting request and we're excited to connect with you.</p>
          
          <div style="background-color: #FFF4E3; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color:#90B7B3; margin-top: 0;">Meeting Details:</h3>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${preferredTime}</p>
            <p><strong>Type:</strong> ${meetingType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
            ${message ? `<p><strong>Your Message:</strong> ${message}</p>` : ''}
          </div>
          
          <p>Our team will review your request and reach out to you shortly to confirm the meeting details.</p>
          
          <p>If you have any questions or need to make changes, please don't hesitate to contact us at <a href="mailto:funcareinstitute@gmail.com" style="color:#90B7B3;">funcareinstitute@gmail.com</a> or call us at +1 (416) 432‑5568.</p>
          
          <p>We look forward to speaking with you!</p>
          
          <p>Warmly,<br><strong>FunCare Institute Team</strong></p>
        </div>
      `,
    });

    console.log("Meeting confirmation email sent:", data);
    return true;
  } catch (err) {
    console.error("Email Error:", err);
    return false;
  }
};

export const sendAdminMeetingNotification = async (meetingData) => {
  try {
    const { name, email, phone, company, preferredDate, preferredTime, meetingType, message } = meetingData;
    const date = new Date(preferredDate).toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    const data = await resend.emails.send({
      from: "FunCare <onboarding@resend.dev>",
      to: "funcare.institute.1@gmail.com",
      subject: `New Meeting Request from ${name} - FunCare Institute`,
      html: `
        <div style="font-family: Arial; padding: 20px; max-width: 600px;">
          <h2 style="color:#E59BAA;">New Meeting Request Received</h2>
          <p>A new meeting booking has been submitted through the website.</p>
          
          <div style="background-color: #FFF4E3; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color:#90B7B3; margin-top: 0;">Contact Information:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          </div>
          
          <div style="background-color: #FFF4E3; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color:#90B7B3; margin-top: 0;">Meeting Details:</h3>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${preferredTime}</p>
            <p><strong>Type:</strong> ${meetingType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
            ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
          </div>
          
          <p style="margin-top: 20px;">
            <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}/admin/meetings" 
               style="background-color: #E59BAA; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
              View in Admin Panel
            </a>
          </p>
        </div>
      `,
    });

    console.log("Admin notification email sent:", data);
    return true;
  } catch (err) {
    console.error("Email Error:", err);
    return false;
  }
};