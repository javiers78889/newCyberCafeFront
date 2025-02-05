"use client";

import { getUsers } from "@/actions/get-users-action";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import ReactPaginate from "react-paginate";

export default function UserTable() {
  const [state, dispatch] = useFormState(getUsers, {
    errors: [],
    success: [],
  });

  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState(""); // Estado para el filtro
  const itemsPerPage = 8;

  useEffect(() => {
    dispatch();
  }, []);

  useEffect(() => {
    console.log(state.success);
  }, [state]);

  // Filtrar usuarios según el nombre
  const filteredUsers = state.success.filter(user =>
    user.nombre.toLowerCase().includes(filter.toLowerCase())
  );

  // Calcular los elementos a mostrar en la página actual
  const offset = currentPage * itemsPerPage;
  const currentItems = filteredUsers.slice(offset, offset + itemsPerPage);

  // Manejar el cambio de página
  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <div className="p-5 bg-gray-50 dark:bg-gray-700 flex gap-5 items-center">
          <input
            type="text"
            className="border rounded-lg p-2"
            placeholder="Filtre por nombre"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setCurrentPage(0); // Resetear a la primera página al filtrar
            }}
          />
          <h3 className="font-bold text-lg uppercase">
            Tienes <span className="text-red-500">{filteredUsers.length}</span> Usuarios
          </h3>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm font-black text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">Usuario</th>
              <th scope="col" className="px-6 py-3">Contraseña</th>
              <th scope="col" className="px-6 py-3">Nombre</th>
              <th scope="col" className="px-6 py-3">Teléfono</th>
              <th scope="col" className="px-6 py-3">Correo</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length < 1 ? (
              <tr>
                <td colSpan={8} className="px-6 py-4 text-center">
                  No hay Usuarios Registrados
                </td>
              </tr>
            ) : (
              currentItems.map((user) => (
                <tr
                  key={user.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                  <td className="px-6 py-4">{user.id}</td>
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.usuario}
                  </th>
                  <td className="px-6 py-4">{user.contraseña}</td>
                  <td className="px-6 py-4">{user.nombre}</td>
                  <td className="px-6 py-4">{user.telefono}</td>
                  <td className="px-6 py-4">{user.correo}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Paginación con react-paginate */}
        <div className="bg-amber-400 w-full">
          <ReactPaginate
            className="font-bold text-lg flex p-5 justify-center"
            pageCount={Math.ceil(filteredUsers.length / itemsPerPage)}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={handlePageChange}
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
