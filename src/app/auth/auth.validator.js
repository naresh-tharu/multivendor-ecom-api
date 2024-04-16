import { z } from 'zod'
const registerSchema = z.object({
  name: z.string().min(2).max(25),
  email: z.string().email(),
  phone: z.string().regex(/(\+977)?[9][6-9]\d{8}/),
  role: z.string().regex(/admin|seller|customer/),
  address: z.string()
})

export {
  registerSchema
}