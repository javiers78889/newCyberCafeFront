"use client";
import { DeletePaquete } from "@/actions/delete-paquetes-action";
import { EntregarPaquete } from "@/actions/Entregar-paquetes-action";
import { getPaquetesAdmin } from "@/actions/get-admin-paquetes-action";
import { formatCurrency } from "@/src/utils";
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

  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 8;

  useEffect(() => {
    dispatch();
  }, []);



  const filteredItems = state.success.filter((paquete) =>
    paquete.usuario.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredItems.slice(offset, offset + itemsPerPage);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const OnClicke = async (id: number) => {
    const estado = await EntregarPaquete({ success: "", errors: [] }, id);
    if (estado.success) {
      toast.success(estado.success);
      dispatch();
    }
    if (estado.errors) {
      toast.success(estado.errors);
    }
  };

  const OnDelete = async (id: number) => {
    const estado = await DeletePaquete({ success: "", errors: [] }, id);
    if (estado.success) {
      toast.success(estado.success);
      dispatch();
    }
    if (estado.errors) {
      toast.info(estado.errors);
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
      <div className="p-5 bg-gray-50 dark:bg-gray-700 flex gap-5 items-center">
        <input
          type="text"
          className="border rounded-lg p-2"
          placeholder="Filtre por nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
          </tr>
        </thead>
        <tbody>
          {currentItems.length < 1 ? (
            <tr>
              <td colSpan={8} className="px-6 py-4 text-center">
                No hay paquetes registrados
              </td>
            </tr>
          ) : (
            currentItems.map((product) => (
              <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td className="px-6 py-4">{product.id}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {product.usuario}
                </td>
                <td className="px-6 py-4">{product.tracking}</td>
                <td className="px-6 py-4">{product.peso}</td>
                <td className="px-6 py-4">{formatCurrency(product.precio)}</td>
                <td className="px-6 py-4">{formatCurrency(product.tarifas)}</td>
                <td className="px-6 py-4">{product.status}</td>

                {product.status !== "Entregado ✅" ? (
                  <td className="px-6 py-4 text-right">
                    <Button onClick={() => OnClicke(product.id)} className="text-blue-600 hover:underline">
                      Entregar
                    </Button>
                  </td>
                ) : (
                  <td className="px-6 py-4 text-right">
                   <p>Entregado</p>
                  </td>
                )}
                {product.status !== "Entregado ✅" && (
                  <td className="px-6 py-4 text-right">
                    <Button onClick={() => OnDelete(product.id)} className="text-red-600 hover:underline ml-4">
                      X
                    </Button>
                  </td>
                )}
                <td className="px-6 py-4 text-right">
                  <Link
                    href={`/admin/factura/${product.id}`}
                    className="font-medium text-yellow-600 dark:text-blue-500 hover:underline"
                  >
                    Factura
                  </Link>
                </td>

              </tr>
            ))
          )}
        </tbody>
      </table>
      <ReactPaginate
        className="font-bold text-lg flex p-5 justify-center bg-amber-400"
        pageCount={Math.ceil(filteredItems.length / itemsPerPage)}
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
  );
}
