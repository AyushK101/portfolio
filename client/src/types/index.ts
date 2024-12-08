
import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().min(1,{message: "please enter your name"}),
  email: z.string().email({ message: 'email is invalid' }),
  message: z.string().min(1, { message: "please enter your message" })
})

export type contactSchemaType = z.infer<typeof contactSchema>
