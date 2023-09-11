"use client";

import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        apn: '',
        state: '',
        county: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/submitForm', formData);
            console.log('Form submitted:', response.data);
            // Reset form fields after successful submission
            setFormData({   name: '', phone: '', email: '', apn: '', state: '', county: '', });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 text-gray-500 ">

                <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="name" className="block text-white font-medium">Name</label>
                    <input
                        type="text" id="name" name="name"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={formData.name} onChange={handleChange}
                    />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="phone" className="block text-white font-medium">Phone</label>
                    <input
                        type="text" id="phone" name="phone"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={formData.phone} onChange={handleChange}
                    />
                </div>
                <div className="col-span-2">
                    <label htmlFor="email" className="block text-white font-medium">Email</label>
                    <input
                        type="text" id="email" name="email"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={formData.email} onChange={handleChange}
                    />
                </div>
                <div className="col-span-2">
                    <label htmlFor="apn" className="block text-white font-medium">Property Address or APN</label>
                    <input
                        type="text" id="apn" name="apn"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={formData.apn} onChange={handleChange}
                    />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="state" className="block text-white font-medium">State</label>
                    <input
                        type="text" id="state" name="state"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={formData.state} onChange={handleChange}
                    />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="county" className="block text-white font-medium">County</label>
                    <input
                        type="text" id="county" name="county"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={formData.county} onChange={handleChange}
                    />
                </div>


                <div className="col-span-2">
                    <button type="submit" className="bg-green-500 text-white p-4 rounded-3xl">Submit</button>
                </div>
            </div>

        </form>
    );
};

export default ContactForm;

