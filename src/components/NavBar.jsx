import logo from "../assets/mountains.png";

import {
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
  FaTelegramPlane,
} from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/my-portfolio/">
          <img className="mx-2 w-10" src={logo} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/bogdan-ilchenko-70286525/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/bogdanilchenko1987" target="_blank">
          <FaGithub />
        </a>
        <a href="https://t.me/bogdan_ilchenko" target="_blank">
          <FaTelegramPlane />
        </a>
        <a href="https://www.facebook.com/bogdan.ilchenko.1" target="_blank">
          <FaFacebookSquare />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
