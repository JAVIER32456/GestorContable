import React, { useState, useEffect } from 'react'
import Hero from '../../assets/hero.png'
import ModalNewCategory from '../modal/modalNewCategory'
import { getUser } from '../../services/authService'

const Settings = () => {
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  //Constante para obtener los datos del usuario
  const [user, setUser] = useState(() => getUser());
  // useEffect para actualizar los datos del usuario cuando el componente se monta
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
      }
      catch (error) {
        console.error('Error fetching user data:', error);
      } 
    };
    fetchUser();
  }, []);


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
                {user && (
                  <>
                    <div className='flex justify-center p-5 '>
                        <img src={Hero} alt='Imagen' width={180} className='bg-slate-700 p-4 rounded-full'/>
                    </div>
                    <div className='flex flex-col'>
                          <div className='flex flex-col m-2'>
                            <label htmlFor="">Nombre</label>
                            <input type='text' placeholder={user.firstName} className='bg-transparent border-b-2 border-green-900 p-2 outline-none' disabled/>
                          </div>
                          
                          <div className='flex flex-col m-2' >
                            <label htmlFor="">Apellidos</label>
                            <input type="text" placeholder={user.lastName} className='bg-transparent border-b-2 border-green-900 p-2 outline-none' disabled/>
                          </div>

                          <div className='flex flex-col m-2'>
                            <label htmlFor="">Correo</label>
                            <input type="email" placeholder={user.email} className='bg-transparent border-b-2 border-green-900 p-2 outline-none' disabled/>
                          </div>

                      <div className='flex gap-3'>
                        <button className='mt-4 w-44 p-2 border-2 border-green-700 rounded-lg hover:bg-slate-600/70 hover:border-green-500'>Editar</button>
                        <button className='mt-4 p-2 border-2 border-green-700 rounded-lg hover:bg-slate-600/70 hover:border-green-500'>Cambiar contraseña</button>
                      </div>

                    </div>
                  </>
                )}
          </div>

          <div>
            <h2 className='p-4 border-b-2 border-white/10 '>CONFIGURACION</h2>
          </div>
          <div className='flex flex-col p-4 text-slate-400'>
              <button
                onClick={() => setIsCategoryModalOpen(true)}
                className='p-2 rounded-lg hover:text-white hover:bg-slate-700/90 text-left'
              >
                Categorias
              </button>
              <button className='p-2 rounded-lg hover:text-white hover:bg-slate-700/90 text-left'>
                Reportes Generales
              </button>
          </div>

          <ModalNewCategory
            isOpen={isCategoryModalOpen}
            onClose={() => setIsCategoryModalOpen(false)}
          />
    </div>
  )
}

export default Settings
