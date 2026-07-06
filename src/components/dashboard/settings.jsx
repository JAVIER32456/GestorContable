import React from 'react'
import Hero from '../../assets/hero.png'

const Settings = () => {
  return (
    <div className='text-white'>
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
              <div className='flex justify-center p-5 '>
                  <img src={Hero} alt='Imagen' width={180} className='bg-slate-700 p-4 rounded-full'/>
              </div>
              <div className='flex flex-col'>

                <div className='flex flex-col m-2'>
                  <label htmlFor="">Nombre</label>
                  <input type='text' placeholder='Jhon Doe' className='bg-transparent border-b-2 border-green-900 p-2 outline-none' disabled/>
                </div>
                
                <div className='flex flex-col m-2' >
                  <label htmlFor="">Apellidos</label>
                  <input type="text" placeholder='Apellidos' className='bg-transparent border-b-2 border-green-900 p-2 outline-none' disabled/>
                </div>

                <div className='flex flex-col m-2'>
                  <label htmlFor="">Correo</label>
                  <input type="email" placeholder='jhonDoe@gmail.com ' className='bg-transparent border-b-2 border-green-900 p-2 outline-none' disabled/>
                </div>

                <div className='flex gap-3'>
                  <button className='mt-4 w-44 p-2 border-2 border-green-700 rounded-lg hover:bg-slate-600/70 hover:border-green-500'>Editar</button>
                  <button className='mt-4 p-2 border-2 border-green-700 rounded-lg hover:bg-slate-600/70 hover:border-green-500'>Cambiar contraseña</button>
                </div>

              </div>
          </div>

          <div>
            <h2 className='p-4 border-b-2 border-white/10 '>CONFIGURACION</h2>
          </div>
    </div>
  )
}

export default Settings
