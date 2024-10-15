import { type Variants } from 'framer-motion';

export const item: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: 'spring',
    },
  },
};
