import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { modalVarients, childVarients } from "../framerMotion/FramerMotion";

const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showModal && (
          <motion.div
            className="backdrop"
            variants={childVarients}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div className="modal" variants={modalVarients}>
              <p>Want to make another Programmer?</p>
              <Link to="/">
                <button>Make Again</button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
