import { z } from "zod"

const registerSchema = z.object({
  firstName: z.string().min(1, "الاسم مطلوب"),
  lastName: z.string().min(1, "الاسم مطلوب"),
  email: z.string().email("الرجاء كتابة ايميل صالح"),
  password: z.string().min(8, "كلمة المرور قصيرة للغاية"),
})

export { registerSchema }
