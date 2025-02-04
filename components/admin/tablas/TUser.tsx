"use client"
import { DeletePaquete } from "@/actions/delete-paquetes-action";
import { EntregarPaquete } from "@/actions/Entregar-paquetes-action";
import { getPaquetesAdmin } from "@/actions/get-admin-paquetes-action";
import { Button } from "@headlessui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";



export default function TUser() {
  const [state, dispatch] = useFormState(getPaquetesAdmin, {
    errors: [],
    success: [],
  });


  const [ingreso, setIngreso] = useState(0)
  const [currentPage, setCurrentPage] = useState(0);  // Usamos el índice de la página (0 es la primera)
  const itemsPerPage = 8;

  useEffect(() => {
    dispatch();
  }, []);

  useEffect(() => {
    let total = 0
    state.success.map(n => {
      total = total + n.precio
    })
    setIngreso(total)

  }, [state]);

  // Calcular los elementos a mostrar en la página actual
  const offset = currentPage * itemsPerPage;
  const currentItems = state.success.slice(offset, offset + itemsPerPage);

  // Manejar el cambio de página
  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };
  const OnClicke = async (id: number) => {
    const estado = await EntregarPaquete({ success: '', errors: [] }, id)
    if (estado.success) {
      toast.success(estado.success)
      dispatch()
    }
    if (estado.errors) {
      toast.success(estado.errors)
    }
  }

  const OnDelete = async (id: number) => {
    const estado = await DeletePaquete({ success: '', errors: [] }, id)
    if (estado.success) {
      toast.success(estado.success)
      dispatch()
    }
    if (estado.errors) {
      toast.info(estado.errors)
    }
  }
  return (
    <>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            <h3 className="text-lg font-black text-black uppercase">Ha registrado  <span className="text-red-500">{state.success.length}</span> Paquetes  | <span className="font-black pl-5">Ingreso Generado <span className="text-red-500">${ingreso}</span></span> </h3>
          </caption>
          <thead className="text-sm font-black text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">id</th>
              <th scope="col" className="px-6 py-3">Usuario</th>
              <th scope="col" className="px-6 py-3">Tracking</th>
              <th scope="col" className="px-6 py-3">Peso</th>
              <th scope="col" className="px-6 py-3">Precio</th>
              <th scope="col" className="px-6 py-3">Tarifa</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Acciones</th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {state.success.length < 1 ? (
              <tr>
                <td colSpan={8} className="px-6 py-4 text-center">
                  No hay paquetes Registrados
                </td>
              </tr>
            ) : (
              currentItems.map((product) => {
                return (
                  <>
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
                      <td className="px-6 py-4 text-right">
                        {product.status !== 'Entregado ✅' ? (
                          <Button
                            onClick={() => OnDelete(product.id)}
                            className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                          >
                            X
                          </Button>
                        ) : ('✅')}
                      </td>

                      <td className="px-6 py-4 text-right">
                        {product.status !== 'Entregado ✅' ? (


                          <Button
                            onClick={() => OnClicke(product.id)}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Entregar
                          </Button>
                        ) :

                          'Entregado'
                        }
                      </td>
                    </tr>
                  </>
                );
              })
            )}
          </tbody>
        </table>

        {/* Paginación con react-paginate */}
        <div className=" w-full">
          <ReactPaginate className="font-bold text-lg flex p-5 justify-center bg-amber-400"
            pageCount={Math.ceil(state.success.length / itemsPerPage)}  // Número total de páginas
            pageRangeDisplayed={3}  // Cuántas páginas mostrar en los controles
            marginPagesDisplayed={1}  // Cuántas páginas mostrar en los extremos
            onPageChange={handlePageChange}  // Cambiar la página
            containerClassName="flex justify-center mt-4 "
            pageClassName="mx-2 "
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
