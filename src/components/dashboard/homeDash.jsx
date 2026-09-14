import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import GraficLineal from '../dashboard/graficLineal.jsx'
import TableHome from '../dashboard/tableHome.jsx'
import { getDataHomeDashboard } from '../../services/dataHomeDash.js'
import { IoTrendingUpOutline,  IoTrendingDownOutline } from "react-icons/io5";
import { LuWallet } from "react-icons/lu";

  
const COLORS = ["#22c55e", "#3b82f6", "#06b6d4"];

const HomeDash = () => {

  const [dataHome, setDataHome] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDataHomeDashboard();
        setDataHome(result.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  console.log('dataHome:', dataHome);

  //Movimientos con mayor valor en el mes actual
  const topExpenses = dataHome?.topExpenses || [];

  const chartData =
  dataHome?.topExpenses?.map((item) => ({
    name: item.category.name,
    value: item.total,
  })) || [];


  return (
    <div className='text-white'>
      <div className='w-full h-96 rounded '>
          <h2 className="text-white text-2xl font-semibold m-2">Dashboard</h2>
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
                  <h2 className="text-1xl font-bold text-white">
                    ${dataHome ? dataHome.currentBalance.toLocaleString() : "Cargando..."}
                  </h2>

                  <p className="text-gray-400 text-sm">
                    Total Movimientos
                  </p>
                  
                </div>

                <PieChart width={200} height={200}>
                  <Pie
                    data={chartData}
                    innerRadius={65}
                    outerRadius={100}
                    paddingAngle={4}
                    cornerRadius={8}
                    dataKey="value"
                    stroke="transparent"
                  >
                    {chartData.map((entry, index) => (
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
                {/* _________________________________________________________ */}

                {topExpenses.length === 0 ? (
                  <div className="text-gray-400 text-sm flex items-center justify-center h-full min-h-[120px]">
                    Aún no tienes gastos registrados este mes 🎉
                  </div>
                ) : topExpenses.map((expense, index) => (
                  <div key={expense.categoryId}>

                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">
                        {expense.category.name}
                      </span>

                      <span className="text-white text-1xl font-bold">
                        ${expense.total.toLocaleString()}
                      </span>
                    </div>

                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(expense.total / 2000000) * 100}%`,
                          backgroundColor: COLORS[index % COLORS.length],
                        }}
                      />
                    </div>

                  </div>
                ))}
                {/* _________________________________________________________ */}

              </div>
                
            </div>


          <div className='w-1/2 rounded-2xl'>

            <div className="w-full flex justify-between col-span-2 rounded-2xl p-4
              bg-gradient-to-br from-[#c6c8cf]/5 to-[#d2d3d2]/10
              border border-white/10 
              backdrop-blur-xl mb-6
                
              ">
                <div className="flex flex-col ">
                  <h2 className="text-white text-base my-2">SALDO TOTAL</h2>
                  <p className='text-2xl font-bold'>{`$${dataHome?.currentBalance?.toLocaleString()}`}</p>
                </div>
                <div className='flex items-center p-3 m-4 rounded-xl  bg-green-500/10 '>
                  <LuWallet className="flex text-green-500 text-2xl "/>
                </div>
                  
                {/* Contenido gráfico */}

            </div> 

            {/* __________Resumen rápido ______________*/}
            <div className="space-y-4">

              <div className="rounded-xl p-4 
              bg-gradient-to-br from-slate-900/70 to-green-900/30 
              border border-white/10 backdrop-blur">
                <div className="flex justify-between items-center">
                  <div className="block justify-around items-center">
                      <p className="text-gray-400 text-sm">Ingresos</p>
                      <h3 className="text-white text-xl font-bold">{`$${dataHome?.totalIncome?.toLocaleString()}`}</h3>
                  </div>
                    <IoTrendingUpOutline className="text-green-500 text-2xl font-bold"/>
                </div>

                <hr className='my-4 border-gray-700'/>

                <div className="flex justify-between items-center">
                  <div className="block justify-around items-center">
                    <p className="text-gray-400 text-sm">Gastos</p>
                    <h3 className="text-xl font-bold text-red-500">{`$${dataHome?.totalExpenses?.toLocaleString()}`}</h3>
                  </div>
                  <IoTrendingDownOutline className="text-red-500 text-2xl font-bold" />
                </div>

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
