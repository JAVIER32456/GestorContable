import React from 'react'

const movimientos = [
  {
    id: 1,
    descripcion: "Pago Netflix",
    categoria: "Entretenimiento",
    fecha: "29 Abr 2026",
    tipo: "Gasto",
    monto: -4500,
  },
  {
    id: 2,
    descripcion: "Salario",
    categoria: "Nomina",
    fecha: "28 Abr 2026",
    tipo: "Ingreso",
    monto: 3200,
  },
  {
    id: 3,
    descripcion: "Comida",
    categoria: "Supermercado",
    fecha: "27 Abr 2026",
    tipo: "Gasto",
    monto: -120,
  },
  {
    id: 4,
    descripcion: "moto a la Universidad",
    categoria: "Transporte",
    fecha: "26 Abr 2026",
    tipo: "Gasto",
    monto: -35,
  },
];


const TableHome = () => {
  return (

    <div className="bg-[#111827] rounded-2xl p-6 sm:p-6 border border-slate-800 shadow-lg max-w-full">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
        <div>
          <h2 className="text-white text-xl sm:text-2xl font-semibold">
            Últimos Movimientos
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Tus transacciones mas recientes
          </p>
        </div>

        <button className="bg-emerald-500/20 hover:bg-emerald-600 transition px-3 sm:px-4 py-2 rounded-lg text-white text-xs sm:text-sm whitespace-nowrap">
          Ver todos
        </button>
      </div>

      {/* Desktop - Tabla */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left text-sm">
          
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 text-xs">
              <th className="pb-2 px-1">Descripción</th>
              <th className="pb-2 px-1">Categoría</th>
              <th className="pb-2 px-1">Fecha</th>
              <th className="pb-2 px-1">Tipo</th>
              <th className="pb-2 px-1 text-right">Monto</th>
            </tr>
          </thead>

          <tbody>
            {movimientos.map((mov) => (
              <tr
                key={mov.id}
                className="border-b border-slate-900 hover:bg-slate-800/40 transition"
              >
                <td className="py-2 px-1 text-white font-medium truncate max-w-xs">
                  {mov.descripcion}
                </td>

                <td className="py-2 px-1 text-slate-300 truncate">
                  {mov.categoria}
                </td>

                <td className="py-2 px-1 text-slate-400 text-xs whitespace-nowrap">
                  {mov.fecha}
                </td>

                <td className="py-2 px-1">
                  <span
                    className={`
                      px-2 py-0.5 rounded-full text-xs font-medium inline-block
                      ${
                        mov.tipo === "Ingreso"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-red-500/20 text-red-400"
                      }
                    `}
                  >
                    {mov.tipo}
                  </span>
                </td>

                <td
                  className={`
                    py-2 px-1 text-right font-semibold text-sm
                    ${
                      mov.monto > 0
                        ? "text-emerald-400"
                        : "text-red-400"
                    }
                  `}
                >
                  ${Math.abs(mov.monto)}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* Mobile - Tarjetas */}
      <div className="md:hidden space-y-3">
        {movimientos.map((mov) => (
          <div
            key={mov.id}
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-3"
          >
            <div className="mb-2">
              <h3 className="text-white font-semibold text-sm truncate">
                {mov.descripcion}
              </h3>
              <p className="text-slate-400 text-xs truncate">
                {mov.categoria} • {mov.fecha}
              </p>
            </div>

            <div className="flex items-center justify-between gap-2">
              <span
                className={`text-base font-bold ${
                  mov.monto > 0
                    ? "text-emerald-400"
                    : "text-red-400"
                }`}
              >
                ${Math.abs(mov.monto)}
              </span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  mov.tipo === "Ingreso"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {mov.tipo}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableHome
