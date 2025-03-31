import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

      {/* Contact Information */}
      <div className="mb-6">
        <p>
          <strong>Email:</strong> contact@newsportal.com
        </p>
        <p>
          <strong>Phone:</strong> +1 234 567 890
        </p>
        <p>
          <strong>Address:</strong> 123 News Street, City, Country
        </p>
      </div>

      {/* Contact Form */}
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border border-gray-300 rounded-md h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
