import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD // Use App Password from Gmail
  }
});

interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
}

export async function sendMeetingRequest(userDetails: UserDetails) {
  const htmlTemplate = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            font-family: Arial, sans-serif;
            color: #344054;
          }
          .header {
            background-color: #2E90FA;
            color: white;
            padding: 20px;
            text-align: center;
          }
          .content {
            padding: 20px;
            background-color: #f9fafb;
          }
          .details {
            background-color: white;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>New Meeting Request</h1>
          </div>
          <div class="content">
            <p>A new meeting request has been submitted with the following details:</p>
            <div class="details">
              <p><strong>Name:</strong> ${userDetails.firstName} ${userDetails.lastName}</p>
              <p><strong>Email:</strong> ${userDetails.email}</p>
              <p><strong>Company:</strong> ${userDetails.companyName}</p>
            </div>
            <p>Please follow up with the client to schedule the meeting.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL, // Your email where you want to receive notifications
    subject: `New Meeting Request from ${userDetails.firstName} ${userDetails.lastName}`,
    html: htmlTemplate
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
} 