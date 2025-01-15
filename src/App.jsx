import { useState } from "react";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  const [lightMode, setLightMode] = useState(false);

  return (
    <div
      className={
        lightMode
          ? "overflow-hidden text-black"
          : "overflow-hidden text-neutral-300 antialiased"
      }
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
        <div className={lightMode ? "light" : "base"}></div>
      </div>

      <div className="container mx-auto px-8">
        <NavBar
          lightMode={lightMode}
          toggleMode={() => setLightMode(!lightMode)}
        />
        <Hero lightMode={lightMode} />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
};

export default App;

// import { useState } from "react";
// import About from "./components/About";
// import Contacts from "./components/Contacts";
// import Experience from "./components/Experience";
// import Hero from "./components/Hero";
// import NavBar from "./components/NavBar";
// import Projects from "./components/Projects";
// import Technologies from "./components/Technologies";

// const App = () => {
//   const [checked, setChecked] = useState(false);
//   return (
//     <div
//       className={
//         checked
//           ? "overflow-hidden text-black"
//           : "overflow-hidden text-neutral-300 antialiased"
//       }
//     >
//       <div className="fixed top-0 -z-10 h-full w-full">
//         {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
//         <div className={checked ? "light" : "base"}></div>
//       </div>

//       <div className="container mx-auto px-8">
//         <NavBar checked={checked} onChangeMode={() => setChecked(!checked)} />
//         <Hero checked={checked} />
//         <About />
//         <Technologies />
//         <Experience />
//         <Projects />
//         <Contacts />
//       </div>
//     </div>
//   );
// };

// export default App;
