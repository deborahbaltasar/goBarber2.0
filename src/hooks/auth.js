import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
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
  
  const signOut = useCallback(() => {
    localStorage.removeItem('@Voxtex:token');
    localStorage.removeItem('@Voxtex:user');

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider };

