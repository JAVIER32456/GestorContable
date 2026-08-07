import React, { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { getMovementFormData } from '../../services/movement.js';
import { createMovement } from '../../services/movement.js';

const getCurrentLocalDateTime = () => {
    const now = new Date();
    const tzOffset = now.getTimezoneOffset() * 60000;
    return new Date(now.getTime() - tzOffset).toISOString().slice(0, 16);
};


const ModalNewMove = ({isOpen, onClose}) => {

    // Variables del formulario de envio de los movimientos
    const [formData, setFormData] = useState({
        movementTypeId: '',
        categoryId: '',
        amount: '',
        description: '',
        movementDate: getCurrentLocalDateTime() // Fecha y hora local en formato YYYY-MM-DDTHH:mm
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Estado para almacenar los tipos de movimientos y categorias
    const [varTypeCatMov, setVarTypeCatMov] = useState({
        typeMovements: [],
        typeCategories: []
    });

    // Variables separadas
    const typeMovements = varTypeCatMov.typeMovements;
    const typeCategories = varTypeCatMov.typeCategories;

    // useEffect para cargar tipos de movimientos y categorias
    useEffect(() => {
    if (!isOpen) return;

    const loadFormData = async () => {
        try {
            const res = await getMovementFormData();

            setVarTypeCatMov({
                typeMovements: res.data?.movementTypes || [],
                typeCategories: res.data?.categories || []
            });

            console.log('Tipos y categorías cargados:', res.data);

        } catch (err) {
            console.error('Error al cargar form-data:', err);
            setError('No se pudieron cargar Movimientos y categorías');
        }
    };

        loadFormData();
    }, [isOpen]);

    


    // Funcion enviar los datos del formulario al backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!formData.movementTypeId || !formData.categoryId || !formData.amount || !formData.movementDate) {
            setError('Completa los campos obligatorios: tipo, categoria, monto y fecha.');
            return;
        }

        const amountNumber = Number(formData.amount);
        if (Number.isNaN(amountNumber) || amountNumber <= 0) {
            setError('El monto debe ser un numero mayor que 0.');
            return;
        }

        if (Number.isNaN(Date.parse(formData.movementDate))) {
            setError('La fecha y hora del movimiento no es valida.');
            return;
        }

        const movementDateIso = new Date(formData.movementDate).toISOString();
        setLoading(true);
        try {
            await createMovement({
                movementTypeId: formData.movementTypeId,
                categoryId: formData.categoryId,
                amount: amountNumber,
                description: formData.description,
                movementDate: movementDateIso,
            });
            setSuccess('Movimiento creado correctamente.');
            setTimeout(() => {
                setFormData({
                    movementTypeId: '',
                    categoryId: '',
                    amount: '',
                    description: '',
                    movementDate: getCurrentLocalDateTime()
                });
                onClose();
            }, 900);
        } catch (error) {
            console.error(error);
            setError(error.message || 'Error interno del servidor al crear el movimiento.');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;
  return (
    <div className='fixed inset-0 z-[1000] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center'>
        <div 
            className="relative w-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl border border-slate-700 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
        >
            {/* Header */}
            <div className='bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex justify-between items-center'>
                <h2 className='text-xl font-bold text-white'>Nuevo Movimiento</h2>
                <IoClose 
                    size={24} 
                    className='text-white hover:text-blue-200 cursor-pointer transition-colors' 
                    onClick={onClose} 
                />
            </div>

            {/* Contenido */}
            <form className='p-6 space-y-5' onSubmit={handleSubmit}>
                {/* Tipo */}
                <div className='space-y-2'>
                    <label htmlFor="movementType" className='block text-sm font-semibold text-gray-300'>
                        Tipo de Movimiento
                    </label>
                    <select 
                        id="movementType"
                        value={formData.movementTypeId}
                        onChange={(e) => setFormData({ ...formData, movementTypeId: e.target.value })}
                        className='w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all'
                    >
                        <option value="">Selecciona un tipo</option>
                        {typeMovements.map((typeMovement) => (
                            <option key={typeMovement.id} value={typeMovement.id}>
                                {typeMovement.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="category" className='block text-sm font-semibold text-gray-300'>
                        Categoría
                    </label>
                    <select
                        id="category"
                        value={formData.categoryId}
                        onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                        className='w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all'
                    >
                        <option value="">Selecciona una categoría</option>
                        {typeCategories.map((typeCategory) => (
                            <option key={typeCategory.id} value={typeCategory.id}>
                                {typeCategory.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Monto */}
                <div className='space-y-2'>
                    <label htmlFor="amount" className='block text-sm font-semibold text-gray-300'>
                        Monto
                    </label>
                    <input 
                        type="number" 
                        id="amount"
                        placeholder='0.00' 
                        min={0}
                        step={0.01}
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                        className='w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all'
                    />
                </div>

                {/* Descripción */}
                <div className='space-y-2'>
                    <label htmlFor="description" className='block text-sm font-semibold text-gray-300'>
                        Descripción
                    </label>
                    <input 
                        type="text" 
                        id="description"
                        placeholder='Ej: Venta de producto' 
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className='w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all'
                    />
                </div>

                {/* Fecha de movimiento */}
                <div className='space-y-2'>
                    <label htmlFor="movementDate" className='block text-sm font-semibold text-gray-300'>
                        Fecha y hora de movimiento
                    </label>
                    <input 
                        type="datetime-local" 
                        id="movementDate"
                        value={formData.movementDate}
                        onChange={(e) => setFormData({ ...formData, movementDate: e.target.value })}
                        className='w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all'
                    />
                </div>

                {/* Botones */}
                <div className='flex gap-3 pt-4'>
                    <button 
                        type='button' 
                        onClick={onClose}
                        disabled={loading}
                        className='flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors'
                    >
                        Cancelar
                    </button>
                    <button 
                        type='submit' 
                        disabled={loading}
                        className='flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-green-500/50'
                    >
                        {loading ? 'Guardando...' : 'Agregar'}
                    </button>
                </div>

                {success && <p className='text-sm text-emerald-400'>{success}</p>}
                {error && <p className='text-sm text-red-400'>{error}</p>}
            </form>
        </div>
    </div>
  )
}

export default ModalNewMove
