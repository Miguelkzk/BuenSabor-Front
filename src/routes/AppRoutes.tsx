import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import Articulos from "../pages/Articulos";
import Clientes from "../pages/Clientes";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/articulos" element={<Articulos />} />
            <Route path="/clientes" element={<Clientes />} />
        </Routes>
    )
}
export default AppRoutes;