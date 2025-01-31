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
    usuario: z.string().min(1, { message: 'El usuario es Obligatorio para iniciar sesion' }),
    password: z.string().min(1, { message: 'El Password no puede ir vacío' })
})

export const UserSchema = z.object({
    id: z.number(),
    nombre: z.string(),
    correo: z.string().email().optional().nullable()
})

export type User = z.infer<typeof UserSchema>

export const ForgotSchema = z.object({
    email: z.string().email('Email no válido')
})


export const getUserSchema = z.array(
    z.object({
        id: z.number(),
        usuario: z.string().min(1, { message: 'Dato no esperado' }),
        tracking: z.string().min(1, { message: 'Dato no esperado' }),
        peso: z.number(),
        precio: z.number(),
        tarifas: z.number(),
        status: z.string(),
        pago: z.string()
    })


)

export type getUsers = z.infer<typeof getUserSchema>