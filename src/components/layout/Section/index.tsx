'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { item } from './motion';
import './index.css';

export default function Section({
  heading,
  children,
  className,
}: {
  heading?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={item}
      className={clsx(
        'overflow-hidden min-h-screenHeightWithoutHeader relative mt-4 tablet:mt-6 laptop:mt-10 tablet:mx-auto tablet:w-[500px] laptop:w-[800px] desktop:mx-auto desktop:w-[1100px]',
        className,
      )}
    >
      {heading && <h2 className="heading">{heading}</h2>}
      {children}
    </motion.section>
  );
}
