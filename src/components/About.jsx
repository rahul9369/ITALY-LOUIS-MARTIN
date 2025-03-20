import React, { useState } from "react";
import img from "../assets/Distributor/us.jpg";
import carausalimg2 from "../assets/carausalimg2.jpg";
import Footer from "./Footer";

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
      <img src={carausalimg2} alt="About Us" className="w-full object-cover" />
      <h2 className="text-5xl p-5 bg-yellow-600 my-4 font-bold text-center">
        About Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 my-6 gap-6 w-[90%] mx-auto">
        <div>
          <p className="text-center m-5 text-xl">
            Company History As any pro-audio veteran will tell you, many of the
            industry's major players began life as small "mom and pop"
            operations, run out of garages, basements, and spare bedrooms.
            Steeped in the anti-corporate ethos of the '60s and '70s, these were
            businesses born of the visions of young entrepreneurs typically
            short on experience but rich in dreams, drive, and a desire to do
            things differently. As the industry and its technology have evolved,
            many of those early ventures have fallen by the wayside. Some of
            them imploded, fueled by naive management, personality crises, or
            simply a failure to evolve. Some grew so large and unwieldy that
            their only hope for survival was to be bought out by the corporate
            culture they'd long resisted. Over the years, only a handful have
            managed to not simply exist, but flourish. The story of Louis Martin
            Audio is one of professional audio’s most inspiring tales. From its
            humble beginnings crafting handmade guitar amps from a one-room shop
            in Florence, Louis Martin has grown to become the industry's
            undisputed leader in power amps, loudspeakers, and complete
            networked audio solutions.
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

      <div className="w-[90%] bg-white shadow-lg rounded-lg p-8 mx-auto my-10">
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
      </div>
      <Footer />
    </div>
  );
};

export default About;
