import { fetchWithAuth } from "./authService";

// Trae todos los tipos de movimientos
export const getDataHomeDashboard = async () => {
  return await fetchWithAuth('/api/datahome', { method: "GET" });
};

// Trae los datos de estadisticas
export const getDataStatistics = async () => {
  return await fetchWithAuth('/api/dashboard/statistics/', { method: "GET" });
}