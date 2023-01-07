import React from "react";
import { motion } from "framer-motion";
import { headSpring } from "../framerMotion/FramerMotion";
import SvgHeader from "./SvgHeader";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <SvgHeader />
      </div>
      <motion.div
        className="title"
        variants={headSpring}
        initial="hidden"
        animate="visible"
      >
        <h1>Mac Soft</h1>
      </motion.div>
    </header>
  );
};

export default Header;
