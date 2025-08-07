import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

import Button from "./Button";

function Navigation() {
  return (
    <div className="flex items-center gap-8">
      <nav className="z-10 text-base sm:text-xl p-4 relative">
        <ul className="sm:flex sm:gap-16 gap-8 items-center">
          <li>
            <Link
              href="#"
              className="flex items-center gap-4 text-white hover:text-fuchsia-500 transition-colors duration-300"
            >
              <FaGithub size={24} />
              <span>Github</span>
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="flex items-center gap-4 text-white hover:text-fuchsia-500 transition-colors duration-300"
            >
              <FaTwitter size={24} />
              <span>X</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center gap-4 text-white hover:text-fuchsia-500 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
              <span>Linkedln</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center gap-4 text-white hover:text-fuchsia-500 transition-colors duration-300"
            >
              <FaEnvelope size={24} />
              <span>Email</span>
            </Link>
          </li>
        </ul>
      </nav>
      <Button />
    </div>
  );
}

export default Navigation;
