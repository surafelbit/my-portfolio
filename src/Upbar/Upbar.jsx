// import React from "react";
// import classes from "./Upbar.module.css";
// export default function Upbar() {
//   return (
//     <div className={classes.container}>
//       <nav className={classes.navbars}>
//         <div>
//           <h5 className={classes.header}>my portfolio</h5>
//         </div>
//         <ul className={classes.lists}>
//           <li>
//             <a className={classes.links} href="#home">
//               Home
//             </a>
//           </li>
//           <li>
//             <a className={classes.links} href="#about">
//               About
//             </a>
//           </li>
//           <li>
//             <a className={classes.links} href="#services">
//               Services
//             </a>
//           </li>
//           <li>
//             <a className={classes.links} href="#skills">
//               Skills
//             </a>
//           </li>
//           <li>
//             <a className={classes.links} href="#contact">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }
import React, { useState } from "react";
import classes from "./Upbar.module.css";

export default function Upbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={classes.container}>
      <nav className={classes.navbars}>
        <div>
          <h5 className={classes.header}>my portfolio</h5>
        </div>
        {/* Hamburger Icon */}
        <div className={classes.hamburger} onClick={toggleMenu}>
          <span className={isMenuOpen ? classes.open : ""}></span>
          <span className={isMenuOpen ? classes.open : ""}></span>
          <span className={isMenuOpen ? classes.open : ""}></span>
        </div>
        {/* Menu Links */}
        <ul className={`${classes.lists} ${isMenuOpen ? classes.active : ""}`}>
          <li>
            <a className={classes.links} href="#home">
              Home
            </a>
          </li>
          <li>
            <a className={classes.links} href="#about">
              About
            </a>
          </li>
          <li>
            <a className={classes.links} href="#services">
              Resume
            </a>
          </li>
          <li>
            <a className={classes.links} href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className={classes.links} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
