import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import Login from "../pages/Login";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}
export default AppRoutes;