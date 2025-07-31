import { BrowserRouter, Routes, Route } from 'react-router'
import Dashboard from '../pages/Dashboard.jsx'
import Login from '../pages/Login.jsx'
import MainLayout from '../layouts/MainLayout.jsx'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<MainLayout />}>
          <Route index element={<Dashboard />}></Route>
        </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes