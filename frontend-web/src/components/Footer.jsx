import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png"; // adjust the path based on your folder structure
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white font-manrope border-t border-gray-200">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-700">
        {/* Logo & Address */}
        <div>
          <img
            src={logo}
            alt="The Cafert Logo"
            className="w-40 mb-4"
          />
          <p className="mt-2 text-sm leading-relaxed">
            Riverside Building, County Hall, <br />
            London SE1 7PB, UK
          </p>
          <p className="mt-6 text-xs text-gray-500">
            Merkulove © Cafert Template All Rights Reserved 2025
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Info</h2>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#895C40]" />
              +1 (800) 234-65-78
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#895C40]" />
              +1 (800) 234-65-78
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-[#895C40]" />
              cafert@example.com
            </p>
          </div>
        </div>

        {/* Opening Hours */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Opening Hours</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-medium">Mon – Fri</span> from 8am to 9pm
            </li>
            <li>
              <span className="font-medium">Saturday</span> from 9am to 4pm
            </li>
            <li>
              <span className="font-medium">Sunday</span> from 9am to 4pm
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Our Activity</h2>
          <p className="text-sm mb-4">We are in social networks</p>
          <div className="flex gap-4 text-[#895C40]">

              <a href="#" className="hover:text-gray-900"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-gray-900"><FaLinkedinIn size={20} /></a>
            <a href="#" className="hover:text-gray-900"><FaFacebookF size={20} /></a>
          
          </div>
        </div>
      </div>
    </footer>
  );
}
