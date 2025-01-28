"use client"
import { ConfirmAccount } from '@/actions/confirm-account-action'
import { PinInput, PinInputField } from '@chakra-ui/pin-input'
import { stat } from 'fs'
import { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import SuccessMessage from '../ui/SuccessMessage'
import ErrorMessage from '../ui/ErrorMessage'
import { toast, Toaster } from 'sonner'
export default function ConfirmAccountForm() {
    const [isComplete, setIscomplete] = useState(false)
    const [token, setToken] = useState("")
    const confirmAccountWithToken = ConfirmAccount.bind(null, token) // enviar el token al use server
    const [state, dispatch] = useFormState(confirmAccountWithToken, {
        error: [],
        success: ""
    })

    useEffect(() => {
        dispatch()

    }, [isComplete])

    const onWrite = (data: string) => {
        setToken(data)
    }

    const Complete = () => {
        setIscomplete(true)
    }

    if (state.success) {
        toast.success(state.success)
    } else {
        toast.error(state.error)
    }
    return (
        <div className='flex justify-center flex-col'>
            <Toaster position="top-right" richColors />
            <div className='flex justify-center gap-5 my-10'>
                <PinInput
                    value={token}
                    onChange={onWrite}
                    onComplete={Complete}
                >

                    <PinInputField className='h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center' />
                    <PinInputField className='h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center' />
                    <PinInputField className='h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center' />
                    <PinInputField className='h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center' />
                    <PinInputField className='h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center' />
                    <PinInputField className='h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center' />



                </PinInput>

            </div>
        </div>
    )
}
