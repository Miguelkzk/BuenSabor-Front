import Articulo from "../types/Articulo";

const BASE_URL = "http://localhost:8088";

const ServicioArticulo = {
    getArticulos: async (): Promise<Articulo[]> => {
        const response = await fetch(`${BASE_URL}/api/articulos`);
        const data = await response.json();
        return data;
    },
    getArticulo: async (id: number): Promise<Articulo> => {
        const response = await fetch(`${BASE_URL}/articulos/${id}`);
        const data = await response.json();
        return data;
    },
    createArticulo: async (articulo: Articulo): Promise<Articulo> => {
        const response = await fetch(`${BASE_URL}/articulos`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(articulo)
        });
        const data = await response.json();
        return data;
    },
    updateArticulo: async (id: number, articulo: Articulo): Promise<Articulo> => {
        const response = await fetch(`${BASE_URL}/articulos/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(articulo)
        });
        const data = await response.json();
        return data;
    },
    deleteArticulo: async (id: number): Promise<void> => {
        await fetch(`${BASE_URL}/articulos/${id}`, {
            method: "DELETE"
        });
    }
}
export default ServicioArticulo;