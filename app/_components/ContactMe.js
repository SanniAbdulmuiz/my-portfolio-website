import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Button from "./Button";

function ContactMe() {
  return (
    <div className="text-center space-y-6">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-blue-100 tracking-tight">
        Contact Me
      </h2>

      {/* Subheading */}
      <p className="text-lg text-blue-200 max-w-md mx-auto">
        Have an awesome project idea? Let’s connect and bring it to life.
      </p>

      {/* Social Links */}
      <div className="flex flex-col items-center gap-12">
        <nav className="text-lg">
          <ul className="flex flex-col gap-8 items-center">
            <li>
              <Link
                href="https://github.com/SanniAbdulmuiz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white hover:text-fuchsia-500 transition-colors duration-300"
              >
                <FaGithub size={26} />
                <span>github.com/SanniAbdulmuiz</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com/Abdulmuiz_sanni"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white hover:text-fuchsia-500 transition-colors duration-300"
              >
                <FaTwitter size={26} />
                <span>x.com/Abdulmuiz_sanni</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://linkedin.com/in/sanni-abdulmuiz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white hover:text-fuchsia-500 transition-colors duration-300"
              >
                <FaLinkedin size={26} />
                <span>linkedin.com/in/sanni-abdulmuiz</span>
              </Link>
            </li>
            <li>
              <Link
                href="mailto:ayomideabdulmuiz565@gmail.com"
                className="flex items-center gap-4 text-white hover:text-fuchsia-500 transition-colors duration-300"
              >
                <FaEnvelope size={26} />
                <span>ayomideabdulmuiz565@gmail.com</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Call-to-action Button */}
        <Button />
      </div>
    </div>
  );
}

export default ContactMe;
