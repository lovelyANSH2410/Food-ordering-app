import React, { useState } from "react";

const Contact = () => {
  return (
    <div className="text-center w-6/12 mx-auto">
      <div className="text-3xl m-4 p-8 font-bold   bg-gray-100 rounded-xl">
        Contact us
      </div>

      <div className="bg-gray-100 m-6 rounded-lg">
        <p className=" p-4 text-2xl">
          We'd love to hear from you!
        </p>
        <div className="contact-info p-6">
          <h2 className="font-bold">Reach Out</h2>
          <p>
            If you have any questions, feedback, or suggestions, feel free to
            get in touch with us.
          </p>
          <ul>
            <li>Email: support@lovefoods.com</li>
            <li>Phone: +1 (123) 456-7890</li>
          </ul>
        </div>
      </div>
      
      <div className="contact-form bg-gray-100 rounded-md m-6 p-4">
        <h2 className="font-bold">Send us a Message</h2>
        <form className="flex flex-col justify-between">
          <div className="form-group m-2">
            <label htmlFor="name">Name:</label>
            <input
              className="w-36 m-2 p-1 border border-black"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group m-2">
            <label htmlFor="email">Email:</label>
            <input
              className="w-36 m-2 p-1 border border-black"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group m-2">
            <label htmlFor="message">Message:</label>
            <input
              className="w-36 m-2 p-1 border border-black"
              type="message"
              id="message"
              name="message"
              required
            />
          </div>
          <button
            className="bg-gray-500 shadow-md rounded-lg w-24 p-2 mx-auto text-white"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
