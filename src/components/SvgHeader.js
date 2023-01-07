import { motion } from "framer-motion";
import { svgVariant, pathVariant } from "../framerMotion/FramerMotion";

const SvgHeader = () => {
  return (
    <motion.svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96.000000 96.000000"
      className="my-svg"
      variants={svgVariant}
      initial="hidden"
      animate="visible"
    >
      <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)">
        <motion.path
          variants={pathVariant}
          d="M457 874 c-4 -4 -7 -18 -7 -31 0 -22 -3 -23 -86 -23 -81 0 -87 -1
-115 -29 -29 -29 -29 -30 -29 -151 0 -121 0 -122 29 -151 l29 -29 202 0 202 0
29 29 c29 29 29 30 29 151 0 121 0 122 -29 151 -28 27 -34 29 -115 29 l-85 0
-3 28 c-3 26 -34 43 -51 26z m218 -234 l0 -115 -195 0 -195 0 -3 104 c-1 58 0
111 2 118 4 11 45 13 198 11 l193 -3 0 -115z"
        />
        <motion.path
          variants={pathVariant}
          d="M356 684 c-9 -8 -16 -24 -16 -34 0 -43 54 -65 84 -34 31 30 9 84 -34
84 -10 0 -26 -7 -34 -16z"
        />
        <motion.path
          variants={pathVariant}
          d="M536 684 c-9 -8 -16 -24 -16 -34 0 -43 54 -65 84 -34 31 30 9 84 -34
84 -10 0 -26 -7 -34 -16z"
        />
        <motion.path
          variants={pathVariant}
          d="M189 371 c-23 -23 -29 -38 -29 -71 0 -128 129 -215 320 -215 191 0
320 87 320 215 0 33 -6 48 -29 71 l-29 29 -262 0 -262 0 -29 -29z m549 -66 c8
-64 -54 -127 -151 -152 -138 -36 -302 5 -351 88 -16 28 -22 80 -9 93 4 3 119
5 257 4 l251 -3 3 -30z"
        />
      </g>
    </motion.svg>
  );
};

export default SvgHeader;
