import React from 'react'
import { IoClose } from 'react-icons/io5';


const ModalNewMove = ({isOpen, onClose}) => {
    if (!isOpen) return null;
  return (
    <div className='fixed inset-0 z-[1000] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center'>
        <div 
            className="relative w-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl border border-slate-700 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
        >
            {/* Header */}
            <div className='bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex justify-between items-center'>
                <h2 className='text-xl font-bold text-white'>Nuevo Movimiento</h2>
                <IoClose 
                    size={24} 
                    className='text-white hover:text-blue-200 cursor-pointer transition-colors' 
                    onClick={onClose} 
                />
            </div>

            {/* Contenido */}
            <form className='p-6 space-y-5'>
                {/* Tipo */}
                <div className='space-y-2'>
                    <label htmlFor="category" className='block text-sm font-semibold text-gray-300'>
                        Tipo de Movimiento
                    </label>
                    <select 
                        id="category"
                        className='w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all'
                    >
                        <option value="">Selecciona un tipo</option>
                        <option value="ingreso">Ingreso</option>
                        <option value="egreso">Egreso</option>
                    </select>
                </div>

                {/* Monto */}
                <div className='space-y-2'>
                    <label htmlFor="amount" className='block text-sm font-semibold text-gray-300'>
                        Monto
                    </label>
                    <input 
                        type="number" 
                        id="amount"
                        placeholder='0.00' 
                        min={0}
                        step={0.01}
                        className='w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all'
                    />
                </div>

                {/* Descripción */}
                <div className='space-y-2'>
                    <label htmlFor="description" className='block text-sm font-semibold text-gray-300'>
                        Descripción
                    </label>
                    <input 
                        type="text" 
                        id="description"
                        placeholder='Ej: Venta de producto' 
                        className='w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all'
                    />
                </div>

                {/* Botones */}
                <div className='flex gap-3 pt-4'>
                    <button 
                        type='button' 
                        onClick={onClose}
                        className='flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors'
                    >
                        Cancelar
                    </button>
                    <button 
                        type='submit' 
                        className='flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-green-500/50'
                    >
                        Agregar
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ModalNewMove
