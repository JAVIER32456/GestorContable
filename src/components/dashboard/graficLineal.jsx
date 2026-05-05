import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Ene", gastos: 400 },
  { name: "Feb", gastos: 700 },
  { name: "Mar", gastos: 500 },
  { name: "Abr", gastos: 900 },
  { name: "May", gastos: 600 },
  { name: "Jun", gastos: 1200 },
];


const GraficLineal = () => {
  return (
    <div className="
    relative
    bg-gradient-to-br from-slate-900/90 to-slate-800/40
    border border-white/10
    backdrop-blur-xl
    rounded-xl
    p-6
    overflow-hidden
    shadow-[0_0_35px_rgba(34,197,94,0.08)]
    ">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 blur-3xl rounded-full"></div>

      {/* Header */}
      <div className="relative z-10 mb-6">
        <h2 className="text-white text-xl font-semibold">
          Gastos Mensuales
        </h2>

        <p className="text-gray-400 text-sm">
          Últimos 6 meses
        </p>
      </div>

      {/* Chart */}
      <div className="h-[269px] relative z-10">

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#1e293b"
            />

            <XAxis
              dataKey="name"
              stroke="#94a3b8"
            />

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Line
              type="monotone"
              dataKey="gastos"
              stroke="#22c55e"
              strokeWidth={3}
              dot={{
                r: 5,
                fill: "#22c55e",
              }}
              activeDot={{
                r: 8,
              }}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>
    </div>
  )
}

export default GraficLineal
