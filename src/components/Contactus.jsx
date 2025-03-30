import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Footer from "./Footer";
import Contactus from "../assets/contactus.jpg";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail, MdPhone } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_xxx123", // 🔹 Replace with your EmailJS Service ID
        "template_abc456", // 🔹 Replace with your EmailJS Template ID
        formData,
        "your_user_id_789xyz" // 🔹 Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", phone: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.error("Error:", error);
          setLoading(false);
        }
      );
  };

  return (
    <motion.div
      key="contact-page"
      className="bg-gray-100 min-h-screen"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}>
      {/* Header Image */}
      <motion.img
        src={Contactus}
        alt="Contact Us"
        className="w-full h-[300px] object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      />

      <div className="w-[90%] mx-auto py-8">
        {/* Contact Info Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}>
          {/* Phone */}
          <motion.div
            className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}>
            <div className="bg-orange-500 text-white p-4 rounded-full text-3xl">
              <MdPhone />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+39 32426 15626</p>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}>
            <div className="bg-orange-500 text-white p-4 rounded-full text-3xl">
              <MdOutlineEmail />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">contact@louismartinaudio.it</p>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div
            className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}>
            <div className="bg-orange-500 text-white p-4 rounded-full text-3xl">
              <CiLocationOn />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600">
                Giambrocono & C.S.P.A, Via Rosolino Pilo 19/B, 20129 Milano,
                Italy.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.h2
          className="text-4xl font-bold  mb-6 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}>
          Get in Touch
        </motion.h2>

        <motion.form
          className="bg-white  shadow-lg rounded-lg p-6 w-full mx-auto"
          onSubmit={sendEmail}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="p-3 border rounded-md w-full focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="p-3 border rounded-md w-full focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 border rounded-md w-full mb-4 focus:ring-2 focus:ring-orange-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message content"
            className="p-3 border rounded-md w-full mb-4 h-32 focus:ring-2 focus:ring-orange-500"
            required></textarea>

          <motion.button
            type="submit"
            className="w-full flex items-center justify-center bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 transition-all"
            whileHover={{ scale: 1.01 }}
            disabled={loading}>
            {loading ? "Sending..." : "Submit Now"}
            <FaPaperPlane className="ml-2" />
          </motion.button>
        </motion.form>
      </div>

      <Footer />
    </motion.div>
  );
};

export default ContactUs;
