import {faInstagram, faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full justify-center px-5 py-4 shadow-md bg-[#131842] text-white items-center">
      <h2 className="text-base font-semibold">Contact</h2>
      <div className="flex flex-row gap-5 py-4">
        <a href="#" onClick={scrollToTop} className="hover:text-gray-300"></a>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
        </a>
        <a href="mailto:youremail@example.com" className="hover:text-gray-300">
          <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
        </a>
      </div>
      <p className="text-center mt-1 text-sm">© 2024 Tegar Wibowo.</p>
    </div>
  );
};

export default Footer;
