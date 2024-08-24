import React, { useState } from 'react';
import './App.css';

function basicForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a text string with the form data
    const textData = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

    // Create a Blob with the text data
    const blob = new Blob([textData], { type: 'text/plain' });

    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'form_data.txt';
    link.click();

    // Convert form data to a JSON string
    const formDataString = JSON.stringify(formData);

    // Save to localStorage
    localStorage.setItem('formData', formDataString);

    console.log('Form data saved to localStorage');

    // Clean up
    URL.revokeObjectURL(link.href);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// export default basicForm;
