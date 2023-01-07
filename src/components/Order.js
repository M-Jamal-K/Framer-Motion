import React from "react";
import { motion } from "framer-motion";
import { containerVarients, childVarients } from "../framerMotion/FramerMotion";
import { useEffect } from "react";

const Order = ({ person, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 2500);
  }, [setShowModal]);

  return (
    <motion.div
      className="container order"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVarients}>
        You ordered a {person.base} expert with following skills:
      </motion.p>
      <motion.div variants={childVarients}>
        {person.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
