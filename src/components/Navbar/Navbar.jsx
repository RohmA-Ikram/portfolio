import React, { useState } from "react";
import { images } from "../../constant";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app_navbar-links">
        {["home", "about", "work", "skills", "contact"].map((items) => (
          <li className="app__flex text-p" key={`links- ${items}`}>
            <div />
            <a href={`#${items}`}>{items}</a>
          </li>
        ))}
      </ul>
      {/* mobile app menu */}
      <div className="app__navbar-menu" >
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          >
              <HiX onClick={()=>setToggle(false)}/>
            <ul>
            {["home", "about", "work", "skills", "contact"].map((items) => (
              <li key={`${items}`}>
                <div />
                <a  onClick={() => setToggle(false)} href={`#${items}`}>{items}</a>
              </li>
            ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;





