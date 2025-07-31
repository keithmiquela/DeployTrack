import { BrowserRouter, Routes, Route } from 'react-router'
import Dashboard from '../pages/Dashboard.jsx'
import Login from '../pages/Login.jsx'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes