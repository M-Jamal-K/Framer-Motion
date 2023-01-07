import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  containerVarients,
  btnHoverVarient,
  listHover
} from "../framerMotion/FramerMotion";

const Toppings = ({ addTopping, person }) => {
  let toppings = ["MERN STACK", "Java", "JavaScript", "Python", "AI", "ML"];

  return (
    <motion.div
      className="toppings container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 2: Choose Any Skills as Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = person.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              variants={listHover}
              whileHover="Hover"
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button variants={btnHoverVarient} whileHover="Hover">
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
