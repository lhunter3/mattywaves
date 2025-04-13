import React from "react";
import { FaSpotify, FaInstagram, FaTwitter, FaEnvelope, FaTiktok } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-black text-white text-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-6 px-4 text-center md:text-left">

        {/* Branding */}
        <p className="text-gray-400 text-xs tracking-wide">
          &copy; {new Date().getFullYear()} MattyWaves — All rights reserved.
        </p>

        {/* Social / Links */}
        <div className="flex items-center space-x-4 text-lg">
          <a
            href="mailto:mattyla13@gmail.com"
            className="hover:text-red-500 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://open.spotify.com/artist/6ZCJhABXZIjyTj77X9m0Kj?si=1880e8643ecd4142"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
            aria-label="Spotify"
          >
            <FaSpotify />
          </a>
          <a
            href="https://www.instagram.com/matty_waves/#"
            className="hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@matty_la"
            className="hover:text-blue-400 transition"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
