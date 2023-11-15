import { UnidadMedida } from "../types/UnidadMedida";

const BASE_URL = "http://localhost:8088";

const ServicioUnidadMedida = {
    getUnidadMedida: async (): Promise<UnidadMedida[]> => {
        const response = await fetch(`${BASE_URL}/api/unidadMedidas`);
        const data = await response.json();
        return data;
    },
}
export default ServicioUnidadMedida