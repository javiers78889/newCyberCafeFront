import { z } from 'zod'


export const RegisterSchema = z.object({
    email: z.string().min(1, { message: 'El email es obligatorio' }).email({ message: 'Email no válido' }),
    name: z.string().min(1, { message: 'El nombre no puede ir vacío' }),
    password: z.string().min(8, { message: 'El password debe tener mínimo 8 carácteres' }),
    password_confirmation: z.string()

}).refine((data) => data.password === data.password_confirmation, { message: 'Los password no son iguales', path: ['password_confirmation'] })

export const SuccessSchema = z.string().min(1, { message: 'Valor no valido' })

export const ErrorResponseSchema = z.object({
    error: z.string()
})

export const ConfirmAccountSchema = z.string().min(6, { message: 'Token no valido, muy corto' }).max(6, { message: 'Token no valido' })

export const LoginSchema = z.object({
    correo: z.string().min(1, { message: 'El email es Obligatorio para iniciar sesion' }).email({ message: 'No es un formato válido para email' }),
    password: z.string().min(1, { message: 'El Password no puede ir vacío' })
})

export const UserSchema = z.object({
    id: z.number(),
    nombre: z.string(),
    correo: z.string().email()
})

export type User = z.infer<typeof UserSchema>

export const ForgotSchema = z.object({
    email: z.string().email('Email no válido')
})