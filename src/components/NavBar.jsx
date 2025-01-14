/* eslint-disable react/prop-types */
import logo from "../assets/mountains.png";
import logoWhite from "../assets/mountains-white.png";

import {
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
  FaTelegramPlane,
} from "react-icons/fa";

const NavBar = ({ lightMode, toggleMode }) => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/my-portfolio/">
          <img
            className="mx-2 w-10"
            src={lightMode ? logoWhite : logo}
            alt="logo"
          />
        </a>
      </div>
      <div>
        <button
          className={
            !lightMode
              ? "w-10 h-10 bg-neutral-300 rounded-full text-black font-semibold"
              : "w-10 h-10 text-white bg-black font-semibold rounded-full"
          }
          onClick={toggleMode}
        >
          {/* {lightMode ? "⚫" : "⚪"} */}
          {lightMode ? "DRK" : "LHT"}
        </button>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/bogdan-ilchenko-70286525/"
          target="_blank"
        >
          <FaLinkedin fill={lightMode ? "black" : "white"} />
        </a>
        <a href="https://github.com/bogdanilchenko1987" target="_blank">
          <FaGithub fill={lightMode ? "black" : "white"} />
        </a>
        <a href="https://t.me/bogdan_ilchenko" target="_blank">
          <FaTelegramPlane fill={lightMode ? "black" : "white"} />
        </a>
        <a href="https://www.facebook.com/bogdan.ilchenko.1" target="_blank">
          <FaFacebookSquare fill={lightMode ? "black" : "white"} />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
