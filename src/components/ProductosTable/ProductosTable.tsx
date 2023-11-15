import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import { ModalType } from "../../types/modal-type/ModalType";
import Loader from "../loader/Loader";
import { Table } from "react-bootstrap";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import { Producto } from "../../types/Producto";
import { ProductoService } from "../../services/ProductService";
import ProductoModal from "../ProductoModal/ProductoModal";
import NavBar from "../NavBar/NavBar";

const ProductosTable = () => {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshData, setRefreshData] = useState(false);
    useEffect(() => {
        const fetchProductos = async () => {
            const productos = await ProductoService.getProductos();
            setProductos(productos);
            setIsLoading(false);
        };
        fetchProductos();
    }, [refreshData]);
    console.log(JSON.stringify(productos, null, 2));
    const initializeNewProducto = (): Producto => {
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
        };
    };
    const [producto, setProducto] = useState<Producto>(initializeNewProducto);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
    const [title, setTitle] = useState("");
    const handleClick = (newTitle: string, pro: Producto, modal: ModalType) => {
        setTitle(newTitle);
        setModalType(modal)
        setProducto(pro);
        setShowModal(true);
    };
    return (
        <>
            <NavBar />
            <Button variant="dark" style={{ float: 'right', margin: "1rem" }} onClick={() => handleClick("Nuevo producto", initializeNewProducto(), ModalType.CREATE)}>
                Añadir Producto
            </Button>
            {isLoading ? <Loader /> : (
                <Table hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>denominacion</th>
                            <th>descripcion</th>
                            <th>tiempoEstimadoCocina</th>
                            <th>precioVenta</th>
                            <th>costo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map(producto => (
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.denominacion}</td>
                                <td>{producto.descripcion}</td>
                                <td>{producto.tiempoEstimadoCocina}</td>
                                <td>{producto.precioVenta}</td>
                                <td>{producto.costo}</td>
                                <td><EditButton onClick={() => handleClick("Editar producto", producto, ModalType.UPDATE)} /></td>
                                <td><DeleteButton onClick={() => handleClick("Eliminar cliente", producto, ModalType.DELETE)} /></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            {showModal && (
                <ProductoModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    title={title}
                    modalType={modalType}
                    pro={producto}
                    refreshData={setRefreshData}
                />
            )}
        </>
    )
}
export default ProductosTable;