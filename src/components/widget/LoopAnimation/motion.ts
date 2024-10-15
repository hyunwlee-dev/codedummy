import { type Variants } from 'framer-motion';

export const container: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  fadeout: {
    opacity: 0,
  },
};

export const item: Variants = {
  hidden: {
    y: '100px',
  },
  show: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 25,
      damping: 8,
      mass: 0.7,
    },
  },
  fadeout: {
    transition: {
      type: 'spring',
      stiffness: 10,
    },
    y: '100px',
  },
};
