import React, { useState } from "react";
import img from "../assets/Distributor/us.jpg";
import carausalimg2 from "../assets/carausalimg2.jpg";
import Footer from "./Footer";
import Aboutus from "../assets/AboutUs.jpg";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your request has been submitted. We will respond within 12 hours.");
    setFormData({ name: "", phone: "", email: "", company: "", message: "" });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <img
        src={Aboutus}
        alt="About Us"
        loading="lazy"
        className="w-full object-cover h-[300px]"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 my-6 gap-6 w-[90%] mx-auto">
        <div className="">
          <p className="text-justify text-sm leading-relaxed">
            <span className="font-bold">Louis Martin Audio</span> represents an
            exemplary journey of innovation and resilience in the professional
            audio industry. Established in 2008 at Giambrocono & C.S.P.A,
            located at Via Rosolino Pilo 19/B, 20129 Milano, Italy, the company
            began its operations in a modest one-room workshop in Florence,
            specializing in handcrafted guitar amplifiers. This modest beginning
            reflected the entrepreneurial vision and creativity of its founders,
            who aspired to redefine standards in the audio domain.
            {/* Instead of <br> with className, use div for spacing */}
            <div className="my-1"></div>
            Distinguished by its adaptability and commitment to technological
            advancements, Louis Martin Audio consistently embraced innovation to
            meet the evolving demands of the industry. By expanding its product
            portfolio and pioneering new technologies, the company established
            itself as a leader in professional audio solutions. Today, Louis
            Martin Audio is celebrated globally for its cutting-edge technology
            in power amplifiers, loudspeakers, and advanced networked audio
            solutions.
            <div className="my-1"></div>
            The company has redefined excellence in sound quality and
            performance, setting benchmarks for the industry. Its journey, from
            humble origins to global prominence, exemplifies the values of
            perseverance, visionary leadership, and a relentless pursuit of
            excellence.
          </p>
        </div>

        <div>
          <img
            src={img}
            alt="Company"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* <div className="w-[90%] bg-white shadow-lg rounded-lg p-8 mx-auto my-10">
        <h2 className="text-lg font-semibold text-orange-500 mb-4">
          Get the latest price? We'll respond as soon as possible (within 12
          hours)
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-3 border rounded-md w-full"
              required
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="p-3 border rounded-md w-full"
              required
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="p-3 border rounded-md w-full mb-4 h-32"
            required></textarea>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600">
            Submit
          </button>
        </form>
      </div> */}
      <Footer />
    </div>
  );
};

export default About;
