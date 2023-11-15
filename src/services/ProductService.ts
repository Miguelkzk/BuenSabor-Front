import { Producto } from "../types/Producto";
const BASE_URL = 'http://localhost:8088'
export const ProductoService = {

    //get all
    getProductos: async (): Promise<Producto[]> => {
        const response = await fetch(`${BASE_URL}/api/productos/all`);
        const data = await response.json();
        return data;

    },
    //getone
    getProducto: async (id: number): Promise<Producto> => {
        const response = await fetch(`${BASE_URL}/productos/${id}`)
        const data = await response.json();
        return data;

    },
    searchProducto: async (filter: string): Promise<Producto[]> => {
        const response = await fetch(`${BASE_URL}/api/productos/search?filtro=${filter}`)
        const data = await response.json();
        return data;
    },

    createProducto: async (producto: Producto): Promise<Producto> => {
        const response = await fetch(`${BASE_URL}/api/productos/create`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(producto)
        });
        const data = await response.json();
        return data;
    },

    updateProducto: async (id: number, producto: Producto): Promise<Producto> => {
        const response = await fetch(`${BASE_URL}/api/productos/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(producto)
        });
        const data = await response.json();
        return data;
    },

    deleteProducto: async (id: number): Promise<void> => {
        await fetch(`${BASE_URL}/api/productos/${id}`, {
            method: "DELETE"
        });
    }

}
//http://localhost:8088/api/productos/search?filtro=
