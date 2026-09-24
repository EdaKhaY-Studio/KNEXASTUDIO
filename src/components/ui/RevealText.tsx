import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealTextProps {
  /** The text content to animate word-by-word */
  children: string;
  /** HTML tag to render as */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  className?: string;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Stagger between each word (seconds) */
  stagger?: number;
  /** Animation mode: word-by-word or line (whole block) */
  mode?: 'word' | 'line';
  /** Only animate once */
  once?: boolean;
}

const wordVariant = {
  hidden: { opacity: 0, y: 18, filter: 'blur(4px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.055,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const lineVariant = {
  hidden: { opacity: 0, y: 24, filter: 'blur(3px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * RevealText — animates text into view word-by-word (or as a whole line)
 * when the element enters the viewport.
 *
 * Usage:
 *   <RevealText as="h2" className="text-4xl font-bold text-white">
 *     Transformasi Bisnis Anda Sekarang
 *   </RevealText>
 */
export const RevealText: React.FC<RevealTextProps> = ({
  children,
  as: Tag = 'p',
  className = '',
  delay = 0,
  stagger = 0.055,
  mode = 'word',
  once = true,
}) => {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, {
    once,
    margin: '-60px',
  });

  if (mode === 'line') {
    return (
      <motion.div
        ref={ref as React.RefObject<HTMLDivElement>}
        variants={lineVariant}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{ transitionDelay: `${delay}s` }}
      >
        <Tag className={className}>{children}</Tag>
      </motion.div>
    );
  }

  // Word-by-word mode
  const words = children.split(' ');

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement & HTMLParagraphElement>}
      className={`overflow-hidden ${className}`}
      aria-label={children}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          custom={i + delay / stagger}
          variants={wordVariant}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="inline-block mr-[0.25em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
};
