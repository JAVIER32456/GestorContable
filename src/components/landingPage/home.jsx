import React, { useState } from 'react';
import imgPc from '../../assets/pc.png';
import Acceso from '../../assets/acceso.png';
import Navegador from '../../assets/navegador.png';
import Enlace from '../../assets/graficoBarras.png';
import { Typewriter } from 'react-simple-typewriter';
import { PiInstagramLogoFill } from "react-icons/pi";
import ModalContacto from '../modal/modalContacto';
import { RiWhatsappFill } from "react-icons/ri";
import { CgFacebook } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import Logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Carrusel from './carrusel';
import "./style.css";
import { HiMenu, HiX } from 'react-icons/hi';


const Home = () => {
  const [modalContactoAbierto, setModalContactoAbierto] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)
  return (
    <div className="bg-slate-900 text-white min-h-screen relative overflow-hidden">
        {/* Header */}
        <header id="inicio" className='border-b border-gray-700 py-3 sticky top-0 z-50 bg-slate-900/95 backdrop-blur'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between'>
            {/* Logo */}
            <div className='flex items-center gap-2'>
                <div className='w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center font-bold'>
                    <img src={Logo} alt="Logo"  />
                </div>
                <h1 className='text-lg sm:text-xl font-bold'>Expenses</h1>
            </div>

            {/* Navigation Desktop */}
            <nav className='hidden md:flex items-center gap-8'>
                <a href="#inicio" className='landing_nav'>INICIO</a>
                <a href="#nosotros" className='landing_nav'>NOSOTROS</a>
                <a href="#contacto" className='landing_nav ' onClick={() => setModalContactoAbierto(true)}>CONTACTO</a>
            </nav>

            {/* Buttons Desktop */}
            <div className='hidden md:flex items-center gap-3'>
                <Link to="/login">
                    <button className='text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition'>
                    Login
                    </button>
                </Link>
                <Link to="/signup">
                    <button className='bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition'>
                    Sign Up
                    </button>
                </Link>
            </div>

            {/* Menu Mobile */}
            <button 
              className='md:hidden text-white text-2xl'
              onClick={() => setMenuAbierto(!menuAbierto)}
            >
              {menuAbierto ? <HiX /> : <HiMenu />}
            </button>
            </div>

            {/* Mobile Menu */}
            {menuAbierto && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className='md:hidden border-t border-gray-700 bg-slate-900/95 backdrop-blur'
              >
                <div className='px-4 py-4 space-y-3'>
                  <a href="#inicio" className='block text-white py-2 hover:text-green-400 transition' onClick={() => setMenuAbierto(false)}>INICIO</a>
                  <a href="#nosotros" className='block text-white py-2 hover:text-green-400 transition' onClick={() => setMenuAbierto(false)}>NOSOTROS</a>
                  <a href="#contacto" className='block text-white py-2 hover:text-green-400 transition' onClick={() => {setModalContactoAbierto(true); setMenuAbierto(false);}}>CONTACTO</a>
                  
                  <div className='flex gap-2 pt-2'>
                    <Link to="/login" className='flex-1'>
                      <button className='w-full text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition text-sm'>
                      Login
                      </button>
                    </Link>
                    <Link to="/signup" className='flex-1'>
                      <button className='w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition text-sm'>
                      Sign Up
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
        </header>
        {/* Hero Section animada */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-32 md:pt-40 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4'
        >
            {/* Círculos de luz difuminados */}
            <div className='absolute -top-0 -left-20 w-80 h-80 bg-green-500 rounded-full blur-3xl opacity-20 pointer-events-none'></div>
            <div className='absolute -bottom-10 -right-20 w-96 h-60 bg-blue-500 rounded-full blur-3xl opacity-15 pointer-events-none'></div>
            <div className='absolute top-1/2 right-1/4 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-10 pointer-events-none'></div>
            {/* Left Content */}
            <motion.div
              className='flex-1 relative z-10 text-center md:text-left'
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >   

                <h2 className='text-3xl sm:text-4xl md:text-4xl font-bold mb-4 w-84'>Gestiona tus gastos de manera eficiente</h2>
                <p className='text-gray-400 text-base sm:text-lg mb-8'>
                    <Typewriter
                        words={['La mejor herramienta para controlar tus finanzas personales', 'De manera agil y rapida organiza tus gastos', 'Optimiza tus finanzas y ahorra dinero con nosotros   ']}
                        loop={true}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </p>
                
                <motion.button
                  className='bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Empieza Ahora
                </motion.button>
            </motion.div>
            {/* Right Content - Imagen con efectos */}
            <motion.div
              className='flex-1 relative z-10 w-full max-w-xs sm:max-w-md md:max-w-none '
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
                {/* Tarjeta principal con gradiente */}
                <div  className=' h-56 sm:h-80 md:h-96 sm:ml-20 lg:ml-40 flex items-center justify-center md:w-52  '>
                    {/* Efecto de brillo trasero */}
                    <div className='absolute inset-0 from-white/100 to-transparent rounded blur-2xl '></div>
                    {/* Contenedor con sombra */}
                    
                    <img src={imgPc} alt="pc" className='max-w-sm sm:max-w-xl lg:max-w-4xl object-contain'/>
                    
                </div> 
            </motion.div>
        </motion.section>
        { /* Features Section */}
        <motion.section 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='bg-slate-800'
        >
            <motion.div 
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='relative max-w-6xl mx-auto px-4 sm:px-6'
            >
                {/* Grid de 3 columnas - Responsive */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 pb-12 md:pb-16 pt-12 md:pt-16 mt-10 md:mt-20'>
                    {/* Feature 1 */}
                    <div className='flex flex-row items-start gap-4 sm:gap-6'  >
                        <div className='flex-shrink-0'>
                            <img src={Acceso} alt="Seguridad" width={50} className='w-12 sm:w-14 md:w-16'/>
                        </div>
                        <div className='flex-1'>
                            <h3 className='text-base sm:text-lg font-semibold mb-2 text-white'>Registro Simple</h3>
                            <p className='text-blue-100 text-xs sm:text-sm'>Añade ingresos y gastos en segundos</p>
                        </div>
                    </div>
                    
                    {/* Feature 2 */}
                    <div className='flex flex-row items-start gap-4 sm:gap-6 sm:border-x border-gray-700 sm:px-4 md:px-6'>
                        <div className='flex-shrink-0'>
                            <img src={Enlace} alt="Control" width={50} className='w-12 sm:w-14 md:w-16'/>
                        </div>
                        <div className='flex-1'>
                            <h3 className='text-base sm:text-lg font-semibold mb-2 text-white'>Categorias Inteligentes</h3>
                            <p className='text-blue-100 text-xs sm:text-sm'>Organiza tu dinero automaticamente</p>
                        </div>
                    </div>
                    
                    {/* Feature 3 */}
                    <div className='flex flex-row items-start gap-4 sm:gap-6'>
                        <div className='flex-shrink-0'>
                            <img src={Navegador} alt="Reportes" width={50} className='w-12 sm:w-14 md:w-16'/>
                        </div>
                        <div className='flex-1'>
                            <h3 className='text-base sm:text-lg font-semibold mb-2 text-white'>Reportes Visuales</h3>
                            <p className='text-blue-100 text-xs sm:text-sm'>Graficas claras para entender tu dinero</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.section>
        <section>
            <Carrusel />
        </section>
        {/* CTA Section */}
        <section id="nosotros" className="relative py-24 bg-slate-900 text-white">

            {/* Glow sutil */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-green-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">

                <h2 className="text-3xl md:text-4xl font-bold">
                ¿Quiénes somos?
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto">
                Somos una plataforma enfocada en ayudarte a tener control total de tus finanzas personales de forma simple, clara y accesible.
                </p>

                {/* Valores */}
                <div className="grid md:grid-cols-3 gap-6 mt-10 ">

                    <div className="card_nos_section">
                        <h3 className="card_nos_section_h3">
                            Simplicidad
                        </h3>
                        <p className="card_nos_section_p">
                            Diseñamos herramientas fáciles de usar para cualquier persona.
                        </p>
                    </div>

                    <div className="card_nos_section">
                        <h3 className="card_nos_section_h3">
                            Claridad
                        </h3>
                        <p className="card_nos_section_p">
                            Mostramos tu información financiera de forma visual y comprensible.
                        </p>
                    </div>


                    <div className="card_nos_section">
                        <h3 className="card_nos_section_h3">
                            Control
                        </h3>
                        <p className="card_nos_section_p">
                            Te damos el poder de tomar mejores decisiones con tu dinero.
                        </p>
                    </div>

                </div>

            </div>
        </section>
   
        <footer className="bg-gray-950 text-gray-400 py-8">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10">

                {/* IZQUIERDA */}
                <div className="md:col-span-2 space-y-4">
                
                    {/* Logo */}
                    <div className='flex flex-row'>
                        <img src={Logo} alt="Logo" width={30} /> 
                        <h2 className="text-2xl font-bold text-white">
                            XPENSES
                        </h2>
                    </div>

                    {/* Descripción */}
                    <p className="text-sm leading-relaxed">
                        Administra tus finanzas personales de forma simple y visual.
                    </p>

                    {/* Redes */}
                    <div className="flex gap-4 pt-2 justify-center md:justify-start">
                        <a href="https://www.facebook.com/"  target="_blank" rel="noopener noreferrer" className="landing_links"><CgFacebook /></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="landing_links"><PiInstagramLogoFill /></a>
                        <a href="https://www.linkedin.com/"  target="_blank" rel="noopener noreferrer" className="landing_links"><FaLinkedin /></a>
                        <a href="https://wa.me/"             target="_blank" rel="noopener noreferrer" className="landing_links"><RiWhatsappFill /></a>
                    </div>
                </div>

                {/* COLUMNAS */}
                <div className='flex-col align-center md:items-start text-center md:text-left'>
                    <h3 className="text-white font-semibold mb-4">Producto</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="landing_links">Funciones</li>
                        <li className="landing_links">Precios</li>
                        <li className="landing_links">Actualizaciones</li>
                    </ul>
                </div>

                <div className='flex-col align-center md:items-start text-center md:text-left'>
                    <h3 className="text-white font-semibold mb-4">Compañía</h3>
                    <ul className="space-y-2 text-sm">
                        
                        <li className="landing_links"><a href="#" >Inicio</a></li>
                        <li className="landing_links"><a href="#nosotros" >Nosotros</a></li>
                        <li className="landing_links"><a href="#contacto" onClick={() => setModalContactoAbierto(true)}>Contacto</a></li>
                        
                    </ul>
                </div>

                <div className='flex-col align-center md:items-start text-center md:text-left'>
                    <h3 className="text-white font-semibold mb-4">Soporte</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="landing_links">Ayuda</li>
                        <li className="landing_links">Terminos y condiciones</li>
                        <li className="landing_links">Politicas de Privacidad</li>
                    </ul>
                </div>

            </div>

            {/* Línea inferior */}
            <div className="mt-8 text-center text-sm text-gray-500">
                ©Copyright 2026 All rights Reserved
            </div>
        </footer>
        
        {/* Modal Contacto */}
        <ModalContacto 
          isOpen={modalContactoAbierto} 
          onClose={() => setModalContactoAbierto(false)} 
        />
  
    </div>

  );
}

export default Home
