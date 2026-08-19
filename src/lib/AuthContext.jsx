import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { appApi, supabase } from '@/api/appApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);

  const checkUserAuth = useCallback(async () => {
    setIsLoadingAuth(true);
    try {
      const currentUser = await appApi.auth.me();
      setUser(currentUser);
      setIsAuthenticated(true);
    } catch {
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoadingAuth(false);
      setAuthChecked(true);
    }
  }, []);

  useEffect(() => {
    checkUserAuth();

    // Реагируем на вход/выход в реальном времени (например, после Google OAuth редиректа)
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      checkUserAuth();
    });

    return () => {
      listener?.subscription?.unsubscribe();
    };
  }, [checkUserAuth]);

  const logout = (shouldRedirect = true) => {
    setUser(null);
    setIsAuthenticated(false);
    appApi.auth.logout(shouldRedirect ? '/' : undefined);
  };

  const navigateToLogin = () => {
    appApi.auth.redirectToLogin();
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      isLoadingAuth,
      // Эти поля ожидает корневой компонент; отдельная загрузка настроек не нужна.
      isLoadingPublicSettings: false,
      authError: null,
      authChecked,
      logout,
      navigateToLogin,
      checkUserAuth,
    }}>
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
