'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { type PropsWithClassName } from '@types';
import { container, item } from './motion';

export default function LoopAnimation({ className }: PropsWithClassName) {
  return (
    <motion.svg
      className={clsx(
        className,
        'fixed bottom-0 left-0 right-0 tablet:mx-auto tablet:w-[500px] laptop:w-[800px] desktop:w-[1100px]',
      )}
      viewBox="0 0 1080 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.rect
        initial="hidden"
        animate="show"
        exit="fadeout"
        variants={container}
        width="1080"
        height="1080"
        fill="#221F1F"
      />
      <motion.g
        initial="hidden"
        animate="show"
        exit="fadeout"
        variants={container}
        clipPath="url(#clip0_4_88)"
      >
        <motion.circle
          variants={item}
          cx="540"
          cy="1057"
          r="945.74"
          transform="rotate(0.0763883 540 1057)"
          fill="#6482AD"
        />
        <motion.ellipse
          variants={item}
          cx="541.597"
          cy="1135.25"
          rx="815.899"
          ry="816.466"
          transform="rotate(0.0763883 541.597 1135.25)"
          fill="#7FA1C3"
        />
        <motion.ellipse
          variants={item}
          cx="539.813"
          cy="1197.61"
          rx="701.934"
          ry="704.202"
          transform="rotate(0.0763883 539.813 1197.61)"
          fill="#E2DAD6"
        />
        <motion.g>
          <motion.ellipse
            cx="540.887"
            cy="1242.41"
            rx="620.287"
            ry="619.72"
            transform="rotate(0.0763883 540.887 1242.41)"
            fill="#F5EDED"
          />
          <motion.path
            d="M423.353 737C441.183 789.445 513.684 785.174 524.488 737.135"
            stroke="#221F1F"
            strokeWidth="17"
            strokeLinecap="round"
          />
          <motion.path
            d="M569.534 740.873C586.856 788.203 654.663 784.351 665.152 741"
            stroke="#221F1F"
            strokeWidth="17"
            strokeLinecap="round"
          />
          <motion.path
            d="M311.135 774.546C412.544 880.414 539.342 873.534 546.168 875.995C675.154 876.167 748.459 814.97 768.988 784.351"
            stroke="#221F1F"
            strokeWidth="17"
            strokeLinecap="round"
          />
        </motion.g>
      </motion.g>
      <motion.defs>
        <motion.clipPath id="clip0_4_88">
          <motion.rect width="1080" height="1080" fill="white" />
        </motion.clipPath>
      </motion.defs>
    </motion.svg>
  );
}
