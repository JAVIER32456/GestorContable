import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Logo from '../../assets/logo.png';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden">

      {/* Glow fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-400/10 blur-3xl rounded-full"></div>

      {/* Card animada */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-slate-900/70 backdrop-blur-xl p-10 rounded-2xl 
        shadow-[0_0_50px_rgba(0,255,150,0.05)] border border-white/10 w-[400px]"
      >

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
            <img src={Logo} alt="logo" className="w-6" />
          </div>
          <h2 className="text-xl font-bold text-white">XPENSES</h2>
        </div>

        {/* Título */}
        
        <p className="text-gray-400 text-sm text-center mb-6">
          Crea tu cuenta
        </p>
        

        {/* Inputs */}
        <div className="space-y-4">

          <input 
            type="text"
            placeholder="Nombre"
            className="w-full bg-slate-800/70 border border-white/10 text-white 
            rounded-lg px-4 py-3 text-sm 
            focus:outline-none focus:ring-2 focus:ring-green-500 
            focus:border-green-500 transition-all duration-200"
          />

          <input 
            type="email"
            placeholder="Correo electrónico"
            className="w-full bg-slate-800/70 border border-white/10 text-white 
            rounded-lg px-4 py-3 text-sm 
            focus:outline-none focus:ring-2 focus:ring-green-500 
            focus:border-green-500 transition-all duration-200"
          />

          <input 
            type="password"
            placeholder="Contraseña"
            className="w-full bg-slate-800/70 border border-white/10 text-white 
            rounded-lg px-4 py-3 text-sm 
            focus:outline-none focus:ring-2 focus:ring-green-500 
            focus:border-green-500 transition-all duration-200"
          />

          <input 
            type="password"
            placeholder="Confirmar contraseña"
            className="w-full bg-slate-800/70 border border-white/10 text-white 
            rounded-lg px-4 py-3 text-sm 
            focus:outline-none focus:ring-2 focus:ring-green-500 
            focus:border-green-500 transition-all duration-200"
          />

        </div>

        {/* Botón */}
        <Link to="/login">
          <button 
            className="w-full mt-6 bg-green-500 hover:bg-green-600 
            shadow-lg shadow-green-500/20 hover:shadow-green-500/40 
            transition-all duration-300 py-3 rounded-lg font-semibold"
            >
            Registrarme
          </button>
        </Link>

        {/* Seguridad */}
        <p className="text-xs text-gray-500 text-center mt-3">
          Tus datos están protegidos 🔒
        </p>

        {/* Footer */}
        <p className="text-sm text-gray-400 text-center mt-4">
          ¿Ya tienes cuenta? 
          <Link 
            to="/login" 
            className="text-green-400 ml-1 hover:underline"
          >
            Inicia sesión
          </Link>
        </p>

      </motion.div>
    </div>
  );
}

export default SignUp;
