import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      company,
      phone,
      meetingType,
      preferredDate,
      preferredTime,
      timezone,
      message,
    } = body;

    // Validate required fields
    if (!name || !email || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: "Name, email, preferred date, and time are required fields" },
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
      // For development/testing - just log the meeting request
      console.log("📅 Meeting Request Submission (Email not configured):");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Company:", company || "Not provided");
      console.log("Phone:", phone || "Not provided");
      console.log("Meeting Type:", meetingType);
      console.log("Preferred Date:", preferredDate);
      console.log("Preferred Time:", preferredTime);
      console.log("Timezone:", timezone);
      console.log("Message:", message || "No additional message");
      console.log("Target Email: hasibul.islam.1872@gmail.com");
      console.log("---");

      return NextResponse.json(
        {
          message:
            "Meeting request submitted successfully! Email would be sent to hasibul.islam.1872@gmail.com (Configure EMAIL_USER and EMAIL_PASS in .env.local for actual sending)",
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

    // Meeting type mapping
    const meetingTypes: Record<string, { label: string; duration: string }> = {
      consultation: { label: "General Consultation", duration: "30 minutes" },
      "project-discussion": {
        label: "Project Discussion",
        duration: "45 minutes",
      },
      "pricing-review": { label: "Pricing Review", duration: "30 minutes" },
      "factory-tour": { label: "Virtual Factory Tour", duration: "60 minutes" },
    };

    const selectedMeeting = meetingTypes[meetingType] || {
      label: meetingType,
      duration: "TBD",
    };

    // Format date for better readability
    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

    // Email content for the business
    const businessEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">New Meeting Request</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">From TR Trade Website</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <div style="margin-bottom: 25px;">
            <h2 style="color: #374151; margin: 0 0 20px 0; font-size: 22px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Meeting Request Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; width: 140px;">
                  <strong style="color: #4f46e5;">Client Name:</strong>
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
              <tr style="background: #f9fafb;">
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #4f46e5;">Meeting Type:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  ${selectedMeeting.label} (${selectedMeeting.duration})
                </td>
              </tr>
              <tr style="background: #f9fafb;">
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #4f46e5;">Preferred Date:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong>${formatDate(preferredDate)}</strong>
                </td>
              </tr>
              <tr style="background: #f9fafb;">
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #4f46e5;">Preferred Time:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong>${preferredTime} (${timezone})</strong>
                </td>
              </tr>
            </table>
          </div>
          
          ${
            message
              ? `
            <div style="margin-bottom: 25px;">
              <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 18px;">Additional Message:</h3>
              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #4f46e5; white-space: pre-wrap; line-height: 1.6;">
${message}
              </div>
            </div>
          `
              : ""
          }
          
          <div style="text-align: center; padding: 20px 0; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; margin: 0; font-size: 14px;">
              This meeting request was submitted from the TR Trade website.<br>
              Please respond to <a href="mailto:${email}" style="color: #2563eb;">${email}</a> to confirm the meeting.
            </p>
          </div>
        </div>
      </div>
    `;

    // Email content for the client (confirmation)
    const clientEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
        <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Meeting Request Confirmed</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">TR Trade - Garment Sourcing</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <div style="margin-bottom: 25px;">
            <h2 style="color: #374151; margin: 0 0 20px 0; font-size: 22px;">Thank you, ${name}!</h2>
            <p style="color: #6b7280; line-height: 1.6;">
              We've received your meeting request and will get back to you within 24 hours to confirm the details.
            </p>
          </div>
          
          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
            <h3 style="color: #15803d; margin: 0 0 15px 0; font-size: 18px;">Requested Meeting Details:</h3>
            <div style="color: #374151;">
              <p><strong>Type:</strong> ${selectedMeeting.label}</p>
              <p><strong>Duration:</strong> ${selectedMeeting.duration}</p>
              <p><strong>Date:</strong> ${formatDate(preferredDate)}</p>
              <p><strong>Time:</strong> ${preferredTime} (${timezone})</p>
            </div>
          </div>
          
          <div style="margin-bottom: 25px;">
            <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 18px;">What's Next?</h3>
            <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
              <li>Our team will review your request and confirm availability</li>
              <li>You'll receive a calendar invitation with meeting details</li>
              <li>We'll send you any necessary preparation materials</li>
              <li>A meeting link will be provided if it's a virtual meeting</li>
            </ul>
          </div>
          
          <div style="text-align: center; padding: 20px 0; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; margin: 0; font-size: 14px;">
              Questions? Contact us at <a href="mailto:info@rtrade.com" style="color: #2563eb;">info@rtrade.com</a><br>
              or call us at <a href="tel:+8801711123456" style="color: #2563eb;">+880 1711-123456</a>
            </p>
          </div>
        </div>
      </div>
    `;

    // Send email to business
    const businessMailOptions = {
      from: `"TR Trade Meeting System" <${process.env.EMAIL_USER}>`,
      to: "hasibul.islam.1872@gmail.com",
      replyTo: email,
      subject: `New Meeting Request - ${selectedMeeting.label} on ${formatDate(
        preferredDate
      )}`,
      html: businessEmailHTML,
      text: `
New Meeting Request

Client: ${name}
Email: ${email}
${company ? `Company: ${company}` : ""}
${phone ? `Phone: ${phone}` : ""}

Meeting Details:
Type: ${selectedMeeting.label} (${selectedMeeting.duration})
Date: ${formatDate(preferredDate)}
Time: ${preferredTime} (${timezone})

${message ? `Message: ${message}` : ""}

Please respond to ${email} to confirm the meeting.
      `,
    };

    // Send confirmation email to client
    const clientMailOptions = {
      from: `"TR Trade" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Meeting Request Confirmed - ${selectedMeeting.label}`,
      html: clientEmailHTML,
      text: `
Dear ${name},

Thank you for your meeting request. We've received the following details:

Meeting Type: ${selectedMeeting.label} (${selectedMeeting.duration})
Requested Date: ${formatDate(preferredDate)}
Requested Time: ${preferredTime} (${timezone})

We'll review your request and get back to you within 24 hours to confirm the details.

Best regards,
TR Trade Team
      `,
    };

    // Send both emails
    try {
      await Promise.all([
        transporter.sendMail(businessMailOptions),
        transporter.sendMail(clientMailOptions),
      ]);
      console.log("✓ Meeting request emails sent successfully");
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      throw emailError;
    }

    return NextResponse.json(
      {
        message:
          "Meeting request submitted successfully! Confirmation emails have been sent.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in meeting API:", error);

    // Provide more specific error messages
    let errorMessage = "Failed to schedule meeting. Please try again later.";

    if (error instanceof Error) {
      if (error.message.includes("Invalid login")) {
        errorMessage =
          "Email authentication failed. Please check email configuration.";
      } else if (error.message.includes("ECONNREFUSED")) {
        errorMessage =
          "Unable to connect to email server. Please check your internet connection.";
      } else if (error.message.includes("ENOTFOUND")) {
        errorMessage =
          "Email server not found. Please check email configuration.";
      }
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
