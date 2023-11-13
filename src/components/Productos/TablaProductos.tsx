import { useEffect, useState } from "react"
import { Producto } from "../../types/Producto"
import { ProductoService } from "../../services/ProductService";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import VerProducto from "./VerProducto";

interface PropsProducto {
    prodId: number;
}
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

    const [selectedProduct, setSelectedProduct] = useState<number | null>(null); //estado para guardar el id del producto
    const verMas = (productID: number) => {
        setSelectedProduct(productID);
    }
    const handleBack = () => {
        setSelectedProduct(null);
    };


    if (selectedProduct !== null) {
        // Busca el producto seleccionado en el array de productos
        const selectedProd = productos.find(prod => prod.id === selectedProduct);

        if (selectedProd) {
            return <VerProducto prod={selectedProd} onBack={handleBack} />;
        }
    }


    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="row" style={{ marginTop: '3rem', display: "flex", justifyContent: "center" }} >
                {productos.map((producto) => (
                    <div className="col-xxl-2 col-xl-3 col-md-4 col-sm-5 col-9" style={{ marginBottom: '2rem', display: "flex", justifyContent: "center" }}>
                        <Card style={{ width: '17rem', height: '25rem' }}>
                            <Card.Img variant="center" src={producto.urlImagen} style={{ height: '250px', maxWidth: '250px', margin: '0.5rem' }} />
                            <Card.Body>
                                <div style={{ height: '4rem' }}>
                                    <Card.Title style={{ textAlign: 'center' }}>{producto.denominacion}</Card.Title>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Button variant="primary" onClick={() => verMas(producto.id)}>Ver más</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

    );
};


export default TablaProductos;