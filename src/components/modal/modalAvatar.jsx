import React from 'react'
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { logoutUser } from "../../services/authService";
import { useNavigate } from 'react-router-dom';

const ModalAvatar = ({isOpen, onClose}) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  return (
    <div className="absolute top-16 right-4 bg-slate-800 border-2 text-white/60 border-slate-700 rounded-lg shadow-xl z-50 w-80">
        
        <div className='p-4 border-b border-slate-700 flex items-center justify-between'>
            <p >Avatar</p>
            <button onClick={onClose} className='text-gray-400 hover:text-white transition'>
                <IoClose size={20} />
            </button>

            
                
        </div>
        <div className=' h-40 flex flex-col items-center justify-center p-8 pb-8 border-b-2 border-slate-700'>
            <img src="" alt="" width={100} height={100} className='rounded-full bg-slate-300'/>
            <p className='text-sm font-normal'>correos@example.com</p>
        </div>
   
        <div className='pb-2'>
            <Link to="settings">
                <button className='w-full font-normal py-2 hover:bg-slate-600 transition'>Configuración</button>
            </Link>
            <button onClick={handleLogout} className='w-full font-normal py-2 hover:bg-slate-600 transition'>Cerrar Sesion</button>
        </div>
        <div className='flex text-xs mb-2'>
            <button className='w-full font-normal rounded-md py-2 hover:bg-slate-600 transition'>Terminos y condiciones</button>
            <button className='w-full font-normal rounded-md py-2 hover:bg-slate-600 transition'>Ayuda</button>
        </div>
    </div>
  )
}

export default ModalAvatar
