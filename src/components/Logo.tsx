import React from 'react';

interface LogoProps {
  variant?: 'badge' | 'mark' | 'watermark' | 'full';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'custom';
  className?: string;
  showText?: boolean;
  textColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'badge',
  size = 'md',
  className = '',
  showText = false,
  textColor = 'text-white',
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    '2xl': 'w-36 h-36',
    custom: '',
  };

  // 1. Watermark Mode (Background large brand mark)
  if (variant === 'watermark') {
    return (
      <div
        className={`pointer-events-none select-none overflow-hidden rounded-full ${className}`}
        style={{
          filter: 'drop-shadow(0 0 80px rgba(0, 240, 255, 0.2))',
        }}
      >
        <img
          src="/logo.webp"
          alt="ماستر ميديا للترويج والإعلان"
          className="w-full h-full object-cover rounded-full opacity-[0.06]"
        />
      </div>
    );
  }

  // 2. Circular Image Logo
  const CircularLogoImage = () => (
    <div
      className={`relative rounded-full flex items-center justify-center overflow-hidden shrink-0 shadow-lg shadow-cyan-500/25 group transition-all duration-300 ring-2 ring-white/20 hover:ring-cyanGlow-400/60 ${sizeClasses[size]} ${className}`}
      style={{
        boxShadow: '0 0 25px -3px rgba(0, 240, 255, 0.35)',
      }}
    >
      <img
        src="/logo.webp"
        alt="ماستر ميديا للترويج والإعلان"
        className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
      />
      {/* Specular glass highlight ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/25 pointer-events-none" />
    </div>
  );

  // 3. Full Brand Link with Text
  if (variant === 'full' || showText) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <CircularLogoImage />
        <div className="flex flex-col text-right">
          <span className={`text-base sm:text-lg font-black tracking-tight leading-tight font-heading ${textColor}`}>
            ماستر ميديا
          </span>
          <span className="text-[10px] sm:text-xs font-semibold text-cyan-400 tracking-wider">
            للترويج والإعلان
          </span>
        </div>
      </div>
    );
  }

  return <CircularLogoImage />;
};

export default Logo;
