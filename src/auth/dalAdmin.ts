"use server"
import { redirect } from "next/navigation"
import { verifySession } from "./dal"
import { cache } from "react"


export const AdminPrivilege = cache(async () => {
    const { user } = await verifySession()

    if (user.id !== 1) {
        redirect('/admin')

    }
    return { response: true }
})