import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "All fields are required." }),
        { status: 400 }
      );
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.FUNCARE_EMAIL,
        pass: process.env.FUNCARE_EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: process.env.FUNCARE_EMAIL,
      subject: `New Contact Form Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message:
        ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully." }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Something went wrong while sending the email.",
      }),
      { status: 500 }
    );
  }
}
