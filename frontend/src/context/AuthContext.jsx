import { createContext, useContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("chart-user"); // ✅ fixed key name
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
