import React from 'react'
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import Logo from '../../assets/Logo.png';

// components/Navbar.jsx
import { FiMenu, FiBell, FiSearch, FiSettings } from "react-icons/fi";

const Navbar = () => {
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
        <button className="relative p-2 rounded-lg hover:bg-slate-700 transition">
          <FiBell className="text-gray-300" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-green-400 rounded-full"></span>
        </button>

        {/* Config */}
        <button className="p-2 rounded-lg hover:bg-slate-700 transition">
          <FiSettings className="text-gray-300" />
        </button>

        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black font-bold cursor-pointer">
          AV
        </div>
      </div>
    </header>
  );
};

export default Navbar;
