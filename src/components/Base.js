import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  containerVarients,
  nextVarients,
  btnHoverVarient,
  listHover
} from "../framerMotion/FramerMotion";

const Base = ({ addBase, person }) => {
  const bases = [
    "Software Engineering",
    "Computer Science",
    "Information Technology"
  ];

  return (
    <motion.div
      className="base container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 1: Choose Your Degree</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = person.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              variants={listHover}
              whileHover="Hover"
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {person.base && (
        <motion.div className="next" variants={nextVarients}>
          <Link to="/toppings">
            <motion.button variants={btnHoverVarient} whileHover="Hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
