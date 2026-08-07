import React, { useState, useEffect } from 'react'
import { getMovements } from '../../services/movement';


const TableMove = () => {

  const [movimientos, setMovimientos] = useState([]);
  const [ meta, setMeta ] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovements = async () => {
      try {
        const data = await getMovements(page);

        console.log("Página solicitada:", page);
        console.log("Respuesta:", data);
        console.log("Meta:", data.meta);

        setMovimientos(data);
        setMeta(data.meta);

      } catch (error) {
        console.error('Error al obtener los movimientos:', error);
      }
    };

    fetchMovements();
  }, [page]);


  const start =
    meta ? (meta.page - 1) * meta.limit + 1 : 0;

  const end =
    meta ? Math.min(meta.page * meta.limit, meta.total) : 0;



  return (

    <div className="bg-[#111827] rounded-2xl p-6 border border-slate-800 shadow-lg min-w-fit">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-white text-2xl font-semibold">
            Movimientos
          </h2>
          <p className="text-slate-400 text-sm">
            Historial de transacciones
          </p>
        </div>

        <button className="bg-emerald-500 hover:bg-emerald-600 transition px-4 py-2 rounded-xl text-white text-sm">
          Reportes
        </button>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 text-sm">
              <th className="pb-4">Descripción</th>
              <th className="pb-4">Categoría</th>
              <th className="pb-4">Fecha</th>
              <th className="pb-4">Tipo</th>
              <th className="pb-4 text-right">Monto</th>
            </tr>
          </thead>

          <tbody>
            {movimientos.data?.map((mov) => (
              <tr
                key={mov.id}
                className="border-b border-slate-900 hover:bg-slate-800/40 transition"
              >
                <td className="py-4 text-white font-medium w-1/3">
                  {mov.description}
                </td>

                <td className="py-4 text-slate-300">
                  {mov.category.name}
                </td>

                <td className="py-4 text-slate-400">
                  {new Date(mov.movementDate).toLocaleDateString("es-CO")}
                </td>

                <td className="py-4">
                  <span
                    className={`
                      px-3 py-1 rounded-full text-xs font-medium
                      ${
                        mov.movementType.name === "Ingreso"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-red-500/20 text-red-400"
                      }
                    `}
                  >
                    {mov.movementType.name}
                  </span>
                </td>

                <td
                  className={`
                    py-4 text-right font-semibold
                    ${
                      mov.movementType?.name === "Ingreso"
                        ? "text-emerald-400"
                        : "text-red-400"
                    }
                  `}
                >
                  ${Number(mov.amount).toLocaleString("es-CO")}
                </td>
              </tr>
            ))}
           
            
          </tbody>
        </table>

        <div className="flex items-center justify-end gap-2 mt-4">

          <button
              onClick={() => setPage(1)}
              disabled={page === 1}
          >
              {"<<"}
          </button>

          <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
          >
              {"<"}
          </button>

          <span>
              {start}-{end} de {meta?.total ?? 0}
          </span>

          <button
              onClick={() => setPage(page + 1)}
              disabled={!meta?.hasMore}
          >
              {">"}
          </button>

          <button
              onClick={() => setPage(meta?.totalPages)}
              disabled={page === meta?.totalPages}
          >
              {">>"}
          </button>

        </div>
      </div>
    </div>
  );
};


export default TableMove
