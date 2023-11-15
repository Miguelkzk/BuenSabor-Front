import React, { useState } from 'react';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import HomePage from './HomePage';
import * as Yup from "yup";
import { useFormik } from "formik";


interface LoginRequest {
    username: string;
    password: string;
}

const validationSchema = Yup.object().shape({
    username: Yup.string().required('El usuario es requerido'),
    password: Yup.string().required('La contraseña es requerida'),
});

const Login: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: { username: '', password: '' },
        validationSchema: validationSchema,
        onSubmit: (values: LoginRequest) => handleLogin(values),
    });

    async function handleLogin(loginData: LoginRequest) {
        try {
            const response = await axios.post('http://localhost:8088/auth/login', loginData);

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('role', response.data.role);
            console.log('Respuesta del backend:', response.data);
            window.localStorage.setItem('isLoggedIn', 'true');
            navigate('/');
        } catch (error) {
            // Manejar errores de red u otros errores
            setError('Error de red o servidor');
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId="formUsername">
                    <Form.Control
                        name='username'
                        type='text'
                        value={formik.values.username || ''}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={Boolean(formik.errors.username && formik.touched.username)}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.username}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Control
                        name="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={Boolean(formik.errors.password && formik.touched.password)}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.password}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit">Iniciar sesión</Button>
            </Form>
        </div>
    );
};

export default Login;








/*

<div>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
*/