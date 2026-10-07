import React from 'react';
import { NavItem } from './types';

interface DesktopNavigationProps {
  items: NavItem[];
  activeSection: string;
  onNavClick: (id: string, href: string) => void;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  items,
  activeSection,
  onNavClick,
}) => {
  return (
    <nav
      className="hidden md:flex items-center gap-7 lg:gap-8 font-nav font-medium text-sm"
      aria-label="Navigasi Utama"
    >
      {items.map(({ id, label, href }) => {
        const isActive = activeSection === id;

        return (
          <a
            key={id}
            href={href}
            onClick={(e) => {
              e.preventDefault();
              onNavClick(id, href);
            }}
            aria-current={isActive ? 'page' : undefined}
            className={`
              relative py-1.5 transition-colors duration-250 ease-out select-none
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-sm
              ${
                isActive
                  ? 'text-white font-semibold'
                  : 'text-slate-300 hover:text-emerald-400'
              }
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full after:bg-emerald-400
              after:transition-all after:duration-300 after:ease-out
              ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
            `}
          >
            <span>{label}</span>
          </a>
        );
      })}
    </nav>
  );
};
