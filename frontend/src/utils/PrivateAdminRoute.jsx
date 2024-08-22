import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAdminAuthContext } from "../context/AdminAuthContext";

const PrivateAdminRoute = () => {
  const { authUser } = useAdminAuthContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(false);
    };
    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return authUser ? <Outlet /> : <Navigate to="/adminLogin" />;
};

export default PrivateAdminRoute;
