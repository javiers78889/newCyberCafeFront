"use client"

import { getUsers } from "@/actions/get-users-action";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import ReactPaginate from "react-paginate";




export default function UserTable() {
  const [state, dispatch] = useFormState(getUsers, {
    errors: [],
    success: [],
  });
  const [currentPage, setCurrentPage] = useState(0);  // Usamos el índice de la página (0 es la primera)
  const itemsPerPage = 8;

  useEffect(() => {
    dispatch();
  }, []);

  useEffect(() => {
    console.log(state.success);
  }, [state]);

  // Calcular los elementos a mostrar en la página actual
  const offset = currentPage * itemsPerPage;
  const currentItems = state.success.slice(offset, offset + itemsPerPage);

  // Manejar el cambio de página
  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <div className="p-5  bg-gray-50 dark:bg-gray-700 flex gap-5 items-center">
          <input type="text" className="border rounded-lg p-2" placeholder="Filtre por nombre" />
          <h3 className="font-bold text-lg uppercase">Tienes <span className="text-red-500">{state.success.length}</span> Usuarios</h3>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm font-black text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">id</th>
              <th scope="col" className="px-6 py-3">Usuario</th>
              <th scope="col" className="px-6 py-3">contrasena</th>
              <th scope="col" className="px-6 py-3">nombre</th>
              <th scope="col" className="px-6 py-3">Telefono</th>
              <th scope="col" className="px-6 py-3">Correo</th>
            </tr>
          </thead>
          <tbody>
            {state.success.length < 1 ? (
              <tr>
                <td colSpan={8} className="px-6 py-4 text-center">
                  No hay Usuarios Registrados
                </td>
              </tr>
            ) : (
              currentItems.map((product) => {
                return (
                  <tr
                    key={product.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                  >
                    <td className="px-6 py-4">{product.id}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {product.usuario}
                    </th>
                    <td className="px-6 py-4">{product.contraseña}</td>
                    <td className="px-6 py-4">{product.nombre}</td>
                    <td className="px-6 py-4">{product.telefono}</td>
                    <td className="px-6 py-4">{product.correo}</td>
                

                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        {/* Paginación con react-paginate */}
        <div className=" bg-amber-400 w-full">
          <ReactPaginate className="font-bold text-lg flex p-5 justify-center "
            pageCount={Math.ceil(state.success.length / itemsPerPage)}  // Número total de páginas
            pageRangeDisplayed={3}  // Cuántas páginas mostrar en los controles
            marginPagesDisplayed={1}  // Cuántas páginas mostrar en los extremos
            onPageChange={handlePageChange}  // Cambiar la página
            containerClassName="flex justify-center mt-4"
            pageClassName="mx-2"
            previousClassName="mx-2 text-white"
            nextClassName="mx-2 text-red-500"
            activeClassName="text-blue-600"
            disabledClassName="text-gray-400"
          />
        </div>
      </div>
    </>
  );
}
