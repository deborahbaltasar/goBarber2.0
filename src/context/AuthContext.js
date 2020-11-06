import React, { createContext, useCallback, useState } from 'react';

import api from '../services/api';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@Voxtex:token');
    const user = localStorage.getItem('@Voxtex:user');

    if(token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  })
  
  const signIn = useCallback( async ({ email, password}) => {
    const response = await api.post('session', {
      email,
      password,
    });
    
    const { token, user } = response.data;

    localStorage.setItem('@Voxtex:token', token);
    localStorage.setItem('@Voxtex:user', JSON.stringify(user));

    setData({ token, user });

  }, []);
  
  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

