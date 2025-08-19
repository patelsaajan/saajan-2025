import { Resend } from 'resend'

export default defineEventHandler(async () => {
  const resend          = new Resend(process.env.RESEND_API_KEY)
  const resendFromEmail = process.env.RESEND_FROM_EMAIL
  const resendToEmail   = process.env.RESEND_TO_EMAIL

  try {
    const data = await resend.emails.send({
      from: `Info <${resendFromEmail}>`,
      to: [`Saajan Patel <${resendToEmail}>`],
      subject: 'Test email from Resend',
      html: '<strong>Hello, this works!</strong>',
    })
    console.log('data', data)
    return data
  } catch (error) {
    console.log('error', error)
    return { data: null, error }
  }
})
