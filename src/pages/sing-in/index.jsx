


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Natification from '../utils/notifixation';
import { TextField } from '@mui/material';
import { Commet } from 'react-loading-indicators';
// import { FourSquare } from 'react-loading-indicators';

const Index = () => {
    const [form, setForm] = useState({});
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(10);
    const [isLocked, setIsLocked] = useState(false);
    const [isLoading, setIsLoading] = useState(true); 
    const navigate = useNavigate();

    useEffect(() => {
        let timer;
        if (isLocked) {
            timer = setInterval(() => {
                setTime(prev => {
                    if (prev <= 1) {
                        setIsLocked(false);
                        setCount(0);
                        return 10;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [isLocked]);

    useEffect(() => {
        if (count >= 3) {
            setIsLocked(true);
        }
    }, [count]);

    useEffect(() => {
      
        const loadTimer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(loadTimer);
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); 
        setTimeout(() => {
            if (form.username === "admin") {
                Natification({ title: "Success", type: "success" });
                navigate("/admin-layout");
            } else if (form.username === "student") {
                navigate("/student-layout");
            } else {
                Natification({ title: "xatolik mavjud,", type: "error" });
                setCount(prev => prev + 1);
            }
            setIsLoading(false); 
        }, 1000);
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <ToastContainer />
            {isLoading ? (
                <div className="loader-container">
                    <Commet color="#32cd32" size='large' text="" />
                </div>
            ) : (
                <div className="card shadow-lg border-0" style={{ maxWidth: '400px', width: '100%' }}>
                    <div className="card-body p-4">
                        <h4 className="card-title text-center mb-4">Login</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <TextField
                                    disabled={isLocked || isLoading}
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    onChange={handleChange}
                                    label="user"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <TextField
                                    disabled={isLocked || isLoading}
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    onChange={handleChange}
                                    label="password"
                                />
                            </div>
                            <button disabled={isLocked || isLoading} type="submit" className="btn btn-primary w-100">
                                {isLoading ? (
                                    <Commet color="#32cd32" size='large' text="" />
                                ) : (
                                    'Login'
                                )}
                            </button>
                        </form>
                    </div>
                    <div className='card-footer d-flex justify-between'>
                        <h3></h3>
                        <h4 className='text-red-600 d-flex justify-between'>
                            {isLocked && `${time} soniyadan so'mg yana qayta urinib ko'ring`}
                        </h4>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Index;
