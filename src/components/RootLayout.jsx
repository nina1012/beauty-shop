'use client';

import useMediaLayout from '@/lib/useMediaLayout';
import {
  MotionConfig,
  useReducedMotion,
  motion,
} from 'framer-motion';
import { createContext } from 'react';
import Header from './layout/Header';
import { Footer } from './layout/Footer';
import { usePathname } from 'next/navigation';

export const RootLayoutContext = createContext({});

function RootLayoutInner({ children }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <MotionConfig
      transition={
        shouldReduceMotion ? { duration: 0 } : undefined
      }
    >
      <motion.div
        layout
        className="relative isolate !z-10 flex w-full flex-col"
      >
        <Header />
        <main className="content min-w-[320px] text-left w-full">
          {children}
        </main>
        <Footer />
      </motion.div>
    </MotionConfig>
  );
}

export function RootLayout({ children }) {
  const layout = useMediaLayout();
  let pathname = usePathname();
  return (
    <RootLayoutContext.Provider value={{ layout }}>
      <RootLayoutInner key={pathname}>
        {children}
      </RootLayoutInner>
    </RootLayoutContext.Provider>
  );
}
