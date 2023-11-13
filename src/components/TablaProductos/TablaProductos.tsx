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
        <div className="d-flex justify-content-center align-items-center">
            <div className="row" style={{ marginTop: '3rem', display: "flex", justifyContent: "center" }} >
                {productos.map((producto, index) => (
                    <div key={index} className="col-xxl-2 col-xl-3 col-md-4 col-sm-5 col-9" style={{ marginBottom: '2rem', display: "flex", justifyContent: "center" }}>
                        <Card style={{ width: '17rem', height: '26rem' }}>
                            <Card.Img variant="top" src={producto.urlImagen} />
                            <Card.Body>
                                <Card.Title>{producto.denominacion}</Card.Title>
                                <Card.Text>{producto.descripcion}</Card.Text>
                                <Button variant="primary">Ver más</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

    );
};


export default TablaProductos;