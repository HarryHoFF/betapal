import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AuthContextType, User } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mockUser: User = {
  id: '1',
  username: 'GoonDocksHaderslev',
  email: 'goondocks@haderslev.dk',
  fullName: 'GoonDocks Haderslev',
  balance: 5035.94
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, pin: string): boolean => {
    if (username === 'GoonDocksHaderslev' && pin === '132313') {
      setUser(mockUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
