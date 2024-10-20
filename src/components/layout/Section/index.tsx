'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { type PropsWithClassName } from '@types';
import { item } from './motion';
import './index.css';

export default function Section({
  heading,
  id,
  children,
  className,
}: PropsWithClassName<{ heading?: string; id?: string }>) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      animate="show"
      variants={item}
      className={clsx('section', className)}
    >
      {heading && <h2 className="heading">{heading}</h2>}
      {children}
    </motion.section>
  );
}
