import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { createTypeCategory } from '../../services/typeCategory.js';

const ModalNewCategory = ({ isOpen, onClose }) => {
    
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        isActive: 'true'
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!formData.name || !formData.description || !formData.isActive) {
            setError('Todos los campos son obligatorios');
            return;
        }

        setLoading(true);
        try {
            await createTypeCategory({
                name: formData.name,
                description: formData.description,
                isActive: formData.isActive === 'true' ? true : false,
            });
            setSuccess('Categoria creada correctamente');
            setTimeout(() => {
                onClose();
                setSuccess('');
                setError('');
                setFormData({ name: '', description: '', isActive: 'true' });
            }, 1200);
        } catch (err) {
            console.error('Error al crear categoria:', err);
            setError(err.message || 'No se pudo crear la categoria');
        } finally {
            setLoading(false);
        }
    }

    const handleClose = () => {
        onClose();
        setError('');
        setSuccess('');
        setFormData({ name: '', description: '', isActive: 'true' });
    }

    if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-[1000] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center'>
      <div
        className='relative w-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl border border-slate-700 overflow-hidden'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex justify-between items-center'>
          <h2 className='text-xl font-bold text-white'>Nueva Categoria</h2>
          <IoClose
            size={24}
            className='text-white hover:text-blue-200 cursor-pointer transition-colors'
            onClick={handleClose}
          />
        </div>

        <form className='p-6 space-y-5' onSubmit={handleSubmit}>
            
          <div className='space-y-2'>
            <label htmlFor='name' className='block text-sm font-semibold text-gray-300'>
              Nombre de la Categoria
            </label>
            <input
              type='text'
              id='name'
              placeholder='Ej: Servicios Publicos'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all'
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor='description' className='block text-sm font-semibold text-gray-300'>
              Descripcion
            </label>
            <input
              type='text'
              id='description'
              placeholder='Ej: Gastos relacionados a servicios del hogar'
              name='description'
              value={formData.description}
              onChange={handleChange}
              className='w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all'
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor='status' className='block text-sm font-semibold text-gray-300'>
              Estado
            </label>
            <select
              id='status'
              name='isActive'
              value={formData.isActive}
              onChange={handleChange}
              className='w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all'
            >
              <option value='true'>Activa</option>
              <option value='false'>Inactiva</option>
            </select>
          </div>

              
          <div className='flex gap-3 pt-4'>
            <button
              type='button'
              onClick={handleClose}
              className='flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors'
            >
              Cancelar
            </button>
            <button
              type='submit'
              disabled={loading}
              className='flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-green-500/50'
            >
              Guardar
            </button>

            
          </div>
            {success && <p className='text-sm text-emerald-400 mt-2'>{success}</p>}
            {error && <p className='text-sm text-red-400 mt-2'>{error}</p>}

        </form>
      </div>
    </div>
  )
}

export default ModalNewCategory
