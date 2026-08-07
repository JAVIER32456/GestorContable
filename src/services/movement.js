import { fetchWithAuth } from './authService';

// Trae todos los tipos de movimientos
export const getMovements = async (page = 1, limit = 10) => {
  return await fetchWithAuth(
    `/api/movement?page=${page}&limit=${limit}`,
    { method: 'GET' }
  );
};

// Trae un tipo de movimiento por id
export const getMovementById = async (id) => {
  return await fetchWithAuth(`/api/movement/${id}`, { method: 'GET' });
};

// Crea un nuevo tipo de movimiento
export const createMovement = async (payload) => {
  return await fetchWithAuth('/api/movement', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
};

// Actualiza un tipo de movimiento existente
export const updateMovement = async (id, payload) => {
  return await fetchWithAuth(`/api/movement/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  });
};

// Elimina un tipo de movimiento existente
export const deleteMovement = async (id) => {
  return await fetchWithAuth(`/api/movement/${id}`, {
    method: 'DELETE',
    });
};

// URL nueva api/movement/form-data para traer los datos necesarios para el formulario de movimientos
export const getMovementFormData = async () => {
  return await fetchWithAuth('/api/movement/form-data', { method: 'GET' });
};