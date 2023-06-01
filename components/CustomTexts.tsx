"use client"

import { motion, Variants } from 'framer-motion';
import { textContainer, textVariant2 } from '@/utils/motion';

interface TypingTextProps {
  title: string;
  textStyles: string;
}
export const TypingText: React.FC<TypingTextProps> = ({ title, textStyles }) => (
  <div suppressHydrationWarning={true}> 
      <motion.span
      variants={textContainer}
      className={` ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' :  letter}
        </motion.span>
      ))}
    </motion.span>
  </div>
);

interface TitleTextProps {
  title: string | undefined;
  textStyles: string | undefined;
}

export const TitleText: React.FC<TitleTextProps> = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
