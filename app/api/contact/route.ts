import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message, projectType } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email service integration using Resend
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Inquiry Type: ${projectType}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
    `.trim()

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in environment variables')
      // In development, log the email content
      console.log('Contact Form Submission (Email not sent - API key missing):', {
        name,
        email,
        projectType,
        subject,
        message,
      })
      return NextResponse.json(
        { 
          error: 'Email service not configured',
          message: 'Please configure RESEND_API_KEY in .env.local file'
        },
        { status: 500 }
      )
    }

    // Using Resend to send email
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    try {
      const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>', // Using Resend's test domain
        to: ['irulappan8720@gmail.com'], // Your Resend account email (required for testing)
        subject: `Portfolio Contact: ${subject}`,
        text: emailContent,
        replyTo: email, // This allows you to reply directly to the sender
      })

      if (error) {
        console.error('Resend error:', error)
        return NextResponse.json(
          { error: 'Failed to send email', details: error },
          { status: 500 }
        )
      }

      console.log('Email sent successfully:', data)
    } catch (error) {
      console.error('Error sending email:', error)
      return NextResponse.json(
        { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
        { status: 500 }
      )
    }

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        // In development, you can return the email data for testing
        // Remove this in production
        ...(process.env.NODE_ENV === 'development' && {
          emailData: {
            to: 'aaravthe010121@gmail.com',
            subject: `Portfolio Contact: ${subject}`,
            content: emailContent,
          }
        })
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

