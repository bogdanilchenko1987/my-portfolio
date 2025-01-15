/* eslint-disable react/prop-types */
import logo from "../assets/mountains.png";
import logoWhite from "../assets/mountains-white.png";

import {
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
  FaTelegramPlane,
  FaMoon,
} from "react-icons/fa";
import { GoSun } from "react-icons/go";

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
        <button onClick={toggleMode}>
          {lightMode ? (
            <FaMoon size={24} title="Click to switch to dark mode" />
          ) : (
            <GoSun size={24} title="Click to switch to light mode" />
          )}
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

// /* eslint-disable react/prop-types */
// import logo from "../assets/mountains.png";
// import logoWhite from "../assets/mountains-white.png";

// import {
//   FaLinkedin,
//   FaGithub,
//   FaFacebookSquare,
//   FaTelegramPlane,
// } from "react-icons/fa";
// import DarkMode from "./DarkMode/DarkMode/DarkMode";

// const NavBar = ({ checked, onChangeMode }) => {
//   return (
//     <nav className=" mb-20 flex items-center justify-between py-6">
//       <div className="flex flex-shrink-0 items-center">
//         <a href="/my-portfolio/">
//           <img
//             className="mx-2 w-10"
//             src={checked ? logoWhite : logo}
//             alt="logo"
//           />
//         </a>
//       </div>

//       <DarkMode checked={checked} onChangeMode={onChangeMode} />
//       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//         <a
//           href="https://www.linkedin.com/in/bogdan-ilchenko-70286525/"
//           target="_blank"
//         >
//           <FaLinkedin fill={checked ? "black" : "white"} />
//         </a>
//         <a href="https://github.com/bogdanilchenko1987" target="_blank">
//           <FaGithub fill={checked ? "black" : "white"} />
//         </a>
//         <a href="https://t.me/bogdan_ilchenko" target="_blank">
//           <FaTelegramPlane fill={checked ? "black" : "white"} />
//         </a>
//         <a href="https://www.facebook.com/bogdan.ilchenko.1" target="_blank">
//           <FaFacebookSquare fill={checked ? "black" : "white"} />
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
