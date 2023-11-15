import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


interface RegisterRequest {
  username: string;
  password: string;
  apellido: string;
  nombre: string;
  telefono: string;
  email: string;
}

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [apellido, setApellido] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const registerData: RegisterRequest = {
        username,
        password,
        apellido,
        nombre,
        telefono,
        email,
      };

      const response = await axios.post('http://localhost:8088/auth/register', registerData);
      
      console.log('Respuesta del backend:', response.data);

      // Puedes redirigir al usuario a la página de inicio de sesión después del registro
      navigate('/login');
    } catch (error) {
      // Manejar errores de red u otros errores
      setError('Error de red o servidor');
    }
  };

  return (
    <>
  
    <div className='d-flex flex-column justify-content-center m-auto' style={{width:'75vw', gap:'5rem'}}>
    <div className='d-flex flex-column align-items-center gap-5 mt-5'>
        <h1>El Buen Sabor</h1>
        <h4>Registrarse</h4>
    </div>
    <Form className='d-flex flex-column m-auto' style={{width: '50vw'}}>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label> Usuario</Form.Label>
          <Form.Control type="text" placeholder="Nombre de Usuario" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col}>
        <Form.Label>Nombre</Form.Label>
        <Form.Control type='text' placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>Apellido</Form.Label>
        <Form.Control placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control className='overflow-hidden' type="number" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
      </Row>

    </Form>
    <div className='d-flex flex-column' style={{gap:'1rem'}}>

    <Button className='m-auto' variant="primary" type="submit" style={{width: '25vw'}} onClick={handleRegister}>Crear</Button>
    <Button className='m-auto' variant="danger" type="submit" style={{width: '25vw'}} onClick={() => navigate('/')}>Cancelar</Button>
    </div>

    <div className='gap-2 d-flex align-items-baseline justify-content-center'>
      <p>¿Ya tienes una cuenta?</p> <Button variant="link" onClick={() => navigate('/login')}>Entrar</Button>
      </div>
    </div>
    </>
  );
};

export default Register;
