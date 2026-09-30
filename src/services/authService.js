const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const handleResponse = async (response) => {
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || 'Error en la solicitud');
  }

  return data;
};

// Obtener headers con el token de autenticación
const getAuthHeaders = (body) => {
  const token = localStorage.getItem('token');
  const isMultipart = body instanceof FormData;

  return {
    // No se debe establecer Content-Type manualmente para FormData:
    // el navegador agrega el boundary necesario para multipart/form-data.
    ...(!isMultipart && { 'Content-Type': 'application/json' }),
    ...(token && { Authorization: `Bearer ${token}` })
  };
};

// Login de usuario
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

// Registro de usuario
export const registerUser = async ({ firstName, lastName, email, password }) => {
  const response = await fetch(`${API_URL}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ firstName, lastName, email, password })
  });

  return handleResponse(response);
};

// Obtener el token
export const getToken = () => {
  return localStorage.getItem('token');
};

// Obtener los datos del usuario loguado
export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// Guardar token y datos del usuario
export const setAuthData = (token, user) => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
};

// Verificar si el usuario está autenticado
export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

// Logout - eliminar el token y datos del usuario
export const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');

};

// Petición genérica con autenticación
export const fetchWithAuth = async (endpoint, options = {}) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      ...getAuthHeaders(options.body),
      ...options.headers
    }
  });

  if (response.status === 401) {
    // token inválido o expirado
    logoutUser();
    throw new Error('Token inválido o expirado');
  }

  return handleResponse(response);
};

//Petición para enviar actualizar la imagen del usuario
export const uploadProfileImage = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);
  return fetchWithAuth('/api/users/profile-image', {
    method: 'POST',
    body: formData
  });
};

// Peticion para actualizar los datos del usuario
export const updateProfile = async ({ firstName, lastName, email }) => {
  return fetchWithAuth(`/api/users/profile`, {
    method: 'PUT',
    body: JSON.stringify({
      firstName,
      lastName,
      email
    })
  });
};

// Petición POST para cambiar contraseña
export const changePassword = async (currentPassword, newPassword, confirmPassword) => {
  return fetchWithAuth('/api/auth/change-password', {
    method: 'POST',
    body: JSON.stringify({
      currentPassword,
      newPassword,
      confirmPassword
    })
  });
};

// Solicitar por correo el enlace para recuperar la contraseña
export const requestPasswordReset = async (email) => {
  const response = await fetch(`${API_URL}/api/auth/forgot-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  });

  return handleResponse(response);
};

// Guardar una nueva contraseña usando el token recibido por correo
export const resetPassword = async (token, newPassword) => {
  const response = await fetch(`${API_URL}/api/auth/reset-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token, newPassword })
  });

  return handleResponse(response);
};
