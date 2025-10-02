import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // For now, just log the data (you can integrate with email service later)
    console.log('Contact form submission:', {
      name,
      email,
      subject: subject || 'Portfolio Contact Form',
      message,
      timestamp: new Date().toISOString(),
    })

    // Here you can add your email sending logic:
    // - SendGrid
    // - Nodemailer with SMTP
    // - Resend
    // - Or any other email service

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message received successfully' 
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
