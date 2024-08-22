import { createContext, useContext, useState, useEffect } from "react";

export const AdminAuthContext = createContext();

export const useAdminAuthContext = () => {
  return useContext(AdminAuthContext);
};

export const AdminAuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
    const savedAuthUser = localStorage.getItem('authUser');
    return savedAuthUser ? JSON.parse(savedAuthUser) : false;
  });

  useEffect(() => {
    localStorage.setItem('authUser', JSON.stringify(authUser));
  }, [authUser]);

  return (
    <AdminAuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AdminAuthContext.Provider>
  );
};
