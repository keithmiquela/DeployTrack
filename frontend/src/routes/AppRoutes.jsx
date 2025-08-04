import { BrowserRouter, Routes, Route } from 'react-router'
import Dashboard from '../pages/Dashboard.jsx'
import Login from '../pages/Login.jsx'
import MainLayout from '../layouts/MainLayout.jsx'
import { useState, useEffect } from 'react'
import NewDeployment from '../pages/NewDeployment.jsx'
import DeploymentLogs from '../pages/DeploymentLogs.jsx'
import { Navigate } from 'react-router'

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
          <Route path="/" element={<Navigate to="login" replace />}/>
          <Route path="login" element={<Login />}></Route>
          <Route path="dashboard" element={<MainLayout />}>
            <Route index element={<Dashboard />}></Route>
          </Route>
          <Route path="deployment" element={<MainLayout />}>
            <Route path="new" element={<NewDeployment />}></Route>
            <Route path=":id" element={<DeploymentLogs />}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes