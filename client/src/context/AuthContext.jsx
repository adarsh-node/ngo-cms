import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { getCurrentAdmin } from "../api/authApi";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");

    if (!storedToken) {
      setLoading(false);
      return;
    }

    const restoreSession = async () => {
      try {
        const data = await getCurrentAdmin(storedToken);

        setToken(storedToken);
        setAdmin(data.admin);
      } catch (error) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("admin");

        setToken(null);
        setAdmin(null);
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  const login = (adminData, authToken) => {
    setAdmin(adminData);
    setToken(authToken);

    localStorage.setItem("adminToken", authToken);
    localStorage.setItem("admin", JSON.stringify(adminData));
  };

  const logout = () => {
    setAdmin(null);
    setToken(null);

    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");
  };

  const value = {
    admin,
    token,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export {
  AuthProvider,
  useAuth,
};