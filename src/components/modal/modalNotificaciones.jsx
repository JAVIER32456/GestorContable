import React from 'react'
import { IoClose } from 'react-icons/io5';

const ModalNotificaciones = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
    
  return (
    <>
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose}
      ></div>
      <div className='absolute top-12 right-[-90px] bg-slate-800 rounded-lg shadow-xl z-50 w-80'>
        <div className='p-4 border-b border-slate-700 flex items-center justify-between'>
          <h3 className='text-lg font-bold text-white'>Notificaciones</h3>
          <button onClick={onClose} className='text-gray-400 hover:text-white transition'>
            <IoClose size={20} />
          </button>
        </div>
        <div className='p-4'>
          {/* <p className='text-sm text-gray-300'>No hay notificaciones</p> */}
          <div>
            {/* Aquí puedes mapear tus notificaciones reales */} 
            {/* Ejemplo: */}
            
              <div  className='p-2 border-b border-slate-700 text-gray-300 hover:bg-slate-700 rounded-lg cursor-pointer transition'>
                <div className='flex justify-between items-center pb-2'>
                  <p className='text-sm'>Andres Camilo</p>
                  <p className=' text-gray-400 text-xs'>12-04-2026</p>
                </div>
                <div className=''>
                  <p className='text-xs line-clamp-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, aliquid? hasdd adsasd ashahdi aadiadis</p>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalNotificaciones
