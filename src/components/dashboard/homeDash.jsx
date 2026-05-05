import React from 'react'
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import GraficLineal from '../dashboard/graficLineal.jsx'
import TableHome from '../dashboard/tableHome.jsx'



const data = [
  { name: "Gastos Fijos", value: 200 },
  { name: "Otros", value: 500 },
  { name: "Supermercado", value: 300 },
];

const COLORS = ["#22c55e", "#3b82f6", "#06b6d4"];

const HomeDash = () => {

  return (
    <div className='text-white'>
      <div className='w-full h-96 rounded '>
          <h2 className="text-white text-lg mb-4">DASHBOARD</h2>
        <div className='flex gap-6 mb-6 '>

            <div className="
            w-full
            relative
            grid grid-cols-2
            items-center
            gap-6
            bg-gradient-to-br from-slate-900/80 to-slate-800/40
            border border-white/10
            backdrop-blur-xl
            rounded-3xl
            p-8
            overflow-hidden
            shadow-[0_0_40px_rgba(34,197,94,0.08)]
            ">

              {/* Glow */}
              <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-green-500/10 blur-3xl rounded-full"></div>

              {/* LEFT SIDE - DONUT */}
              <div className="relative flex items-center justify-center">

                {/* Centro */}
                <div className="absolute z-10 flex flex-col items-center">
                  <h2 className="text-2xl font-bold text-white">
                    $60.500
                  </h2>

                  <p className="text-gray-400 text-sm">
                    Total
                  </p>
                </div>

                <PieChart width={300} height={300}>
                  <Pie
                    data={data}
                    innerRadius={85}
                    outerRadius={130}
                    paddingAngle={4}
                    cornerRadius={8}
                    dataKey="value"
                    stroke="transparent"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </div>

              {/* RIGHT SIDE - STATS */}
              <div className="space-y-8 ">

                {/* ITEM */}
                <div>

                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">
                      Gastos Fijos
                    </span>

                    <span className="text-white text-2xl font-bold">
                      $3.200
                    </span>
                  </div>

                  {/* Barra */}
                  <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[75%] h-full bg-green-400 rounded-full"></div>
                  </div>

                </div>

                {/* ITEM */}
                <div>

                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">
                      Transporte
                    </span>

                    <span className="text-white text-2xl font-bold">
                      $740
                    </span>
                  </div>

                  <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[40%] h-full bg-cyan-400 rounded-full"></div>
                  </div>

                </div>

                {/* ITEM */}
                <div>

                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">
                      Supermercado
                    </span>

                    <span className="text-white text-2xl font-bold">
                      $1.200
                    </span>
                  </div>

                  <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[55%] h-full bg-emerald-400 rounded-full"></div>
                  </div>

                </div>

              </div>
            </div>


          <div className='w-1/2 rounded-2xl'>

            <div className="w-full flex justify-between col-span-2 rounded-2xl p-6
              bg-gradient-to-br from-[#c6c8cf]/5 to-[#d2d3d2]/10
              border border-white/10 
              backdrop-blur-xl mb-2
              ">
                <h2 className="text-white text-lg mb-4">SALDO TOTAL</h2>
                <p className='text-2xl font-bold'>$ 12.599</p>
                {/* Contenido gráfico */}
            </div> 

            {/* __________Resumen rápido ______________*/}
            <div className="space-y-4">

              <div className="rounded-xl p-4 
              bg-gradient-to-br from-slate-900/70 to-green-900/30 
              border border-white/10 backdrop-blur">

                <p className="text-gray-400 text-sm">Ingresos</p>
                <h3 className="text-white text-xl font-bold">$3.200</h3>

              </div>

              <div className="rounded-xl p-4 
              bg-gradient-to-br from-slate-900/70 to-blue-900/30 
              border border-white/10 backdrop-blur">

                <p className="text-gray-400 text-sm">Gastos</p>
                <h3 className="text-white text-xl font-bold">$750</h3>

              </div>

              <div className="rounded-xl p-4 
              bg-gradient-to-br from-slate-900/70 to-blue-900/30 
              border border-white/10 backdrop-blur">

                <p className="text-gray-400 text-sm">Otros Ingresos</p>
                <h3 className="text-white text-xl font-bold">$250</h3>

              </div>

            </div>
          </div>

        </div>
        <div className=" flex gap-6 pb-8  ">
          {/* Aquí puedes agregar otro gráfico o información adicional */}
          <div className=' 
            w-full
            relative
            items-center
            gap-6
            bg-gradient-to-br from-slate-900/80 to-slate-800/40
            border border-white/10
            backdrop-blur-xl
            rounded-3xl
            overflow-hidden
            shadow-[0_0_40px_rgba(34,197,94,0.08)]'
          >
            <TableHome/>
          </div>
          <div className=' w-[49%] rounded-xl border border-white/10 backdrop-blur'>
            <GraficLineal/>
          </div>
        </div>
          
      </div>  
    </div>
  )
}

export default HomeDash
