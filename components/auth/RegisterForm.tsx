"use client"

import { createAccount } from "@/actions/create-account-action"
import { useFormState } from "react-dom"
import ErrorMessage from "../ui/ErrorMessage"
import SuccessMessage from "../ui/SuccessMessage"
import { useEffect, useRef } from "react"

export default function RegisterForm() {
  const ref = useRef<HTMLFormElement>(null)
  const [state, dispatch] = useFormState(createAccount, {
    errors: [],
    success: ''
  })

  useEffect(() => {
    if (state.success) {
      ref.current?.reset()
    }
  }, [state])

  return (
    <form
      ref={ref}
      action={dispatch}
      className="mt-14 space-y-5"
      noValidate
    >
      {state.errors.map(n => <ErrorMessage>{n}</ErrorMessage>)}
      {state.success ? (<SuccessMessage>{state.success}</SuccessMessage>) : ('')}


      <div className="flex flex-col gap-2">
        <label
          className="font-bold text-2xl"
          htmlFor="email"
        >Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email de Registro"
          className="w-full border border-gray-300 p-3 rounded-lg"
          name="email"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          className="font-bold text-2xl"
        >Nombre</label>
        <input
          type="name"
          placeholder="Nombre de Registro"
          className="w-full border border-gray-300 p-3 rounded-lg"
          name="name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          className="font-bold text-2xl"
        >Password</label>
        <input
          type="password"
          placeholder="Password de Registro"
          className="w-full border border-gray-300 p-3 rounded-lg"
          name="password"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          className="font-bold text-2xl"
        >Repetir Password</label>
        <input
          id="password_confirmation"
          type="password"
          placeholder="Repite Password de Registro"
          className="w-full border border-gray-300 p-3 rounded-lg"
          name="password_confirmation"
        />
      </div>

      <input
        type="submit"
        value='Registrarme'
        className="bg-red-600 hover:bg-red-800 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer block"
      />
    </form>
  )
}
