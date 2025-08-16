import sgMail from '@sendgrid/mail';

import { NextRequest, NextResponse } from 'next/server';

import { contactFormSchema } from '@/lib/contact-form';

const apiKey = process.env.SENDGRID_API_KEY;
const toEmail = process.env.CONTACT_EMAIL_TO;
const fromEmail = process.env.CONTACT_EMAIL_FROM;

if (!apiKey || !toEmail || !fromEmail) {
  console.error('Missing SendGrid configuration:', {
    apiKey: !!apiKey,
    toEmail: !!toEmail,
    fromEmail: !!fromEmail,
  });
  throw new Error('SendGrid configuration missing');
}

sgMail.setApiKey(apiKey);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = contactFormSchema.parse(body);

    const { name, email, company, role, painPoint, vision, additionalInfo } = validatedData;

    console.log('Processing form submission:', {
      name,
      email,
      hasContent: !!painPoint || !!vision || !!additionalInfo,
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fff;">
            <tr>
              <td style="background-color: #000; color: #fff; padding: 20px; text-align: center;">
                <h1 style="margin: 0;">New Contact Form Submission</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px;">
                <table width="100%" cellpadding="10">
                  <tr>
                    <td><strong>Name:</strong></td>
                    <td>${name}</td>
                  </tr>
                  <tr>
                    <td><strong>Email:</strong></td>
                    <td>${email}</td>
                  </tr>
                  ${
                    company
                      ? `
                  <tr>
                    <td><strong>Company:</strong></td>
                    <td>${company}</td>
                  </tr>
                  `
                      : ''
                  }
                  ${
                    role
                      ? `
                  <tr>
                    <td><strong>Role:</strong></td>
                    <td>${role}</td>
                  </tr>
                  `
                      : ''
                  }
                  <tr><td colspan="2" style="border-top: 1px solid #eee; padding-top: 20px;"></td></tr>
                  <tr>
                    <td><strong>Current Challenge:</strong></td>
                    <td>${painPoint || 'Not provided'}</td>
                  </tr>
                  <tr>
                    <td><strong>Future Vision:</strong></td>
                    <td>${vision || 'Not provided'}</td>
                  </tr>
                  <tr>
                    <td><strong>Additional Info:</strong></td>
                    <td>${additionalInfo || 'Not provided'}</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    // Log the exact email configuration being used
    console.log('Sending email to:', toEmail);

    const emailData = {
      to: toEmail!,
      from: fromEmail!,
      subject: `New Contact Form Submission from ${name}`,
      html: htmlContent,
      replyTo: email,
    } as const;

    const response = await sgMail.send(emailData);

    console.log('Email sent:', response[0].statusCode);

    return NextResponse.json({
      success: true,
      message: `Email sent successfully with status code ${response[0].statusCode}`,
    });
  } catch (error) {
    if (error instanceof Error && 'response' in error) {
      const sendGridError = error as { response?: { body: unknown } };
      console.error('SendGrid error:', sendGridError.response?.body);
    } else if (error instanceof Error) {
      console.error('Error:', error.message);
    }

    return NextResponse.json(
      {
        error: 'Failed to send message',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
