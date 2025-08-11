import { BrowserRouter, Routes, Route } from 'react-router'
import Dashboard from '../pages/Dashboard.jsx'
import Login from '../pages/Login.jsx'
import Signup from '../pages/Signup.jsx'
import MainLayout from '../layouts/MainLayout.jsx'
import { useState, useEffect } from 'react'
import NewDeployment from '../pages/NewDeployment.jsx'
import DeploymentLogs from '../pages/DeploymentLogs.jsx'
import { Navigate } from 'react-router'
import { useAuthContext } from '../hooks/useAuthContext.js'
import LoggedInRoutes from './LoggedInRoutes.jsx'
import LoggedOutRoutes from './LoggedOutRoutes.jsx'

const AppRoutes = () => {

  const {user} = useAuthContext();

  return (
    <BrowserRouter>
      {user ? <LoggedInRoutes /> : <LoggedOutRoutes />}
    </BrowserRouter>
  )
}

export default AppRoutes