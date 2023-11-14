import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login: React.FC = () => {


  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();

  //     try {
  //       const response = await axios.post('http://localhost:8088/api/users/login', {
  //         email,
  //         password,
  //       });

  //       // You can set a JWT token in localStorage here for later use.
  //       localStorage.setItem('user', JSON.stringify(response.data));
  //       window.location.href = '/dashboard'; // Redirect to dashboard
  //     } catch (err) {
  //       setError('Error logging in. Please check your credentials.');
  //     }
  //  };

  function onLogIn() {
    window.localStorage.setItem('isLoggedIn', 'true');
    navigate('/');
  }


  return (
    <>
      <div style={{ background: 'lightgray', width: '50vw', height: '100vh', borderRadius: '0px 112px 0px 0px', filter: 'blur(0px)' }}>
        <div>
          <h1>El Buen Sabor</h1>
          <h3>Iniciar Sesión</h3>
        </div>
        {/* <form onSubmit={handleSubmit}>*/}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20%' }}>
          <form>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3 mt-10"
              style={{ width: '30vw' }}
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>

          </form>
          <div>
            <Button variant="warning" onClick={onLogIn}>Confirmar</Button>
          </div>
          <div>
            <p>¿No tenes una cuenta?</p><p>Crear</p>
          </div>
          <div> - OR - </div>
          <div>
            <Button>Ingresar con google</Button>
          </div>
        </div>
        {error && <p>{error}</p>}
      </div>

    </>
  );
};

export default Login;