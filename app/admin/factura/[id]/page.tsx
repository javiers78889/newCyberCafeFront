"use client"
import { ConsultarFactura } from '@/actions/generate-pdf-action'
import Factura from '@/components/PDF/pdf'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'

export default function page() {
  const id = useParams()
  const [factura, setFactura] = useState<{ 
    id: number; 
    pago: string; 
    peso: number; 
    precio: number; 
    status: string; 
    tarifas: number; 
    tracking: string; 
    usuario: string; 
  }[]>([]);


  useEffect(() => {
    const consulta= async ()=>{
      const datos= await ConsultarFactura(id)
      setFactura(datos.success)
    }
    consulta()
  }, [])

  if(factura.length>0)
  return (
    <Factura factura={factura}/>
  )
  else{
    return <div className='text-2xl font-black text-red-600'>
      <h1 className='text-center'>Cargando...</h1>
    </div>
  }
}
