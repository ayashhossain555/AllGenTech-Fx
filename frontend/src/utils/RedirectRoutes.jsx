import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../components/firebase";

const RedirectRoutes = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return user ? <Navigate to="/profile" /> : <Outlet />;
};

export default RedirectRoutes;
