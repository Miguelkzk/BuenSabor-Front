import { CategoriaArticulo } from "../types/CategoriaArticulo";

const BASE_URL = "http://localhost:8088";

const ServicioCategoria = {
    getCategorias: async (): Promise<CategoriaArticulo[]> => {
        const response = await fetch(`${BASE_URL}/api/categorias`);
        const data = await response.json();
        return data;
    },
}
export default ServicioCategoria