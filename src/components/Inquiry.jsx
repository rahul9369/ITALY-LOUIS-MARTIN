import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_m8zrw7w", "template_xjwcqpr", form.current, {
        publicKey: "_K0SBFj7SnABGDwyo",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("❌ Failed to send message.");
        }
      );
  };

  return (
    <div className="w-full mx-auto p-6 mt-10 rounded-lg ">
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            required
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Write your message"></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-md  transition duration-200">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
