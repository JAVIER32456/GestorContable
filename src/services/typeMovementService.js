
import { fetchWithAuth } from './authService';

export const getTypeMovements = async () => {
  return await fetchWithAuth('/api/movement-types', { method: 'GET' });
};


