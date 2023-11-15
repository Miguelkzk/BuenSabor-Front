export interface Cliente {
    id: number;
    nombre: string;
    apellido: string;
    telefono: string;
    email: string;
    fechaAlta: Date;
    fechaModificacion: Date;
    fechaBaja: Date
}
export default Cliente;