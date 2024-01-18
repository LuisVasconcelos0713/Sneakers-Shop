import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export default function Footer1(props) {
  return (
    <div>
      <div className="prefooter-container">
        <div>
          <a href="https://www.instagram.com/gustavslow" className="">
            <FaInstagram className="Social-button" />
          </a>
          <a href="https://twitter.com/gustavslow" className="">
            <RiTwitterXLine className="Social-button" />
          </a>
          <a
            href="https://www.linkedin.com/in/luis-gustavo-vasconcelos-128552239/"
            className=""
          >
            <FaLinkedin className="Social-button" />
          </a>
          <a href="https://github.com/LuisVasconcelos0713" className="">
            <FaGithub className="Social-button" />
          </a>
        </div>
      </div>
      <div className="footer-container">
        <p className="footer-container-text">
          &copy; 2024 Copyright | Author: Luís G. Vasconcelos DS.
        </p>
      </div>
    </div>
  );
}
