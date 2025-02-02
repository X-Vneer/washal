import { z } from "zod"

const updateUserSchema = z.object({
  firstName: z.string().min(1, "الاسم مطلوب"),
  lastName: z.string().min(1, "الاسم مطلوب"),
  email: z.string().email("الرجاء كتابة ايميل صالح"),
})

export { updateUserSchema }
