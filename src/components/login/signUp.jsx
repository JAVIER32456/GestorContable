import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Logo from '../../assets/logo.png';
import { IoIosArrowBack } from "react-icons/io";
import { registerUser } from '../../services/authService';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setLoading(true);
    console.log('Enviando registro:', formData);

    try {
      const result = await registerUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      });

      console.log('Respuesta del registro:', result);
      setSuccess('Cuenta creada correctamente. Redirigiendo al login...');
      setTimeout(() => navigate('/login'), 1200);
    } catch (err) {
      console.error('Error en registro:', err);
      setError(err.message || 'No se pudo crear la cuenta');
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
          Crea tu cuenta
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Nombre"
            required
            className="w-full bg-slate-800/70 border border-white/10 text-white 
            rounded-lg px-4 py-3 text-sm 
            focus:outline-none focus:ring-2 focus:ring-green-500 
            focus:border-green-500 transition-all duration-200"
          />

          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Apellido"
            required
            className="w-full bg-slate-800/70 border border-white/10 text-white 
            rounded-lg px-4 py-3 text-sm 
            focus:outline-none focus:ring-2 focus:ring-green-500 
            focus:border-green-500 transition-all duration-200"
          />

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

          <input
            type="password"
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

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirmar contraseña"
            required
            className="w-full bg-slate-800/70 border border-white/10 text-white 
            rounded-lg px-4 py-3 text-sm 
            focus:outline-none focus:ring-2 focus:ring-green-500 
            focus:border-green-500 transition-all duration-200"
          />

          {error && <p className="text-sm text-red-400">{error}</p>}
          {success && <p className="text-sm text-emerald-400">{success}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-green-500 hover:bg-green-600 disabled:opacity-60
            shadow-lg shadow-green-500/20 hover:shadow-green-500/40 
            transition-all duration-300 py-3 rounded-lg font-semibold"
          >
            {loading ? 'Creando cuenta...' : 'Registrarme'}
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-3">
          Tus datos están protegidos 🔒
        </p>

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
