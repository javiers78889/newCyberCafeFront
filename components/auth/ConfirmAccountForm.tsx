"use client"
import { ConfirmAccount } from '@/actions/confirm-account-action'
import { PinInput, PinInputField } from '@chakra-ui/pin-input'
import { error } from 'console'
import { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
export default function ConfirmAccountForm() {
    const [token, setToken] = useState("")
    const [state, dispatch] = useFormState(ConfirmAccount,{
        error:[],
        success:""
    })
    
    console.log(state)

    const onWrite = (data: string) => {
        setToken(data)
    }
 
    return (
        <div className='flex justify-center gap-5 my-10'>

            <PinInput
                value={token}
                onChange={onWrite}
                onComplete={dispatch}
            >

                <PinInputField className='h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center' />
                <PinInputField className='h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center' />
                <PinInputField className='h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center' />
                <PinInputField className='h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center' />
                <PinInputField className='h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center' />
                <PinInputField className='h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center' />



            </PinInput>


        </div>
    )
}
