import ConfirmAccountForm from '@/components/auth/ConfirmAccountForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'CyberCafe - Confirm-account',
    description: 'CyberCafe - Confirm-account'
}
export default function page() {
    return (
        <>
            <h1 className="font-black text-6xl text-purple-950">Confirma tu cuenta</h1>
            <p className="text-3xl font-bold">Ingresa el código que recibiste <span className="text-amber-500">por Email</span></p>

            <ConfirmAccountForm />
        </>
    )
}
