"use client"
import { getPaquetes } from "@/actions/get-paquetes-action";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState } from "react-dom";


export default function Tabla() {

  const [state, dispatch] = useFormState(getPaquetes, {
    errors: [],
    success: []
  })

  useEffect(() => {
    dispatch()
  }, [])

  useEffect(() => {
   
  }, [state])



  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            <h3 className="text-lg font-black text-black uppercase">Usted Cuenta con <span className="text-red-500">{state.success.length}</span> Paquetes </h3>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">id</th>
              <th scope="col" className="px-6 py-3">Usuario</th>
              <th scope="col" className="px-6 py-3">Tracking</th>
              <th scope="col" className="px-6 py-3">Peso</th>
              <th scope="col" className="px-6 py-3">Precio</th>
              <th scope="col" className="px-6 py-3">Tarifa</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3"></th>
              
             
            </tr>
          </thead>
          <tbody>
            {state.success.length < 1 ? (
              <tr>
                <td className="px-6 py-4 text-center bg-white ">No hay paquetes Registrados</td>
              </tr>
            ) : (
              state.success.map(product => {
                return (
                  <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td className="px-6 py-4">{product.id}</td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {product.usuario}
                    </th>
                    <td className="px-6 py-4">{product.tracking}</td>
                    <td className="px-6 py-4">{product.peso}</td>
                    <td className="px-6 py-4">{product.precio}</td>
                    <td className="px-6 py-4">{product.tarifas}</td>
                    <td className="px-6 py-4">{product.status}</td>
                    <td className="px-6 py-4 text-right">
                        <Link
                          href={`/admin/factura/${product.id}`}
                          className="font-medium text-yellow-600 dark:text-blue-500 hover:underline"
                        >
                          Factura
                        </Link>
                      </td>
                   
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}