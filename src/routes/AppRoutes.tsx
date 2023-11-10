import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}
export default AppRoutes;