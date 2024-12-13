import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 shadow-lg">
      <div className="flex items-center justify-between mx-auto px-10 py-2">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="/assets/logo-black-text.png"
              alt="Stellar Learn Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/nebulaacademy_ny/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-110 transition-transform hover:text-pink-600"
          >
            <FaInstagram size={24} />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/NebulaAcademyNY/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:scale-110 transition-transform hover:text-blue-600"
          >
            <FaFacebook size={24} />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/channel/UC_6eltwYGkPKsam_s9V6Yhg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:scale-110 transition-transform hover:text-red-600"
          >
            <FaYoutube size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/nebulaacademy/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 transition-transform hover:text-blue-700"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
