import React, { useState } from "react";
import emailjs from "emailjs-com";
import Footer from "./Footer";
//import Us from "../assets/Distributor/us.jpg";
import Contactus from "../assets/contactus.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const emailData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email, // Sender's email
      message: formData.message,
    };

    emailjs
      .send(
        "service_xxx123", // Replace with your EmailJS Service ID
        "template_abc456", // Replace with your EmailJS Template ID
        emailData,
        "your_user_id_789xyz" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({ name: "", phone: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.error("Error:", error);
        }
      );
  };

  return (
    <div className=" bg-gray-100">
      <img src={Contactus} alt="img" className="w-full h-[300px]" />
      <div className="w-[90%] mx-auto py-5">
        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-5 gap-6 mb-10">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <span className="text-orange-500 text-3xl">📞</span>
            {/* <h2 className="text-lg font-bold mt-2">Contact phone</h2> */}
            <p className="text-gray-700">+39 3242615626</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <span className="text-orange-500 text-3xl">📧</span>
            {/* <h2 className="text-lg font-bold mt-2">Contact email</h2> */}
            <p className="text-gray-700">contact@louismartinaudio.it</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <span className="text-orange-500 text-3xl">📍</span>
            {/* <h2 className="text-lg font-bold mt-2">Contact address</h2> */}
            <p className="text-gray-700">
              Louis Martin Address:- Giambrocono & C.S.P.A Via Rosolino Pilo
              19/B, 20129 Milano Italy.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <form
          className="bg-white shadow-lg rounded-lg p-6"
          onSubmit={sendEmail}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="p-3 border rounded-md w-full"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="p-3 border rounded-md w-full"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 border rounded-md w-full mb-4"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message content"
            className="p-3 border rounded-md w-full mb-4 h-32"
            required></textarea>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600">
            Submit now
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
