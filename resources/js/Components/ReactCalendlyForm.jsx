import React, {useState} from 'react';
import axios from 'axios';
import {InlineWidget} from 'react-calendly';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [showCalendly, setShowCalendly] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.name.trim()) errors.name = 'Name is required';
        if (!formData.email.trim()) errors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
        if (!formData.message.trim()) errors.message = 'Message is required';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            try {
                const response = await axios.post('/api/submit-form', formData);
                if (response.data.success) {
                    setShowCalendly(true);
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('An error occurred. Please try again later.');
            }
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && <span id="name-error" className="text-red-500">{errors.name}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && <span id="email-error" className="text-red-500">{errors.email}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-2">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && <span id="message-error" className="text-red-500">{errors.message}</span>}
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
            </form>
            {showCalendly && (
                <div className="mt-8">
                    <InlineWidget url="https://calendly.com/ajavadi202"/>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
