"use client"
import { getPaquetes } from "@/actions/get-paquetes-action";
import { verifySession } from "@/src/auth/dal";
import { useEffect } from "react";
import { useFormState } from "react-dom";
type User = {
  id: number;
  nombre: string;
  correo?: string | null;
};


export default function Tabla({ user }: { user: User }) {

  const [state, dispatch] = useFormState(getPaquetes, {
    errors: [],
    success: []
  })


  useEffect(() => {
    dispatch()
  }, [])

  useEffect(() => {
    console.log(state.success)
  }, [state])



  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">

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
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Entregar</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {state.success.length < 1 ? (
              <tr>
                <td className="px-6 py-4 text-center">No hay paquetes Registrados</td>
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
                    {user.id === 1 ? (
                      <>
                        <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            Edit
                          </a>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            Entregar
                          </a>
                        </td>
                      </>
                    ) : ('')}
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