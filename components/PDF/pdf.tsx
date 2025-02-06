"use client";

import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { getUsers } from "@/src/schemas";

export default function Factura({factura}:{factura:getUsers}) {
    const pdfRef = useRef<HTMLDivElement>(null);

    const generatePDF = async () => {
        if (!pdfRef.current) return;

        const canvas = await html2canvas(pdfRef.current, { scale: 2 });
        const imgData = canvas.toDataURL("/fete.jpeg");

        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("factura.pdf");
    };

    return (
        <div className="flex flex-col items-center">


            {/* Contenido que se convertirá en PDF */}
            <button className="bg-red-500 p-3 rounded-lg text-white" onClick={generatePDF}>Descargar PDF</button>
            <div ref={pdfRef} className="pdf-container w-auto">
                <div className="factura  bg-no-repeat">
                    <div className="flex items-start flex-col gap-5  font-bold">
                        <h2>N° DE FACTURA: FS-{factura[0].id}</h2>
                        <p>Fecha: {new Date().toISOString().split("T")[0]}</p>
                    </div>
                    <div className="flex justify-end">
                        <img src="/fete.png" alt="Logo" className="logo " />
                    </div>
                    <div className="flex flex-col items-end justify-items-end">

                        <p className="text-2xl"><strong>Facturar a:</strong> {factura[0].usuario}</p>
                        <p><strong>Dirección:</strong> Panamá Oeste,</p> <p>Chame, Vía Interamericana</p>
                        <p>TEL: 65474870</p>
                        <p> Correo:</p>
                        <p>cybercafechame@gmail.com</p>
                    </div>
                    <table className="bg-white">
                        <thead className="bg-red-600 text-white">
                            <tr>
                                <th>LIBRAS</th>
                                <th>DESCRIPCIÓN</th>
                                <th>IMPORTE</th>
                                <th>TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{factura[0].peso}</td>
                                <td>{factura[0].tracking}</td>
                                <td>${factura[0].tarifas}</td>
                                <td>${factura[0].precio}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="py-5">
                        <h3 className="text-start py-5 text-3xl font-bold">Total Factura: ${factura[0].precio} USD</h3>
                        <p className="font-bold text-sm my-5">CONDICIONES Y FORMA DE PAGO</p>
                        <p className="footer font-bold">MÁXIMO 7 DIAS CALENDARIO LIBRE DE ALMACENAJE DESPUES DE LA FECHA DE FACTURA.</p>
                    </div>
                    <div className="flex flex-col justify-start py-10 border rounded-lg shadow-lg">

                        <h2 className="text-xl font-bold">Metodos de pago</h2>
                        <p>ASHLEY MOSQUERA</p>
                        <p>04-33-98-768227-8</p>
                        <p>CTA AHORRO</p>
                        <p>BANCO GENERAL.</p>
                        <p>YAPPY:</p>
                        <p>6547-4870</p>

                    </div>
                </div>
            </div>


            {/* Estilos para la factura */}
            <style jsx>{`
        .pdf-container {
          background: white;
          padding: 20px;
          width: 210mm; /* Tamaño A4 */
          min-height: 297mm;
        }
        .factura {
          text-align: center;
          border: 1px solid #ddd;
          padding: 20px;
          
        }
        .logo {
          width: 100px;
          margin-bottom: 20px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        table, th, td {
          border: 1px solid black;
          padding: 10px;
          text-align: center;
        }
        .footer {
          margin-top: 20px;
          font-size: 12px;
        }
      `}</style>
        </div>
    );
}
