import React, { useRef } from "react";
import { FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_adhbg8h',     // Replace with your EmailJS Service ID
      'template_lyriv7t',    // Replace with your EmailJS Template ID
      formRef.current,
      'xRTcyyDjhtsaAyNjT'      // Replace with your EmailJS Public Key
    ).then(
      (result) => {
        alert('Message sent successfully!');
        formRef.current.reset();
      },
      (error) => {
        alert('Something went wrong. Please try again.');
        console.error(error);
      }
    );
  };

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold">CONTACT</h2>

     

      {/* Contact Form */}
      <form ref={formRef} onSubmit={sendEmail} className="space-y-4 w-full max-w-xl">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">
            Service Type
          </label>
          <select
            id="service"
            name="service"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white text-gray-800"
            required
          >
            <option value="" disabled>Select a service</option>
            <option value="dj">DJ</option>
            <option value="photography">Photography</option>
            <option value="live-band">Live Band Events</option>
            <option value="rap-events">Rap Events</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-2 border-2 border-black rounded-md text-black hover:bg-black hover:text-white transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
