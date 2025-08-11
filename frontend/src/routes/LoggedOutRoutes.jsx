import { Route, Routes } from "react-router";
import { Navigate } from "react-router";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const LoggedOutRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/user/login" replace />}/>
        <Route path="/user">
            <Route index element={<Navigate to="/login" replace />}/>
            <Route path="login" element={<Login />}></Route>
            <Route path="signup" element={<Signup />}></Route>
        </Route>
        <Route path="dashboard/*" element={<Navigate to="/user/login" replace />}>
        </Route>
        <Route path="deployment/*" element={<Navigate to="/user/login" replace />}>
        </Route>
    </Routes>
  )
}

export default LoggedOutRoutes