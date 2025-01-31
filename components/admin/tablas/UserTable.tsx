"use client"

import { getPaquetes } from "@/actions/get-paquetes-action";
import { useEffect } from "react";
import { useFormState } from "react-dom";

interface Product {
  name: string;
  color: string;
  category: string;
  price: string;
  tarifa: string,

}

const products: Product[] = [
  {
    name: "Apple MacBook Pro 17\"",
    color: "Silver",
    category: "Laptop",
    price: "$2999",
    tarifa: '3.60',

  },
  {
    name: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: "$1999",
    tarifa: '3.60',

  },
  {
    name: "Magic Mouse 2",
    color: "Black",
    category: "Accessories",
    price: "$99",
    tarifa: '3.60',

  },
];

export default function UserTable() {
 
  return (
    <>


      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            <div className="flex gap-5 items-center ">
              <button className="text-sm border p-2 rounded-lg ">Crear Usuario</button>
              <input type="text" className="h-8 rounded-lg text-white text-sm bg-gray-500" placeholder="   Filtra un usuario" />

            </div>

          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Usuario
              </th>
              <th scope="col" className="px-6 py-3">
                Contraseña
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Plan
              </th>
              <th scope="col" className="px-6 py-3">
                Teléfono
              </th>

            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {product.name}
                </th>
                <td className="px-6 py-4">{product.color}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{product.tarifa}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  )
}
