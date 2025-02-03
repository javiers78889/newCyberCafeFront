import { verifySession } from '@/src/auth/dal'
import React from 'react'
import Datos from './Datos'

export default async function page() {
    const { user } = await verifySession()
  return (
    <Datos user={user}/>
  )
}
