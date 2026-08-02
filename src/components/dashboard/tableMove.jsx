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
    descripcion: "Moto a la Universidad",
    categoria: "Transporte",
    fecha: "26 Abr 2026",
    tipo: "Gasto",
    monto: -35,
  },
  {
    id: 5,
    descripcion: "Gasolina",
    categoria: "Transporte",
    fecha: "26 Abr 2026",
    tipo: "Gasto",
    monto: -2000,
  },
  {
    id: 6,
    descripcion: "Venta de bicicleta",
    categoria: "Ahorros",
    fecha: "26 Abr 2026",
    tipo: "Ingreso",
    monto: 12000,
  },
  {
    id: 7,
    descripcion: "Venta de auto",
    categoria: "Ahorros",
    fecha: "26 Abr 2026",
    tipo: "Ingreso",
    monto: 20000,
  },
  {
    id: 8,
    descripcion: "Transporte",
    categoria: "Movilidad",
    fecha: "26 Abr 2026",
    tipo: "Ingreso",
    monto: 12000,
  },
  {
    id: 9,
    descripcion: "Transporte",
    categoria: "Movilidad",
    fecha: "26 Abr 2026",
    tipo: "Gasto",
    monto: -12000,
  },
  {
    id: 10,
    descripcion: "Atros movimientos",
    categoria: "Otros",
    fecha: "26 Abr 2026",
    tipo: "Ingreso",
    monto: 12000,
  },
];


const TableMove = () => {
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
          Ver todos
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
            {movimientos.map((mov) => (
              <tr
                key={mov.id}
                className="border-b border-slate-900 hover:bg-slate-800/40 transition"
              >
                <td className="py-4 text-white font-medium">
                  {mov.descripcion}
                </td>

                <td className="py-4 text-slate-300">
                  {mov.categoria}
                </td>

                <td className="py-4 text-slate-400">
                  {mov.fecha}
                </td>

                <td className="py-4">
                  <span
                    className={`
                      px-3 py-1 rounded-full text-xs font-medium
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
                    py-4 text-right font-semibold
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
    </div>
  );
};


export default TableMove
