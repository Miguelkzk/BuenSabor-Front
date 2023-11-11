import { useEffect, useState } from "react"
import { Producto } from "../../types/Producto"
import { ProductoService } from "../../services/ProductService";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function TablaProductos() {

    //inicializo un producto vacio, para evitar el undefined
    const initializeNewProduct = (): Producto => {
        return {
            id: 0,
            denominacion: "",
            descripcion: "",
            tiempoEstimadoCocina: 0,
            precioVenta: 0,
            costo: 0,
            urlImagen: "",
            fechaAlta: new Date(),
            fechaModificacion: new Date(),
            fechaBaja: new Date()

        }
    }
    // recibe los datos de la api
    const [productos, setProductos] = useState<Producto[]>([]);
    useEffect(() => {
        //traigo los componentes
        const fetchProductos = async () => {
            const productos = await
                ProductoService.getProductos();
            setProductos(productos);

        }
        fetchProductos();

    }, []);

    console.log(JSON.stringify(productos, null, 2));



    return (
        <>
            <div className="col-sm-12 col-md-auto d-flex justify-content-center align-items-center col-auto">
                {productos.map(producto => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={producto.urlImagen} />
                        <Card.Body>
                            <Card.Title>{producto.denominacion}</Card.Title>
                            <Card.Text>
                                {producto.descripcion}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))}

            </div>
        </>
    )
}
export default TablaProductos;