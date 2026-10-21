import React, { useRef, useState, useCallback } from 'react';

/**
 * ThreeDCard - A high-performance 3D Tilt & Parallax Card
 * Features:
 *  - Real-time 3D rotation based on mouse coordinates (rotateX, rotateY)
 *  - Dynamic specular light reflection / glare following cursor
 *  - True Z-space depth for inner elements (transform-style: preserve-3d)
 *  - Optional animated border-beam laser glow
 */
export default function ThreeDCard({
  children,
  className = '',
  glare = true,
  borderBeam = false,
  maxTilt = 14,
  scale = 1.02,
  perspective = 1000,
  onClick,
}) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
  });
  const [glareStyle, setGlareStyle] = useState({
    opacity: 0,
    x: 50,
    y: 50,
  });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Normalize coordinates (-1 to 1)
    const normX = (x - centerX) / centerX;
    const normY = (y - centerY) / centerY;

    // Calculate 3D rotation
    const rotateY = normX * maxTilt;
    const rotateX = -normY * maxTilt;

    setTransformStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 0.1s ease-out',
    });

    if (glare) {
      setGlareStyle({
        opacity: Math.min(0.35, Math.hypot(normX, normY) * 0.4),
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
      });
    }
  }, [glare, maxTilt, scale, perspective]);

  const handleMouseLeave = useCallback(() => {
    setTransformStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
    });
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
  }, [perspective]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        ...transformStyle,
      }}
      className={`relative rounded-2xl will-change-transform cursor-pointer group select-none ${className}`}
    >
      {/* Optional Animated Cyber Border Beam */}
      {borderBeam && (
        <div className="absolute -inset-[1px] rounded-2xl overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 dark:via-emerald-400/50 to-transparent animate-[borderBeam_4s_linear_infinite]" />
        </div>
      )}

      {/* Card Content Layer with preserve-3d */}
      <div
        className="relative z-10 w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </div>

      {/* Interactive Glare / Specular Light Reflection */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 z-20 rounded-2xl transition-opacity duration-300 overflow-hidden mix-blend-overlay"
          style={{
            opacity: glareStyle.opacity,
            background: `radial-gradient(circle 280px at ${glareStyle.x}% ${glareStyle.y}%, rgba(255,255,255,0.85), transparent 70%)`,
          }}
        />
      )}
    </div>
  );
}
