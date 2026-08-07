import React, { useRef, useEffect, useState } from 'react'
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import Logo from '../../assets/Logo.png';
import { useAuth } from '../../hooks/useAuth';
import ModalNotificaciones from '../modal/modalNotificaciones';
import ModalAvatar from '../modal/modalAvatar';

// components/Navbar.jsx
import { FiMenu, FiBell, FiSearch, FiSettings } from "react-icons/fi";

const Navbar = () => {

  // User para llamar los datos del usuario desde el hook useAuth
  const { user } = useAuth();
 
  // Aquí podrías manejar el estado para mostrar el modal de notificaciones
  const [modalNotificaciones, setModalNotificaciones] = useState(false);
  const notificacionesRef = useRef(null);

  // Aqui podrías manejar el estado para mostrar el modal de avatar
  const [modalAvatar, setModalAvatar] = useState(false);
  const avatarRef = useRef(null);

  // Detectar clicks fuera del dropdown

  // Para notificaciones
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificacionesRef.current && !notificacionesRef.current.contains(event.target)) {
        setModalNotificaciones(false);
      }
    };

    if (modalNotificaciones) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalNotificaciones]);
  
  //____________________________________________________________________________  
  // Para avatar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (avatarRef.current && !avatarRef.current.contains(event.target)) {
        setModalAvatar(false);
      }
    };

    if (modalAvatar) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalAvatar]);
  // ___________________________________________________________________________


  return (
    <header className="h-16 w-full bg-slate-950 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-6">

      {/* IZQUIERDA */}
      <div className="flex items-center gap-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
            
          <div className='w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center font-bold'>
            <img src={Logo} alt="Logo"  />
          </div>
          <h1 className="text-white font-bold text-lg tracking-wide">
            XPENSES
            </h1>
            

        </div>
      </div>

      {/* DERECHA */}
      <div className="flex items-center gap-2">

        {/* Buscar */}
        <button className="p-2 rounded-lg hover:bg-slate-700 transition">
          <FiSearch className="text-gray-300" />
        </button>

        {/* Notificaciones */}
        <div className="relative" ref={notificacionesRef}>
          <button className="relative p-2 rounded-lg hover:bg-slate-700 transition" onClick={()=> setModalNotificaciones(!modalNotificaciones)}>
            <FiBell className="text-gray-300" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-green-400 rounded-full"></span>
          </button>
          <ModalNotificaciones isOpen={modalNotificaciones} onClose={() => setModalNotificaciones(false)} />
        </div>

        {/* Config */}
        <button className="p-2 rounded-lg hover:bg-slate-700 transition">
          <FiSettings className="text-gray-300" />
        </button>

        {/* Avatar */}
          <button onClick={() => setModalAvatar(!modalAvatar)}>
            <div  className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black font-bold cursor-pointer" ref={avatarRef}>
              {user?.firstName ? user.firstName.charAt(0).toUpperCase() : 'EX'}
              <ModalAvatar isOpen={modalAvatar} onClose={() => setModalAvatar(false)} />
            </div>
          </button>
      </div>
      
    </header>
    
  );
};

export default Navbar;
