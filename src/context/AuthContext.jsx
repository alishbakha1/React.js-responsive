import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
// import firebaseAuth from '../firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AUTH_STORAGE_KEY = 'asl_user';
const USERS_STORAGE_KEY = 'asl_users';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(AUTH_STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, [user]);

  const signup = useCallback(async (name, email, password) => {
    setLoading(true);
    try {
      const users = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || '[]');
      if (users.find((u) => u.email === email)) {
        throw new Error('An account with this email already exists');
      }

      const newUser = {
        id: `user-${Date.now()}`,
        name,
        email,
        password,
        createdAt: new Date().toISOString(),
      };

      users.push(newUser);
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));

      // Firebase Auth integration point:
      // const firebaseUser = await firebaseAuth.signup(email, password, name);
      // await saveUserProfile(firebaseUser.uid, { name, email });

      const { password: _, ...userWithoutPassword } = newUser;
      setUser(userWithoutPassword);
      toast.success('Account created successfully!');
      return userWithoutPassword;
    } catch (error) {
      toast.error(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const login = useCallback(async (email, password) => {
    setLoading(true);
    try {
      const users = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || '[]');
      const found = users.find((u) => u.email === email && u.password === password);

      if (!found) {
        throw new Error('Invalid email or password');
      }

      // Firebase Auth integration point:
      // const firebaseUser = await firebaseAuth.login(email, password);

      const { password: _, ...userWithoutPassword } = found;
      setUser(userWithoutPassword);
      toast.success(`Welcome back, ${found.name}!`);
      return userWithoutPassword;
    } catch (error) {
      toast.error(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
    // Firebase Auth integration point:
    // await firebaseAuth.logout();
    toast.info('You have been logged out');
  }, []);

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signup,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
