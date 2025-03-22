// import type { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }

//   const { Name, Email, Phone, Address, Message, Service } = req.body;

//   if (!Name || !Email || !Message) {
//     return res.status(400).json({ error: "Name, Email, and Message are required." });
//   }

//   try {
//     // Configure the email transport
//     const transporter = nodemailer.createTransport({
//       service: "Gmail", // or use "SMTP" settings
//       auth: {
//         user: process.env.EMAIL_USER, // Your email address
//         pass: process.env.EMAIL_PASS, // Your email password or app password
//       },
//     });

//     // Email content
//     const mailOptions = {
//       from: Email, // Sender's email
//       to: process.env.EMAIL_TO, // Your email to receive messages
//       subject: `New Contact Form Submission from ${Name}`,
//       text: `
//         Name: ${Name}
//         Email: ${Email}
//         Phone: ${Phone || "N/A"}
//         Address: ${Address || "N/A"}
//         Service: ${Service || "N/A"}

//         Message:
//         ${Message}
//       `,
//     };
//     // Send email
//     await transporter.sendMail(mailOptions);

//     return res.status(200).json({ message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Email sending error:", error);
//     return res.status(500).json({ error: "Failed to send email." });
//   }
// }
