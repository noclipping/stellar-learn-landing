import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, type } = req.body;

  if (!name || !email || !phone || type !== "waitlist") {
    return res.status(400).json({ message: "Invalid request data" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"stellar-learn.com" <${process.env.EMAIL_USER}>`,
      to: process.env.WAITLIST_EMAIL,
      subject: "✨ New Waitlist Signup ✨",
      text: `Hello Team,
    
    ${name} has signed up for the waitlist on stellar-learn.com. Here are their details:
    
    Name: ${name}
    Email: ${email}
    Phone: ${phone}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #6B46C1;">✨ New Waitlist Signup ✨</h2>
          <p>Hello Team,</p>
          <p>${name} has signed up for the waitlist on <strong>stellar-learn.com</strong>. Here are their details:</p>
          <table style="border-collapse: collapse; width: 100%; margin-top: 15px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
            </tr>
          </table>
        </div>
      `,
    };
    
    
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);

    // Safely check if error is an instance of Error
    if (error instanceof Error) {
      res.status(500).json({ message: "Failed to send email", error: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
}
