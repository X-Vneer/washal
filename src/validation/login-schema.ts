import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email("الرجاء كتابة ايميل صالح"),
  password: z.string().min(1, "كلمة المرور مطلوبة"),
})

export { loginSchema }
