import { Route, Routes } from "react-router";
import { Navigate } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import NewDeployment from "../pages/NewDeployment";
import DeploymentLogs from "../pages/DeploymentLogs";
import EditDeployment from "../pages/EditDeployment"

const LoggedInRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />}/>
        <Route path="user">
            <Route index element={<Navigate to="/dashboard" replace />}/>
            <Route path="login" element={<Navigate to="/dashboard" replace />}></Route>
            <Route path="signup" element={<Navigate to="/dashboard" replace />}></Route>
        </Route>
        <Route path="dashboard" element={<MainLayout />}>
            <Route index element={<Dashboard />}></Route>
        </Route>
        <Route path="deployment" element={<MainLayout />}>
            <Route path="new" element={<NewDeployment />}></Route>
            <Route path=":id">
              <Route path="logs" element={<DeploymentLogs />}></Route>
              <Route path="edit" element={<EditDeployment />}></Route>
            </Route>
        </Route>
    </Routes>
  )
}

export default LoggedInRoutes