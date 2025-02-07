import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
  debug: true,
  logger: true
});

export async function POST(request: Request) {
  try {
    console.log('Received contact form submission');
    const body = await request.json();
    const { firstName, lastName, email, companyName } = body;

    console.log('Form data:', { firstName, lastName, email, companyName });

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
      to: process.env.ADMIN_EMAIL,
      subject: `New Consultation Request from ${firstName} ${lastName}`,
      html: htmlContent,
      replyTo: email,
    };

    console.log('Attempting to send email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);

    return NextResponse.json({ message: 'Email sent successfully', info }, { status: 200 });
  } catch (error) {
    console.error('Detailed error in contact route:', {
      error: error instanceof Error ? {
        message: error.message,
        name: error.name,
        stack: error.stack
      } : error
    });
    
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send email' },
      { status: 500 }
    );
  }
} 