'use client';

import { AnimatePresence } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { useState, useEffect } from 'react';
import LoopAnimation from '@components/widget/LoopAnimation';
import { container, item } from '@components/widget/LoopAnimation/motion';

export default function RouterAnimation({ children }: PropsWithChildren) {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showAnimation && <LoopAnimation container={container} item={item} />}
      </AnimatePresence>
      {!showAnimation && children}
    </>
  );
}
