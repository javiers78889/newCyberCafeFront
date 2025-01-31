import "server-only"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { UserSchema } from "../schemas"
import { cache } from "react"


export const verifySession = cache(async () => {
    const jwt = cookies().get('jwt')?.value

    if (!jwt) {
        redirect('/auth/login')
    }

    const url = `${process.env.API_URL}/users`

    const req = await fetch(url, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })

    const session = await req.json()

    const result = UserSchema.safeParse(session)
    console.log(result.error)

    if (!result.success) {
        console.log('No entro')
        redirect('/auth/login')
    } else {

        return {
            user: result.data,
            isAuth: true
        }
    }
})