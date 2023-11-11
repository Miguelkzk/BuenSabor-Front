import { Producto } from "../types/Producto";
const BASE_URL = 'http://localhost:8088'
export const ProductoService = {

    //get all
    getProductos: async (): Promise<Producto[]> => {
        const response = await fetch(`${BASE_URL}/api/productos/all`);
        const data = await response.json();
        return data;

    }
}