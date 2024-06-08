import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email) {
            setMessage('Email is required');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage('Invalid email format');
            return;
        }

        try {
            const response = await axios.post('http://34.225.132.160:8002/api', { email });
            if (response.status === 200) {
                setMessage('Form Submitted');
            }
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setMessage('Invalid email ending with @ez.works');
            } else {
                setMessage('An error occurred');
            }
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Contact me</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default FormComponent;
