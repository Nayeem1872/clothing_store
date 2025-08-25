import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields" },
        { status: 400 }
      );
    }

    // Check if email credentials are configured
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      process.env.EMAIL_USER === "your-email@gmail.com" ||
      process.env.EMAIL_PASS === "your-app-password"
    ) {
      // For development/testing - just log the form submission
      console.log("📧 Contact Form Submission (Email not configured):");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Company:", company || "Not provided");
      console.log("Phone:", phone || "Not provided");
      console.log("Subject:", subject || "Not provided");
      console.log("Message:", message);
      console.log("Target Email: hasibul.islam.1872@gmail.com");
      console.log("---");

      return NextResponse.json(
        {
          message:
            "Form submitted successfully! Email would be sent to hasibul.islam.1872@gmail.com (Configure EMAIL_USER and EMAIL_PASS in .env.local for actual sending)",
        },
        { status: 200 }
      );
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const emailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">From TR Trade Website</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <div style="margin-bottom: 25px;">
            <h2 style="color: #374151; margin: 0 0 20px 0; font-size: 22px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Contact Information</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; width: 120px;">
                  <strong style="color: #4f46e5;">Name:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #4f46e5;">Email:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${
                company
                  ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #4f46e5;">Company:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    ${company}
                  </td>
                </tr>
              `
                  : ""
              }
              ${
                phone
                  ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #4f46e5;">Phone:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
              `
                  : ""
              }
              ${
                subject
                  ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #4f46e5;">Subject:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    ${subject}
                  </td>
                </tr>
              `
                  : ""
              }
            </table>
          </div>
          
          <div style="margin-bottom: 25px;">
            <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 18px;">Message:</h3>
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #4f46e5; white-space: pre-wrap; line-height: 1.6;">
${message}
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px 0; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; margin: 0; font-size: 14px;">
              This email was sent from the TR Trade contact form.<br>
    Please respond to <a href="mailto:${email}" style="color: #2563eb;">${email}</a> directly.<br>
    This email is powered by <a href="" style="color: #2563eb;">AATRON SOLUTIONS</a>
            </p>
          </div>
        </div>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: `"R Trade Contact Form" <${process.env.EMAIL_USER}>`,
      to: "hasibul.islam.1872@gmail.com",
      replyTo: email,
      subject: subject
        ? `Contact Form: ${subject}`
        : `New Contact Form Submission from ${name}`,
      html: emailHTML,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ""}
${phone ? `Phone: ${phone}` : ""}
${subject ? `Subject: ${subject}` : ""}

Message:
${message}

---
This email was sent from the R Trade contact form.
Please respond to ${email} directly.
      `,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      console.log("✓ Email sent successfully to hasibul.islam.1872@gmail.com");
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      throw emailError;
    }

    return NextResponse.json(
      { message: "Email sent successfully to hasibul.islam.1872@gmail.com!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact API:", error);

    // Provide more specific error messages
    let errorMessage = "Failed to send email. Please try again later.";

    if (error instanceof Error) {
      if (error.message.includes("Invalid login")) {
        errorMessage =
          "Email authentication failed. Please check your email credentials.";
      } else if (error.message.includes("ECONNREFUSED")) {
        errorMessage =
          "Unable to connect to email server. Please check your internet connection.";
      } else if (error.message.includes("ENOTFOUND")) {
        errorMessage =
          "Email server not found. Please check your email configuration.";
      }
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
