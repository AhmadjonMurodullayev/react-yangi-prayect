import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Index = () => {
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.username === "admin") {
            navigate("/admin-layout");
        } else if (form.username === "student") {
            navigate("/student-layout");
        } else {
            toast.error('Invalid username.'); 
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <ToastContainer />
            <div className="card shadow-lg border-0" style={{ maxWidth: '400px', width: '100%' }}>
                <div className="card-body p-4">
                    <h4 className="card-title text-center mb-4">Login</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                onChange={handleChange}
                                placeholder="Enter username"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                onChange={handleChange}
                                placeholder="Enter password"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Index;
