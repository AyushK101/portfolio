import emailjs from '@emailjs/browser'

import {  contactSchemaType } from '../types'

export const emailService = async (data: contactSchemaType) => {
  const templatePrams = data
  return await emailjs.send(
    import.meta.env.VITE_EMAIL_SERVICE_ID,
    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    templatePrams,
    {
      publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      limitRate: {
        throttle: 100
      }
    }
  )
}