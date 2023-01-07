import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  btnHoverVarient,
  homeOpacityVarient
} from "../framerMotion/FramerMotion";
import Loader from "./Loader";

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={homeOpacityVarient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h2>Welcome to Mac Soft</motion.h2>

      <Link to="/base">
        <motion.button variants={btnHoverVarient} whileHover="Hover">
          Create Your Software Eng
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
