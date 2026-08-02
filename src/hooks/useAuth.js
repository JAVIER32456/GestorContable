import { useState } from 'react';
import { isAuthenticated, logoutUser } from '../services/authService';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(() => isAuthenticated());

  const logout = () => {
    logoutUser();
    setIsAuth(false);
  };

  return { isAuth, loading: false, logout };
};
