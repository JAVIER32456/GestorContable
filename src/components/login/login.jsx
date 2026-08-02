import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Logo from '../../assets/logo.png';
import { IoIosArrowBack } from "react-icons/io";
import { loginUser } from '../../services/authService';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('INICIO: Formulario enviado', formData);
    setError('');
    setLoading(true);

    try {
      console.log('Llamando a loginUser...');
      const data = await loginUser(formData);
      // console.log('Respuesta recibida:', data);

      // Buscar el token en diferentes campos posibles
      const token = data?.data?.token || data?.token || data?.access_token || data?.jwt;
      // console.log('Token encontrado:', token);
      
      if (token) {
        localStorage.setItem('token', token);
        console.log('Token guardado en localStorage');
        navigate('/dashboard');
      } else {
        console.error('No se encontró token en la respuesta:', data);
        setError('No se recibió token del servidor. Verifica tu backend.');
      }
    } catch (err) {
      console.error('Error en login:', err);
      setError(err.message || 'No se pudo iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden">
      <Link to="/" className="absolute top-6 left-6 text-white hover:text-green-400 transition"
        title='Volver a pagina principal'
      >
        <IoIosArrowBack size={24} />
      </Link>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/10 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-slate-900/70 backdrop-blur-xl p-10 rounded-2xl 
        shadow-[0_0_50px_rgba(0,255,150,0.05)] border border-white/10 w-[400px]"
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
            <img src={Logo} alt="logo" className="w-8" />
          </div>
          <h2 className="text-xl font-bold text-white">XPENSES</h2>
        </div>

        <p className="text-gray-400 text-sm text-center mb-6">
          Inicia sesión en tu cuenta
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo electrónico"
            required
            className="w-full bg-slate-800/70 border border-white/10 text-white 
            rounded-lg px-4 py-3 text-sm 
            focus:outline-none focus:ring-2 focus:ring-green-500 
            focus:border-green-500 transition-all duration-200"
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Contraseña"
              required
              className="w-full bg-slate-800/70 border border-white/10 text-white 
              rounded-lg px-4 py-3 text-sm 
              focus:outline-none focus:ring-2 focus:ring-green-500 
              focus:border-green-500 transition-all duration-200"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-xs text-gray-400 cursor-pointer hover:text-white"
            >
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </span>
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-green-500 hover:bg-green-600 disabled:opacity-60 
            shadow-lg shadow-green-500/20 hover:shadow-green-500/40 
            transition-all duration-300 py-3 rounded-lg font-semibold"
          >
            {loading ? 'Ingresando...' : 'Iniciar sesión'}
          </button>
        </form>

        <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
          <span className="hover:text-white cursor-pointer">
            ¿Olvidaste tu contraseña?
          </span>
        </div>

        <p className="text-sm text-gray-400 text-center mt-4">
          ¿No tienes cuenta?
          <Link
            to="/signup"
            className="text-green-400 ml-1 hover:underline"
          >
            Regístrate
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Login
