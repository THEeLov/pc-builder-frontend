import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
})

export const registerSchema = z.object({
    username: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
})
