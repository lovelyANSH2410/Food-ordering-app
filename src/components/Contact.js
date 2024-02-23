import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    // You can implement your logic to handle form submission here, like sending the data to a server or displaying it in console.
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <div class="relative group">
        <div class="w-64 h-40 bg-gray-200 rounded-lg overflow-hidden transition-transform duration-300 transform group-hover:scale-105"></div>

        <div class="absolute top-0 left-0 bg-green-500 text-white px-2 py-1 rounded-tr-lg rounded-bl-lg transform translate-x-2 -translate-y-2 transition-transform duration-300 group-hover:opacity-100">
          Recommended
        </div>
      </div>
    </div>
  );
};

export default Contact;
