// components/Contact.jsx
import React from "react";
import { FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">CONTACT</h2>
      <div className="flex items-center space-x-4">
        <FaEnvelope className="text-xl" />
        <span>Email</span>
      </div>
      <div className="flex space-x-4 text-xl">
        <FaFacebook className="hover:text-blue-600 cursor-pointer" />
        <FaTwitter className="hover:text-blue-400 cursor-pointer" />
        <FaInstagram className="hover:text-pink-500 cursor-pointer" />
      </div>
    </section>
  );
}

export default Contact;
