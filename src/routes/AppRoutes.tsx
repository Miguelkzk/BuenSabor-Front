import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import Articulos from "../pages/Articulos";
import Clientes from "../pages/Clientes";
import Login from "../pages/Login";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Productos from "../pages/Productos";
import Categorias from "../pages/Categorias";
import UnidadMedida from "../pages/UnidadMedida";


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            {/*<Route path="/articulos" element={<PrivateRoute element={<Articulos />} />} /> */}
            <Route path="/articulos" element={<Articulos />} />
            <Route path="/clientes" element={<PrivateRoute element={<Clientes />} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Productos" element={<Productos />} />
            <Route path="/categorias-insumos" element={<Categorias />} />
            <Route path="/unidades-medida" element={<UnidadMedida />} />
        </Routes>
    )
}
export default AppRoutes;