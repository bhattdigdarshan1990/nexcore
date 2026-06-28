import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  className = '',
  iconOnly = false,
}) => {
  const textColorPrimary = variant === 'light' ? 'text-blue-950' : 'text-white';
  const textColorSecondary = variant === 'light' ? 'text-slate-500' : 'text-slate-300';
  const textColorTertiary = variant === 'light' ? 'text-emerald-600' : 'text-emerald-400';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Authentic Original Logo Image exactly as provided */}
      <img
        src="/src/assets/images/nexcore_logo.jpg"
        alt="Nexcore Rehabilitation and Clinical Services"
        className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 shrink-0 object-contain"
        referrerPolicy="no-referrer"
        id="nexcore-logo-icon"
      />

      {/* Brand Text Block (Fully responsive, sharp, perfectly aligned, premium fonts) */}
      {!iconOnly && (
        <div className="flex flex-col justify-center leading-[1.1] tracking-normal font-sans text-left">
          <span className={`text-lg sm:text-xl md:text-2xl font-black tracking-wide ${textColorPrimary}`}>
            NEXCORE
          </span>
          <span className={`text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-wider ${textColorSecondary}`}>
            REHABILITATION AND
          </span>
          <span className={`text-[8.5px] sm:text-[9.5px] md:text-[10.5px] font-black tracking-wider ${textColorTertiary}`}>
            CLINICAL SERVICES PVT. LTD.
          </span>
        </div>
      )}
    </div>
  );
};
