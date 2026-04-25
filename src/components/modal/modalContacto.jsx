import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const ModalContacto = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      // Reemplaza con tu endpoint o servicio de email
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        alert('¡Mensaje enviado!')
        setFormData({ name: '', email: '', message: '' })
        onClose()
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error al enviar')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50'>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className='bg-slate-900 border border-white/10 rounded-2xl p-8 max-w-md w-full'
      >
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-bold text-white text-center flex-1'>Contacto</h2>
          <button 
            onClick={onClose}
            className='text-gray-400 hover:text-white text-2xl'
          >
            ✕
          </button>
        </div>

        <p className='text-gray-400 mb-6'>¿Tienes alguna pregunta? ¡Estamos aquí para ayudarte!</p>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm text-gray-300 mb-2'>Nombre:</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='w-full bg-slate-800/70 border border-white/10 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500'
              required
            />
          </div>

          <div>
            <label className='block text-sm text-gray-300 mb-2'>Correo:</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='w-full bg-slate-800/70 border border-white/10 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500'
              required
            />
          </div>

          <div>
            <label className='block text-sm text-gray-300 mb-2'>Mensaje:</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className='w-full bg-slate-800/70 border border-white/10 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none'
              required
            />
          </div>

          <div className='flex gap-3'>
            <button 
              type="button"
              onClick={onClose}
              className='flex-1 px-4 py-2 border border-white/10 text-white rounded-lg hover:bg-white/5 transition'
            >
              Cancelar
            </button>
            <button 
              type="submit"
              disabled={loading}
              className='flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition disabled:opacity-50'
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default ModalContacto
