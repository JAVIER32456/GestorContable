const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const handleResponse = async (response) => {
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || 'Error en la solicitud');
  }

  return data;
};

export const loginUser = async ({ email, password }) => {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  return handleResponse(response);
};

export const registerUser = async ({ name, email, password }) => {
  const response = await fetch(`${API_URL}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  });

  return handleResponse(response);
};
