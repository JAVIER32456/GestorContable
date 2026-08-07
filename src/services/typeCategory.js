
import { fetchWithAuth } from './authService';

// Trae todas las categorias
export const getTypeCategories = async () => {
  return await fetchWithAuth('/api/categories', { method: 'GET' });
};

// Trae una categoria por id
export const getTypeCategoryById = async (id) => {
  return await fetchWithAuth(`/api/categories/${id}`, { method: 'GET' });
};

// Crea una nueva categoria
export const createTypeCategory = async (payload) => {
  return await fetchWithAuth('/api/categories', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
};

// Actualiza una categoria existente
export const updateTypeCategory = async (id, payload) => {
  return await fetchWithAuth(`/api/categories/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  });
};

// Elimina una categoria existente
export const deleteTypeCategory = async (id) => {
  return await fetchWithAuth(`/api/categories/${id}`, {
    method: 'DELETE',
  });
};