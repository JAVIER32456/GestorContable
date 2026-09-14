import React, { useState } from 'react';
import { IoTrendingUpOutline, IoTrendingDownOutline, IoCashOutline  } from "react-icons/io5";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TbTrendingUp } from "react-icons/tb";
import { TfiStatsUp } from "react-icons/tfi";
import { MdOutlineFileDownload } from "react-icons/md";

const Statistics = () => {
  const [filter, setFilter] = useState('all'); // 'all' o 'month'

    // Datos del gráfico de barras
  const barChartData = [
    { month: 'Abr', ingresos: 3800000, gastos: 900000 },
    { month: 'May', ingresos: 4000000, gastos: 1600000 },
    { month: 'Jun', ingresos: 4500000, gastos: 1900000 },
    { month: 'Jul', ingresos: 4200000, gastos: 1700000 },
    { month: 'Ago', ingresos: 6100000, gastos: 2000000 },
    { month: 'Sep', ingresos: 6400000, gastos: 1500000 },
  ];

  // Datos distribución de gastos
  const expensesData = [
    { name: 'Servicios Públicos', value: 1000000 },
    { name: 'Vivienda', value: 950000 },
    { name: 'Alimentación', value: 250000 },
    { name: 'Combustible', value: 228000 },
    { name: 'Entretenimiento', value: 4500 },
  ];

  // Datos distribución de ingresos
  const incomeData = [
    { name: 'Nómina', value: 5250000 },
    { name: 'Ingresos Adicionales', value: 978500 },
    { name: 'Inversiones', value: 200000 },
    { name: 'Gastos Ocasionales', value: 145 },
  ];

  const COLORS_PIE = ['#3b82f6', '#06b6d4', '#f59e0b', '#ec4899', '#8b5cf6'];

  const handleExport = (type) => {
    console.log(`Exportar ${type}`);
    // Aquí iría la lógica de exportación
  };

  const handleDownloadReport = () => {
    console.log('Descargar reporte');
    // Aquí iría la lógica de descarga
  };

  return (
    <div className="text-white ">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Estadísticas</h2>
          <p className="text-gray-400 text-sm">Análisis de tus finanzas</p>
        </div>

        {/* Filtros */}
        <div className="flex w-44 md:w-auto lg:w-auto gap-2 mt-4 p-1 md:mt-0 bg-slate-600/20 border border-white/10  rounded-lg ">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-1 rounded-lg transition-colors ${
              filter === 'all'
                ? 'bg-green-500 text-slate-900 font-semibold'
                : ' text-gray-300 '
            }`}
          >
            Todo
          </button>
          <button
            onClick={() => setFilter('month')}
            className={`px-4 py-1 rounded-lg transition-colors ${
              filter === 'month'
                ? 'bg-green-500 text-slate-900 font-semibold'
                : 'text-gray-300 '
            }`}
          >
            Este mes
          </button>
        </div>
      </div>

      {/* Grid de tarjetas - responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Tarjeta Ingresos */}
        <div className="bg-gradient-to-br from-slate-900/70 to-green-900/30 border border-white/10 backdrop-blur rounded-xl p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Ingresos totales</p>
              <h3 className="text-xl md:text-2xl font-bold text-green-400 mt-2">$6.428.645</h3>
            </div>
            <IoTrendingUpOutline className="text-green-500 text-2xl flex-shrink-0" />
          </div>
        </div>

        {/* Tarjeta Gastos */}
        <div className="bg-gradient-to-br from-slate-900/70 to-red-900/30 border border-white/10 backdrop-blur rounded-xl p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Gastos totales</p>
              <h3 className="text-xl md:text-2xl font-bold text-red-400 mt-2">$2.424.500</h3>
            </div>
            <IoTrendingDownOutline className="text-red-500 text-2xl flex-shrink-0" />
          </div>
        </div>

        {/* Tarjeta Saldo Neto */}
        <div className="bg-gradient-to-br from-slate-900/70 to-cyan-900/30 border border-white/10 backdrop-blur rounded-xl p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Saldo neto</p>
              <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mt-2">$4.004.145</h3>
            </div>
            <IoCashOutline className="text-cyan-500 text-2xl flex-shrink-0" />
          </div>
        </div>

        {/* Tarjeta Tasa de Ahorro */}
        <div className="bg-gradient-to-br from-slate-900/70 to-blue-900/30 border border-white/10 backdrop-blur rounded-xl p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Tasa de ahorro</p>
              <h3 className="text-xl md:text-2xl font-bold text-blue-400 mt-2">62.3%</h3>
            </div>
            <TfiStatsUp className="text-blue-500 text-2xl flex-shrink-0" />
          </div>
        </div>
      </div>

      {/* Gráfico de Barras */}
      <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/40 border border-white/10 backdrop-blur-xl rounded-xl p-4 md:p-6 mb-8">
        <h3 className="text-lg md:text-xl font-semibold mb-6">Contabilidad <span className="text-gray-500 text-sm">últimos 6 meses</span></h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #4b5563' }}
              formatter={(value) => `$${value.toLocaleString()}`}
            />
            <Legend />
            <Bar dataKey="ingresos" fill="#22c55e" name="Ingresos" />
            <Bar dataKey="gastos" fill="#ef4444" name="Gastos" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Distribución de Gastos */}
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/40 border border-white/10 backdrop-blur-xl rounded-xl p-4 md:p-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 ">
            <h3 className="text-lg md:text-xl font-semibold">Distribución de gastos</h3>
            <button 
              onClick={() => handleExport('gastos')}
              className="text-green-500 hover:text-green-400 text-sm flex items-center gap-1"
            >
              <MdOutlineFileDownload className="text-lg" /> Exportar
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <ResponsiveContainer width={180} height={180}>
              <PieChart>
                <Pie
                  data={expensesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {expensesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS_PIE[index % COLORS_PIE.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2  flex-1 flex-col">
              {expensesData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS_PIE[index % COLORS_PIE.length] }}></div>
                  <span className="text-gray-300">{item.name}</span>
                  <span className="text-white font-semibold ml-auto">${item.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Distribución de Ingresos */}
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/40 border border-white/10 backdrop-blur-xl rounded-xl p-4 md:p-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h3 className="text-lg md:text-xl font-semibold">Distribución de ingresos</h3>
            <button 
              onClick={() => handleExport('ingresos')}
              className="text-green-500 hover:text-green-400 text-sm flex items-center gap-1"
            >
              <MdOutlineFileDownload className="text-lg" /> Exportar
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <ResponsiveContainer width={180} height={180}>
              <PieChart>
                <Pie
                  data={incomeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {incomeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS_PIE[index % COLORS_PIE.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 flex-1 flex-col">
              {incomeData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS_PIE[index % COLORS_PIE.length] }}></div>
                  <span className="text-gray-300">{item.name}</span>
                  <span className="text-white font-semibold ml-auto">${item.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reporte Completo */}
      <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/40 border border-white/10 backdrop-blur-xl rounded-xl p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <h3 className="text-lg md:text-xl font-semibold">Reporte completo</h3>
            <p className="text-gray-400 text-sm">Exporta todos tus movimientos filtrados en CSV</p>
          </div>
          <button 
            onClick={handleDownloadReport}
            className="mt-4 md:mt-0 bg-green-500 hover:bg-green-600 text-slate-900 font-semibold px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <MdOutlineFileDownload className="text-lg" /> Descargar reporte
          </button>
        </div>
      </div>
    </div>

  );
};

export default Statistics;