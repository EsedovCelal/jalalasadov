export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const rotateIn = {
  hidden: { opacity: 0, rotate: -30 },
  visible: { opacity: 1, rotate: 0, transition: { duration: 1 } },
};

export const containerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};
export const letterStagger = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export const wobble = {
  hidden: { rotate: -5 },
  visible: {
    rotate: [0, 5, -5, 0],
    transition: { duration: 0.8 },
  },
};

export const pulse = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.05, 1],
    transition: { duration: 1, repeat: Infinity },
  },
};

export const bounce = {
  hidden: { y: 0 },
  visible: {
    y: [0, -10, 0],
    transition: { duration: 0.5, repeat: Infinity },
  },
};
