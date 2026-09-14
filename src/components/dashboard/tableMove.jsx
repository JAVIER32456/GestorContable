import React, { useState, useEffect } from 'react'
import { getMovements } from '../../services/movement';
import { FiChevronRight } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";


const TableMove = () => {

  const [movimientos, setMovimientos] = useState([]);
  const [ meta, setMeta ] = useState(null);
  const [page, setPage] = useState(1);
  const [busqueda, setBusqueda] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("Todos");

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

  const movimientosFiltrados = (movimientos.data ?? []).filter((mov) => {
    const q = busqueda.toLowerCase().trim();

    // Busca en descripción, categoría y fecha
    const coincideBusqueda =
      q === "" ||
      mov.description?.toLowerCase().includes(q) ||
      mov.category?.name?.toLowerCase().includes(q) ||
      new Date(mov.movementDate)
        .toLocaleDateString("es-CO")
        .includes(q);

    // "Todos" no filtra por tipo, solo Ingreso/Gasto lo hacen
    const coincideTipo =
      filtroTipo === "Todos" || mov.movementType?.name === filtroTipo;

    return coincideBusqueda && coincideTipo;
  });

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

        
      </div>

      {/* Barra de búsqueda y filtros */}
      {/* Buscador + Filtros */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="flex-1 flex items-center gap-2 bg-[#0b1220] border border-slate-800 rounded-lg px-4 py-2">
          <FiSearch className="text-slate-400" />
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar..."
            className="w-full bg-transparent outline-none text-slate-200 placeholder:text-slate-500 text-sm"
          />
        </div>

        <div className="flex gap-2">
          {["Todos", "Ingreso", "Gasto"].map((tipo) => (
            <button
              key={tipo}
              onClick={() => setFiltroTipo(tipo)}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                filtroTipo === tipo
                  ? "bg-slate-700 text-white"
                  : "bg-[#0b1220] text-slate-400 border border-slate-800 hover:bg-slate-800"
              }`}
            >
              {tipo}
            </button>
          ))}
        </div>
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
            {movimientosFiltrados.map((mov) => (
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

            {movimientosFiltrados.length === 0 && (
              <tr>
                <td colSpan="5" className="py-8 text-center text-slate-400 text-sm">
                  No se encontraron movimientos
                </td>
              </tr>
            )}
            
          </tbody>
        </table>

        <div className="flex items-center justify-end gap-2 mt-4">

          <button
              onClick={() => setPage(1)}
              disabled={page === 1}
          >
              <FiChevronsRight style={{ transform: "rotate(180deg)", color: "gray" }} />
          </button>

          <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
          >
              <FiChevronRight style={{ transform: "rotate(180deg)", color: "gray" }} />
          </button>

          <span>
              {start}-{end} de {meta?.total ?? 0}
          </span>

          <button
              onClick={() => setPage(page + 1)}
              disabled={!meta?.hasMore}
          >
              <FiChevronRight style={{ color: "gray" }  }/>
          </button>

          <button
              onClick={() => setPage(meta?.totalPages)}
              disabled={page === meta?.totalPages}
          >
              <FiChevronsRight style={{ color: "gray" }}/>
          </button>

        </div>
      </div>
    </div>
  );
};


export default TableMove
