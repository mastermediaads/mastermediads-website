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
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    '2xl': 'w-36 h-36',
    custom: '',
  };

  // The standalone geometric white glyph
  const GeometricMark = ({ color = '#ffffff', opacity = 1 }: { color?: string; opacity?: number }) => (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="markGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      {/* Modern High-Precision Geometric Monogram / Prism Motif */}
      {/* Left Pillar */}
      <path
        d="M20 78V30L36 22V70L20 78Z"
        fill="url(#markGrad)"
      />
      {/* Central Prism Intersection Left */}
      <path
        d="M36 22L50 48L36 70V22Z"
        fill="url(#markGrad)"
        fillOpacity="0.9"
      />
      {/* Central Prism Intersection Right */}
      <path
        d="M64 22L50 48L64 70V22Z"
        fill="url(#markGrad)"
        fillOpacity="0.95"
      />
      {/* Right Pillar */}
      <path
        d="M80 78V30L64 22V70L80 78Z"
        fill="url(#markGrad)"
      />
      {/* Top Diamond Focal Light */}
      <path
        d="M50 14L57 23L50 32L43 23L50 14Z"
        fill="#00F0FF"
        fillOpacity="0.95"
      />
    </svg>
  );

  // Circular Badge with Electric Blue / Cyan Gradient
  const BadgeLogo = () => (
    <div
      className={`relative rounded-full flex items-center justify-center overflow-hidden shadow-lg group transition-all duration-300 ${sizeClasses[size]} ${className}`}
      style={{
        background: 'linear-gradient(135deg, #0052FF 0%, #0066FF 40%, #00D2FF 85%, #00F0FF 100%)',
        boxShadow: '0 0 25px -4px rgba(0, 210, 255, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.6), inset 0 -2px 4px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Inner specular glass ring */}
      <div className="absolute inset-[1.5px] rounded-full bg-gradient-to-b from-white/30 via-transparent to-black/20 pointer-events-none" />
      {/* Ambient center light */}
      <div className="absolute inset-0 bg-radial from-cyan-300/30 via-transparent to-transparent opacity-70 pointer-events-none" />
      
      {/* Geometric Symbol inside */}
      <div className="relative w-[64%] h-[64%] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <GeometricMark />
      </div>
    </div>
  );

  if (variant === 'mark') {
    return (
      <div className={`${sizeClasses[size]} ${className}`}>
        <GeometricMark />
      </div>
    );
  }

  if (variant === 'watermark') {
    return (
      <div
        className={`pointer-events-none select-none ${className}`}
        style={{
          filter: 'drop-shadow(0 0 60px rgba(0, 240, 255, 0.15))',
        }}
      >
        <GeometricMark color="#ffffff" opacity={0.06} />
      </div>
    );
  }

  if (variant === 'full' || showText) {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <BadgeLogo />
        <div className="flex flex-col text-right">
          <span className={`text-lg sm:text-xl font-black tracking-tight leading-tight font-heading ${textColor}`}>
            ماستر ميديا
          </span>
          <span className="text-[10px] sm:text-xs font-semibold text-cyan-400 tracking-wider">
            للترويج والإعلان
          </span>
        </div>
      </div>
    );
  }

  return <BadgeLogo />;
};

export default Logo;
