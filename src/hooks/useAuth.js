import { useState } from 'react';
import { isAuthenticated, logoutUser, getUser } from '../services/authService';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(() => isAuthenticated());
  const [user, setUser] = useState(() => getUser());

  const logout = () => {
    logoutUser();
    setIsAuth(false);
    setUser(null);
  };

  return { isAuth, user, logout };
};
