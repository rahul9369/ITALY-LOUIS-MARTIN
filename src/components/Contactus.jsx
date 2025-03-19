const ContactUs = () => {
  return (
    <div className="py-10 px-6 bg-white">
      <h2 className="text-2xl font-bold text-center">Contact Us</h2>
      <form className="mt-6 max-w-lg mx-auto">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 w-full border rounded p-2 focus:outline-none focus:ring focus:border-green-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 w-full border rounded p-2 focus:outline-none focus:ring focus:border-green-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="mt-1 w-full border rounded p-2 focus:outline-none focus:ring focus:border-green-500"></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
