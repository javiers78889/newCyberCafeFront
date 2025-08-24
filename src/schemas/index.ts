import { z } from 'zod'


export const RegisterSchema = z.object({
    nombre: z.string({message:'ingrese un nombre'}).min(1, { message: 'El nombre no puede ir vacío' }),
    correo: z.string({message:'ingrese un correo'}).min(1, { message: 'El email es obligatorio' }).email({ message: 'Email no válido' }),
    telefono: z.string({message:'ingrese un telefono'}).min(1,{message:'telefono no valido'}),
    password: z.string({message:'ingrese un password'}).min(8, { message: 'El password debe tener mínimo 8 carácteres' }),
    password_confirmation: z.string({message:'No ha confirmado el password'}).min(1,{message:'No ha confirmado el password'})

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
    correo: z.string()
})

export type User = z.infer<typeof UserSchema>

export const ForgotSchema = z.object({
    usuario: z.string().min(1,{message:'Usuario incorrecto'}),
    correo: z.string().email({message:'Correo no válido'}),
    password: z.string({message:'El password no puede ir vacio'}).min(8, { message: 'El Password debe tener minimo 8 carácteres.' }),
    password_confirm: z.string().min(1,{message:'Contraseña no válida'})
}).refine(data=> data.usuario.startsWith("Evan3-"),{message:'Formato Incorrecto'} ).refine(datos=> datos.password === datos.password_confirm,{message:'Los password no coinciden'})


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


export const UsuariosSchema = z.array(
    z.object({
        id: z.number(),
        usuario: z.string().min(1, { message: 'Dato no esperado' }),
        contraseña: z.string().min(1, { message: 'Dato no esperado' }),
        isAuth: z.boolean(),
        nombre: z.string().min(1, { message: 'Dato no esperado' }),
        plan: z.string().min(1, { message: 'Dato no esperado' }),
        telefono: z.string().min(1, { message: 'Dato no esperado' }),
        correo: z.string().email({message:'Correo no valido'}).optional().nullable(),
        fechaNacimiento: z.date().optional().nullable()
    })


)

export const UDataSchema = z.array(
    z.object({
        id: z.number(),
        usuario: z.string().min(1, { message: 'Dato no esperado' }),
        contraseña: z.string().min(1, { message: 'Dato no esperado' }),
        nombre: z.string().min(1, { message: 'Dato no esperado' }),
        telefono: z.string().min(1, { message: 'Dato no esperado' }),
        correo: z.string().email({ message: 'Correo no valido' }).optional().nullable()
    })
);

export type Usuarios = z.infer<typeof UDataSchema>


export const PaquetesSchema = z.object({

    usuario: z.string().min(1,{message:'Usuario no valido'}),
    tracking: z.string().min(1,{message:'Tracking no valido'}),
    peso: z.number({message:'El peso debe ser numerico'}).min(1,{message:'El peso debe ser numerico'}),
    plan: z.string({message:'Elija un plan'}).min(1,{message:'plan invalido'})
}).refine(data => data.plan === 'aereo' || data.plan === 'maritimo')


export const editPerfilSchema = z.object({
    nombre: z.string().min(1,{message:'Nombre invalido'}),
    correo:z.string().email({message:'Correo no valido'}),
    correo_confirm: z.string().email({message:'Correo no valido'})
}).refine(data=> data.correo === data.correo_confirm,{message:'los correos no coinciden'})

export const EntregarPaqueteSchema = z.number({message:'El Id debe ser numerico'}).min(1,{message:'ID muy corto'})

export const RastreoSchema = z.string().min(1,{message: 'Ingrese Un tracking'})