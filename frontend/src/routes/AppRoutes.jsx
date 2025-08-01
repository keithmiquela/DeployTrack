import { BrowserRouter, Routes, Route } from 'react-router'
import Dashboard from '../pages/Dashboard.jsx'
import Login from '../pages/Login.jsx'
import MainLayout from '../layouts/MainLayout.jsx'
import { useState, useEffect } from 'react'
import ProtectedRoute from './ProtectedRoute.jsx'

const AppRoutes = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("name")))

  useEffect(() => {
    if(localStorage.getItem("name") != null){
      setIsLoggedIn(true);
    }
  }, [localStorage])

  return (
    <BrowserRouter>
        <Routes>
        <Route path="login" element={
            <ProtectedRoute isChecked={!isLoggedIn} reRoute={"../"}>
              <Login />
            </ProtectedRoute>
        }></Route>
        <Route path="/" element={
            <ProtectedRoute isChecked={isLoggedIn} reRoute={"/login"}>
              <MainLayout />
            </ProtectedRoute>
          }>
          <Route index element={<Dashboard />}></Route>
        </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes