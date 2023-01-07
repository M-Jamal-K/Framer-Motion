export const containerVarients = {
  hidden: {
    opacity: 0,
    x: "100vw"
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren"
    }
  },
  exit: {
    opacity: 0
  }
};
export const headSpring = {
  hidden: { y: -250 },
  visible: {
    y: -10,
    transition: { delay: 0.2, type: "spring", stiffness: 120 }
  }
};
export const nextVarients = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { type: "spring", stiffness: 120 } }
};

export const childVarients = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const btnHoverVarient = {
  Hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      repeatType: "mirror",
      repeat: Infinity,
      duration: 0.4,
      Delay: 0.6
    }
  }
};

export const homeOpacityVarient = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.5
    }
  },
  exit: {
    opacity: 0
  }
};

export const listHover = {
  Hover: {
    scale: 1.3,
    color: "#f8e112",
    originX: 0,
    transition: { type: "spring", stiffness: 300 }
  }
};
export const modalVarients = {
  hidden: { opacity: 0, y: "-100vh" },
  visible: { opacity: 1, y: "200px", transition: { delay: 0.5 } }
};

export const svgVariant = {
  hidden: { rotate: -180 },
  visible: { rotate: 0, transition: { duration: 1 } }
};
export const pathVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 3,
      ease: "easeInOut"
    }
  }
};

export const loaderVariants = {
  animation_One: {
    x: [-20, 20],
    y: [0, -30],
    scale: [1, 1.5],
    transition: {
      x: {
        repeatType: "mirror",
        repeat: Infinity,
        duration: 0.5
      },
      y: {
        repeatType: "mirror",
        repeat: Infinity,
        duration: 0.25,
        ease: "easeOut"
      },
      scale: {
        repeatType: "mirror",
        repeat: Infinity,
        duration: 0.25,
        ease: "easeOut"
      }
    }
  },
  animation_Two: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        repeatType: "reverse",
        repeat: Infinity,
        duration: 0.25,
        ease: "easeOut"
      }
    }
  },
  animation_Three: {
    scale: [0, 2],
    x: 0,
    y: 0,
    transition: {
      scale: {
        repeatType: "reverse",
        repeat: Infinity,
        duration: 0.25,
        ease: "easeOut"
      }
    }
  },
  animation_Four: {
    x: [20, -20],
    y: [0, 30],
    scale: [0, 1],
    transition: {
      x: {
        repeatType: "mirror",
        repeat: Infinity,
        duration: 0.5
      },
      y: {
        repeatType: "mirror",
        repeat: Infinity,
        duration: 0.25,
        ease: "easeOut"
      },
      scale: {
        repeatType: "mirror",
        repeat: Infinity,
        duration: 0.25,
        ease: "easeOut"
      }
    }
  }
};
