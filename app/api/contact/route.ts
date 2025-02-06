import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD, // Use App Password from Gmail
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, companyName } = body;

    // HTML email template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            .container {
              padding: 20px;
              font-family: Arial, sans-serif;
            }
            .header {
              background: linear-gradient(to right, #05539D, #6BB8D4);
              color: white;
              padding: 20px;
              border-radius: 5px;
            }
            .content {
              padding: 20px;
              background: #f9f9f9;
              border-radius: 5px;
              margin-top: 20px;
            }
            .field {
              margin: 10px 0;
            }
            .label {
              font-weight: bold;
              color: #05539D;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Consultation Request</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span> ${firstName} ${lastName}
              </div>
              <div class="field">
                <span class="label">Email:</span> ${email}
              </div>
              <div class="field">
                <span class="label">Company:</span> ${companyName}
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to your email
      subject: `New Consultation Request from ${firstName} ${lastName}`,
      html: htmlContent,
      replyTo: email, // Allow direct reply to the client
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 