import React from 'react'
import { useAdminAuthContext } from "../../context/AdminAuthContext";
const AdminLogin = () => {
  const { authUser } = useAdminAuthContext();
  console.log(authUser)
  return (
    <div>AdminLogin</div>
  )
}

export default AdminLogin