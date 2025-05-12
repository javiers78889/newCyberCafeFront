import NuestrosServicios from '@/components/landingpage/NuestrosServicios'
import Principal from '@/components/landingpage/Principal'
import RastrearPaquete from '@/components/landingpage/RastrearPaquete'
import Tiendas from '@/components/landingpage/Tiendas'
import React, { Suspense } from 'react'

export default function page() {
    return (
        <>
            <Suspense fallback={'Cargando...'}>
                <Principal />
            </Suspense>
            <RastrearPaquete />
            <Tiendas />
            <NuestrosServicios />
        </>
    )
}
