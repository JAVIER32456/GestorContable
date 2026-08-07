import { fetchWithAuth } from "./authService";

// Trae todos los tipos de movimientos
export const getDataHomeDashboard = async () => {
  return await fetchWithAuth('/api/datahome', { method: "GET" });
};