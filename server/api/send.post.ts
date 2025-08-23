import { contactFormSchema } from '~/schemas/contactForm'

export default defineEventHandler(async (event) => {
  const { Resend } = await import('resend')
  const resend = new Resend(process.env.RESEND_API_KEY)
  const FROM_EMAIL = process.env.RESEND_FROM_EMAIL
  const TO_EMAIL = process.env.RESEND_TO_EMAIL

  const body = await readBody(event)

  if (body.lastName) return { success: false, error: 'Bot detected' }

  const parsed = contactFormSchema.safeParse(body)
  if (!parsed.success) return { success: false, error: parsed.error.format() }

  const { name, email, phone, subject, message } = parsed.data

  try {
    const data = await resend.emails.send({
      from: `Info <${FROM_EMAIL}>`,
      to: [`Saajan Patel <${TO_EMAIL}>`],
      subject: `[Website Form] ${subject}`,
      html: `
        <h2>New message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })
    return { success: true, data }
  } catch (err) {
    console.error('Error sending email:', err)
    return { success: false, error: 'Failed to send email' }
  }
})
