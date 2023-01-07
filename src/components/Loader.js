import { motion, useCycle } from "framer-motion";
import { loaderVariants, btnHoverVarient } from "../framerMotion/FramerMotion";

const Loader = () => {
  const [animation, cycleAnimation] = useCycle(
    "animation_One",
    "animation_Two",
    "animation_Three",
    "animation_Four"
  );
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
        // animate="animationOne"
      ></motion.div>
      <div>
        <motion.button
          id="changebtn"
          onClick={() => cycleAnimation()}
          variants={btnHoverVarient}
          whileHover="Hover"
        >
          Change Animation Type
        </motion.button>
        <div>
          <strong>{animation}</strong>
        </div>
      </div>
    </>
  );
};

export default Loader;
