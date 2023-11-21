import { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';

interface AuthData {
  exp?: number;
}

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (token) {
      const decodedToken = jwtDecode<AuthData>(token);

      if (decodedToken.exp && decodedToken.exp * 1000 > Date.now() + 300000) {
        // Expired time is more than 5 minutes in the future
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        localStorage.removeItem('access_token'); // Remove invalid token
      }
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return { isAuthenticated };
}
