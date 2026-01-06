import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  profileCompleted: boolean;
  profile?: UserProfile;
}

interface UserProfile {
  age: number;
  gender: string;
  education: string;
  income: string;
  occupation: string;
  state: string;
  district: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updateProfile: (profile: UserProfile) => void;
  resetProfile: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    // Simulate Firebase Auth
    await new Promise(resolve => setTimeout(resolve, 1000));
    setUser({
      id: '1',
      email,
      name: email.split('@')[0],
      profileCompleted: false,
    });
    setIsLoading(false);
  };

  const register = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setUser({
      id: '1',
      email,
      name,
      profileCompleted: false,
    });
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (profile: UserProfile) => {
    if (user) {
      setUser({
        ...user,
        profileCompleted: true,
        profile,
      });
    }
  };

  const resetProfile = () => {
    if (user) {
      setUser({
        ...user,
        profileCompleted: false,
        profile: undefined,
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout, updateProfile, resetProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
