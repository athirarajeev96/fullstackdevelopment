import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom';
import ApiRoutes from '../utils/ApiRoutes';
import axios from 'axios';
import { BASE_URL } from '../utils/Constants';
import useLogout from '../hooks/useLogout';

const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundImage: "url('https://img.freepik.com/free-vector/realistic-style-technology-particle-background_23-2148426704.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727654400&semt=ais_hybrid')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    backgroundText: {
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '4rem',
        fontWeight: 'bold',
        color: 'white',
        opacity: 0.8,
        zIndex: 0,
    },
    formContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '24rem',
        zIndex: 1,
        position: 'relative',
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1.5rem',
        textAlign: 'center',
        color: '#1f2937',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    input: {
        width: '100%',
        padding: '0.5rem 0.75rem',
        border: '1px solid #d1d5db',
        borderRadius: '0.375rem',
        outline: 'none',
    },
    button: {
        width: '100%',
        backgroundColor: '#3b82f6',
        color: 'white',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '0.375rem',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
    },
    toggleButton: {
        width: '100%',
        marginTop: '1rem',
        color: '#3b82f6',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
    }
};

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const logout = useLogout(); // Using the custom logout hook

    const onLoginSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const login_payload = {
                email,
                password
            };

            const success = await axios.post(BASE_URL + ApiRoutes.LOGIN.path, login_payload);
            if (success) {
                toast.success('Logged in successfully');
                navigate('/home');
            } else {
                toast.error('Login failed. Please check your credentials and try again.');
            }
        } catch (error) {
            console.error("error: ", error);
            toast.error('An error occurred during login. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            {/* Background FitFlex Text */}
            <div style={styles.backgroundText}>FitFlex</div>

            <div style={styles.formContainer}>
                <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

                {/* Form Title */}
                <h1 style={styles.title}>Login</h1>

                <form onSubmit={onLoginSubmit} style={styles.form}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        style={styles.input}
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        style={styles.input}
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        style={{ ...styles.button, opacity: isLoading ? 0.5 : 1 }}
                    >
                        {isLoading ? 'Processing...' : 'Login'}
                    </button>
                </form>
                <button
                    onClick={() => navigate('/register')}
                    disabled={isLoading}
                    style={styles.toggleButton}
                >
                    Need an account? Register
                </button>
                {/* Example of Logout Button */}
                {/* <button
                    onClick={logout}
                    disabled={isLoading}
                    style={styles.toggleButton}
                >
                    Logout
                </button> */}
            </div>
        </div>
    );
};

export default LoginPage;
