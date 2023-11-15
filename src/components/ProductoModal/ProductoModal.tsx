import { toast } from "react-toastify";
import { ModalType } from "../../types/modal-type/ModalType";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Form, Modal } from "react-bootstrap";
import { Producto } from "../../types/Producto";
import { ProductoService } from "../../services/ProductService";

type ProductoModalProps = {
    show: boolean;
    onHide: () => void;
    title: string;
    modalType: ModalType;
    pro: Producto;
    refreshData: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductoModal = ({ show, onHide, title, modalType, pro, refreshData }: ProductoModalProps) => {
    const handleSaveUpdate = async (pr: Producto) => {
        try {
            const isNew = pr.id === 0;
            if (isNew) {
                await ProductoService.createProducto(pr);
            } else {
                await ProductoService.updateProducto(pr.id, pr);
            }
            toast.success(isNew ? "Nuevo producto añadido" : "Producto actualizado", { position: "top-center", });
            onHide();
            refreshData(prevState => !prevState);
        } catch (error) {
            console.error(error);
            toast.error('Se ha producido un error');
        }
    };
    const handleDelete = async () => {
        try {
            await ProductoService.deleteProducto(pro.id);
            toast.success("Producto eliminado correctamente", { position: "top-center", });
            onHide();
            refreshData(prevState => !prevState);
        } catch (error) {
            console.error(error);
            toast.error('Se ha producido un error');
        }
    };
    const validationSchema = () => {
        return Yup.object().shape({
            id: Yup.number().integer().min(0),
            denominacion: Yup.string().required('Por favor ingrese el denominacion'),
            descripcion: Yup.string().required('Por favor ingrese el descripcion'),
            tiempoEstimadoCocina: Yup.string().required('Por favor ingrese un tiempoEstimadoCocina'),
            precioVenta: Yup.string().required('Por favor ingrese el precioVenta'),
            costo: Yup.string().required('Por favor ingrese el costo'),
            urlImagen: Yup.string().required('Por favor ingrese el urlImagen'),
        });
    };
    const formik = useFormik({
        initialValues: pro,
        validationSchema: validationSchema(),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (obj: Producto) => handleSaveUpdate(obj),
    });
    return (
        <>
            {modalType === ModalType.DELETE ? (
                <>
                    <Modal show={show} onHide={onHide} centered backdrop="static">
                        <Modal.Header closeButton>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>¿Está seguro que desea eliminar este producto?<br />
                                <strong>{pro.denominacion}</strong>?</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="dark" onClick={onHide}>
                                Cancelar
                            </Button>
                            <Button variant="danger" onClick={handleDelete}>
                                Eliminar producto
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            ) : (
                <>
                    <Modal show={show} onHide={onHide} centered backdrop="static" className="modal-xl">
                        <Modal.Header closeButton>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={formik.handleSubmit}>
                                {/* Denominacion */}
                                <Form.Group controlId="formDenominacion">
                                    <Form.Label>denominacion</Form.Label>
                                    <Form.Control
                                        name="denominacion"
                                        type="string"
                                        value={formik.values.denominacion || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={Boolean(formik.errors.denominacion && formik.touched.denominacion)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.denominacion}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/* descripcion */}
                                <Form.Group controlId="formDescripcion">
                                    <Form.Label>descripcion</Form.Label>
                                    <Form.Control
                                        name="descripcion"
                                        type="string"
                                        value={formik.values.descripcion || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={Boolean(formik.errors.descripcion && formik.touched.descripcion)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.descripcion}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/* tiempoEstimadoCocina */}
                                <Form.Group controlId="formTiempoEstimadoCocina">
                                    <Form.Label>tiempoEstimadoCocina</Form.Label>
                                    <Form.Control
                                        name="tiempoEstimadoCocina"
                                        type="string"
                                        value={formik.values.tiempoEstimadoCocina || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={Boolean(formik.errors.tiempoEstimadoCocina && formik.touched.tiempoEstimadoCocina)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.tiempoEstimadoCocina}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/* precioVenta */}
                                <Form.Group controlId="formPrecioVenta">
                                    <Form.Label>precioVenta</Form.Label>
                                    <Form.Control
                                        name="precioVenta"
                                        type="string"
                                        value={formik.values.precioVenta || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={Boolean(formik.errors.precioVenta && formik.touched.precioVenta)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.precioVenta}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/* costo */}
                                <Form.Group controlId="formCosto">
                                    <Form.Label>costo</Form.Label>
                                    <Form.Control
                                        name="costo"
                                        type="string"
                                        value={formik.values.costo || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={Boolean(formik.errors.costo && formik.touched.costo)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.costo}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/* urlImagen */}
                                <Form.Group controlId="formUrlImagen">
                                    <Form.Label>urlImagen</Form.Label>
                                    <Form.Control
                                        name="urlImagen"
                                        type="string"
                                        value={formik.values.urlImagen || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={Boolean(formik.errors.urlImagen && formik.touched.urlImagen)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.urlImagen}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Modal.Footer className="mt-4">
                                    <Button variant="dark" onClick={onHide}>
                                        Cancelar
                                    </Button>
                                    <Button variant="warning" type="submit" disabled={!formik.isValid}>
                                        Guardar
                                    </Button>
                                </Modal.Footer>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </>
            )}
        </>
    )
}
export default ProductoModal;