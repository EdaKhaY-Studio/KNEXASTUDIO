import React from 'react';

type WaveVariant = 'down' | 'up' | 'tilt' | 'soft';

interface WaveDividerProps {
  /** Color of the wave fill — use the NEXT section's background color */
  fill?: string;
  /** Color behind the wave — the CURRENT section's bg */
  bg?: string;
  variant?: WaveVariant;
  /** flip horizontally for variety */
  flip?: boolean;
  className?: string;
}

const PATHS: Record<WaveVariant, string> = {
  /** Smooth double-wave pointing downward */
  down: 'M0,64 C180,120 360,0 540,64 C720,128 900,0 1080,64 C1260,128 1440,64 1440,64 L1440,160 L0,160 Z',
  /** Inverted wave pointing upward */
  up:   'M0,96 C240,160 480,32 720,96 C960,160 1200,32 1440,96 L1440,160 L0,160 Z',
  /** Soft organic tilt */
  tilt: 'M0,32 C360,128 1080,0 1440,80 L1440,160 L0,160 Z',
  /** Very gentle shallow wave */
  soft: 'M0,80 C320,140 680,20 1000,80 C1160,112 1300,60 1440,80 L1440,160 L0,160 Z',
};

/**
 * SVG wave shape placed between two sections.
 * Put it AFTER the section it overlaps, pointing into the next one.
 *
 * Usage:
 *   <SectionA />
 *   <WaveDivider fill="#0D1713" bg="#07110D" variant="down" />
 *   <SectionB />
 */
export const WaveDivider: React.FC<WaveDividerProps> = ({
  fill = '#0D1713',
  bg   = 'transparent',
  variant = 'down',
  flip = false,
  className = '',
}) => (
  <div
    className={`relative w-full overflow-hidden leading-none ${className}`}
    style={{ background: bg, marginBottom: '-2px' }}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 1440 160"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="block w-full h-[80px] sm:h-[110px]"
      style={{ 
        transform: flip ? 'scaleX(-1)' : undefined,
        filter: 'drop-shadow(0 -4px 10px rgba(15, 23, 42, 0.05))'
      }}
    >
      <path d={PATHS[variant]} fill={fill} />
    </svg>
  </div>
);
