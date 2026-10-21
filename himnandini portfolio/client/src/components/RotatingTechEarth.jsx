import React, { useRef, useEffect } from 'react';
import {
  OdooIcon,
  PythonIcon,
  OwlIcon,
  PostgresIcon,
  AzureIcon,
  JavascriptIcon,
  Html5Icon,
  Css3Icon,
  DockerIcon,
  LinuxIcon,
  AwsIcon,
  PowerBiIcon,
  GitIcon,
  VsCodeIcon,
  PostmanIcon,
  FigmaIcon,
} from './BrandIcons';

export const TECH_EARTH_ITEMS = [
  { name: 'Odoo 19', color: '#a855f7', icon: OdooIcon },
  { name: 'Python', color: '#38bdf8', icon: PythonIcon },
  { name: 'OWL', color: '#c084fc', icon: OwlIcon },
  { name: 'PostgreSQL', color: '#38bdf8', icon: PostgresIcon },
  { name: 'JavaScript', color: '#facc15', icon: JavascriptIcon },
  { name: 'HTML5', color: '#fb923c', icon: Html5Icon },
  { name: 'CSS3', color: '#38bdf8', icon: Css3Icon },
  { name: 'Git', color: '#f05032', icon: GitIcon },
  { name: 'Docker', color: '#2496ed', icon: DockerIcon },
  { name: 'Linux', color: '#fcc624', icon: LinuxIcon },
  { name: 'VS Code', color: '#007acc', icon: VsCodeIcon },
  { name: 'Postman', color: '#ff6c37', icon: PostmanIcon },
  { name: 'Figma', color: '#a259ff', icon: FigmaIcon },
  { name: 'Azure OCR', color: '#60a5fa', icon: AzureIcon },
  { name: 'AWS Cloud', color: '#f59e0b', icon: AwsIcon },
  { name: 'Power BI', color: '#facc15', icon: PowerBiIcon },
];


/**
 * RotatingTechEarth
 * A pure cinematic 3D Earth Globe:
 * - Significantly bigger sphere with radiant horizontal energy waves emanating from the sides
 * - Zero boxes, zero borders, transparent canvas background
 * - Technologies and languages orbiting the Earth and appearing sequentially in 3D
 * - Interactive mouse/touch drag to spin
 */
export default function RotatingTechEarth({ isDark = false, className = '' }) {
  const canvasRef = useRef(null);

  // 3D Rotation State
  const earthState = useRef({
    rx: 0.18,
    ry: 0,
    vx: 0,
    vy: 0.006,
    isDown: false,
    lastX: 0,
    lastY: 0,
    radius: 195, // Big Majestic Earth
  });

  // Calculate 3D points on spherical Earth for technologies
  const nodes3D = useRef(
    TECH_EARTH_ITEMS.map((item, idx) => {
      const phi = Math.acos(-1 + (2 * idx) / TECH_EARTH_ITEMS.length);
      const theta = Math.sqrt(TECH_EARTH_ITEMS.length * Math.PI) * phi;
      return {
        ...item,
        phi,
        theta,
        screenX: 0,
        screenY: 0,
        screenZ: 0,
        scale: 1,
      };
    })
  );

  // Dot matrix continent coordinates on Earth sphere
  const earthDots = useRef(
    Array.from({ length: 240 }, () => {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      return {
        theta,
        phi,
        size: Math.random() * 2 + 1,
      };
    })
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);

      // Auto-scale Earth radius based on available screen width
      if (w < 640) {
        earthState.current.radius = 135;
      } else if (w < 1024) {
        earthState.current.radius = 165;
      } else {
        earthState.current.radius = 195;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const fov = 500;

    const render = () => {
      const parent = canvas.parentElement;
      const width = parent ? parent.clientWidth : 800;
      const height = parent ? parent.clientHeight : 560;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      const state = earthState.current;
      const radius = state.radius;

      // Continuous Earth rotation
      if (!state.isDown) {
        state.ry += state.vy;
        state.rx += state.vx;
        state.vx *= 0.95;
      }

      const cosX = Math.cos(state.rx);
      const sinX = Math.sin(state.rx);
      const cosY = Math.cos(state.ry);
      const sinY = Math.sin(state.ry);

      // Project 3D Spherical coordinates
      const project = (r, theta, phi) => {
        const x0 = r * Math.sin(phi) * Math.cos(theta);
        const y0 = r * Math.cos(phi);
        const z0 = r * Math.sin(phi) * Math.sin(theta);

        // Rotate Y (spinning Earth)
        const x1 = x0 * cosY + z0 * sinY;
        const y1 = y0;
        const z1 = -x0 * sinY + z0 * cosY;

        // Rotate X (axial tilt)
        const x2 = x1;
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;

        const scale = fov / (fov + z2 + 250);
        return {
          x: cx + x2 * scale,
          y: cy + y2 * scale,
          z: z2,
          scale,
        };
      };

      // =========================================================================
      // 1. RADIATING SIDE WAVES (Energy Waves emanating from Left & Right Sides)
      // =========================================================================
      const waveTime = Date.now() * 0.0018;
      const waveCount = 5;

      for (let i = 0; i < waveCount; i++) {
        const progress = ((waveTime + i * (1 / waveCount)) % 1);
        const waveRadius = radius + progress * (radius * 0.85);
        const fadeAlpha = Math.sin(progress * Math.PI) * (isDark ? 0.38 : 0.28);

        // Left Side Radiating Wave Arc
        ctx.beginPath();
        ctx.arc(cx, cy, waveRadius, Math.PI * 0.65, Math.PI * 1.35);
        ctx.strokeStyle = isDark
          ? `rgba(168, 85, 247, ${fadeAlpha})`
          : `rgba(147, 51, 234, ${fadeAlpha})`;
        ctx.lineWidth = Math.max(1, 3 * (1 - progress));
        ctx.stroke();

        // Right Side Radiating Wave Arc
        ctx.beginPath();
        ctx.arc(cx, cy, waveRadius, -Math.PI * 0.35, Math.PI * 0.35);
        ctx.strokeStyle = isDark
          ? `rgba(52, 211, 153, ${fadeAlpha})`
          : `rgba(16, 185, 129, ${fadeAlpha})`;
        ctx.lineWidth = Math.max(1, 3 * (1 - progress));
        ctx.stroke();

        // Subtle Concentric Echo Ripples
        ctx.beginPath();
        ctx.arc(cx, cy, waveRadius, 0, Math.PI * 2);
        ctx.strokeStyle = isDark
          ? `rgba(56, 189, 248, ${fadeAlpha * 0.2})`
          : `rgba(99, 102, 241, ${fadeAlpha * 0.18})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Lateral Wave Signals (Expanding signal crests on the left and right horizons)
      for (let s = 1; s <= 3; s++) {
        const offset = Math.sin(waveTime * 2 + s) * 8;
        const arcSpread = radius * (1.15 + s * 0.2) + offset;
        const arcAlpha = isDark ? 0.22 / s : 0.16 / s;

        // Left signal crest
        ctx.beginPath();
        ctx.arc(cx - radius * 0.2, cy, arcSpread, Math.PI * 0.8, Math.PI * 1.2);
        ctx.strokeStyle = `rgba(168, 85, 247, ${arcAlpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Right signal crest
        ctx.beginPath();
        ctx.arc(cx + radius * 0.2, cy, arcSpread, -Math.PI * 0.2, Math.PI * 0.2);
        ctx.strokeStyle = `rgba(52, 211, 153, ${arcAlpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // =========================================================================
      // 2. ATMOSPHERIC GLOW BEHIND THE EARTH
      // =========================================================================
      const atmoGrad = ctx.createRadialGradient(cx, cy, radius * 0.75, cx, cy, radius * 1.4);
      if (isDark) {
        atmoGrad.addColorStop(0, 'rgba(167, 139, 250, 0.28)');
        atmoGrad.addColorStop(0.5, 'rgba(52, 211, 153, 0.14)');
        atmoGrad.addColorStop(1, 'transparent');
      } else {
        atmoGrad.addColorStop(0, 'rgba(147, 51, 234, 0.22)');
        atmoGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.1)');
        atmoGrad.addColorStop(1, 'transparent');
      }
      ctx.fillStyle = atmoGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.4, 0, Math.PI * 2);
      ctx.fill();

      // =========================================================================
      // 3. EARTH PLANET BASE DISK
      // =========================================================================
      const planetGrad = ctx.createRadialGradient(
        cx - radius * 0.35,
        cy - radius * 0.35,
        radius * 0.1,
        cx,
        cy,
        radius
      );
      if (isDark) {
        planetGrad.addColorStop(0, '#1c332d');
        planetGrad.addColorStop(0.5, '#101e1a');
        planetGrad.addColorStop(1, '#060d0b');
      } else {
        planetGrad.addColorStop(0, '#ffffff');
        planetGrad.addColorStop(0.5, '#ede9fe');
        planetGrad.addColorStop(1, '#d8d1f7');
      }
      ctx.fillStyle = planetGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // Atmospheric Rim Highlight
      ctx.strokeStyle = isDark ? 'rgba(167, 139, 250, 0.45)' : 'rgba(124, 58, 237, 0.35)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // =========================================================================
      // 4. EARTH LATITUDE & LONGITUDE WIREFRAME LINES
      // =========================================================================
      const parallels = [-0.6, -0.3, 0, 0.3, 0.6];
      parallels.forEach((lat) => {
        ctx.beginPath();
        const steps = 48;
        const phi = Math.PI / 2 + lat;
        let started = false;
        for (let s = 0; s <= steps; s++) {
          const theta = (s / steps) * Math.PI * 2;
          const p = project(radius, theta, phi);
          if (p.z > -10) {
            if (!started) {
              ctx.moveTo(p.x, p.y);
              started = true;
            } else {
              ctx.lineTo(p.x, p.y);
            }
          } else {
            started = false;
          }
        }
        ctx.strokeStyle = isDark ? 'rgba(52, 211, 153, 0.18)' : 'rgba(124, 58, 237, 0.16)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      for (let m = 0; m < 10; m++) {
        const theta = (m / 10) * Math.PI * 2;
        ctx.beginPath();
        let started = false;
        for (let s = 0; s <= 28; s++) {
          const phi = (s / 28) * Math.PI;
          const p = project(radius, theta, phi);
          if (p.z > -10) {
            if (!started) {
              ctx.moveTo(p.x, p.y);
              started = true;
            } else {
              ctx.lineTo(p.x, p.y);
            }
          } else {
            started = false;
          }
        }
        ctx.strokeStyle = isDark ? 'rgba(167, 139, 250, 0.16)' : 'rgba(99, 102, 241, 0.14)';
        ctx.lineWidth = 0.9;
        ctx.stroke();
      }

      // =========================================================================
      // 5. ROTATING CONTINENT MATRIX DOTS
      // =========================================================================
      earthDots.current.forEach((dot) => {
        const p = project(radius, dot.theta, dot.phi);
        if (p.z > 0) {
          const alpha = (p.z / radius) * 0.75;
          ctx.fillStyle = isDark
            ? `rgba(52, 211, 153, ${alpha})`
            : `rgba(124, 58, 237, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, dot.size * p.scale, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // =========================================================================
      // 6. PROJECT ORBITING TECHNOLOGY NODES
      // =========================================================================
      const orbitR = radius + 48; // Technologies orbit gracefully around the Earth
      let maxZ = -9999;
      let focusedNodeIdx = 0;

      const projectedTech = nodes3D.current.map((item, idx) => {
        const p = project(orbitR, item.theta, item.phi);
        item.screenX = p.x;
        item.screenY = p.y;
        item.screenZ = p.z;
        item.scale = p.scale;

        if (p.z > maxZ) {
          maxZ = p.z;
          focusedNodeIdx = idx;
        }
        return item;
      });

      // Sort by Z for proper 3D depth rendering
      projectedTech.sort((a, b) => a.screenZ - b.screenZ);

      // Connecting thin data vectors to Earth
      projectedTech.forEach((node) => {
        if (node.screenZ > -20) {
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(node.screenX, node.screenY);
          ctx.strokeStyle = isDark ? 'rgba(167, 139, 250, 0.14)' : 'rgba(124, 58, 237, 0.12)';
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      });

      // Render Technology Badges as they rotate into view
      projectedTech.forEach((node, idx) => {
        const isFacing = node.screenZ > 0;
        const isFocus = idx === projectedTech.length - 1; // Highest Z (facing user directly)
        const alpha = Math.max(0.3, Math.min(1, (node.screenZ + 100) / 220));
        const badgeRadius = (isFocus ? 12 : 8.5) * node.scale;

        // Glowing node core
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.screenX, node.screenY, badgeRadius, 0, Math.PI * 2);
        ctx.fill();

        // Pulsing focus halo when technology comes around to front
        if (isFocus) {
          ctx.strokeStyle = isDark ? '#ffffff' : '#4c1d95';
          ctx.lineWidth = 2 * node.scale;
          ctx.stroke();

          const pulseRadius = badgeRadius + Math.sin(Date.now() * 0.006) * 5 + 10;
          ctx.beginPath();
          ctx.arc(node.screenX, node.screenY, pulseRadius, 0, Math.PI * 2);
          ctx.strokeStyle = node.color;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        // Display tech name label for front-facing nodes
        if (isFacing || isFocus) {
          ctx.font = `${isFocus ? 'bold 13px' : '600 11px'} "Plus Jakarta Sans", sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';

          const textWidth = ctx.measureText(node.name).width;
          const pillHeight = isFocus ? 20 : 17;
          const pillY = node.screenY - badgeRadius - pillHeight - 4;

          // Pill container
          ctx.fillStyle = isDark
            ? `rgba(13, 23, 20, ${alpha * 0.92})`
            : `rgba(255, 255, 255, ${alpha * 0.95})`;
          ctx.beginPath();
          ctx.roundRect(
            node.screenX - textWidth / 2 - 8,
            pillY,
            textWidth + 16,
            pillHeight,
            7
          );
          ctx.fill();

          ctx.strokeStyle = isFocus ? node.color : (isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)');
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // Text
          ctx.fillStyle = isFocus
            ? node.color
            : (isDark ? `rgba(248, 250, 252, ${alpha})` : `rgba(15, 23, 42, ${alpha})`);
          ctx.fillText(node.name, node.screenX, node.screenY - badgeRadius - 7);
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDark]);

  // Mouse & Touch Drag Handlers
  const handleMouseDown = (e) => {
    earthState.current.isDown = true;
    earthState.current.lastX = e.clientX;
    earthState.current.lastY = e.clientY;
  };

  const handleMouseMove = (e) => {
    if (!earthState.current.isDown) return;
    const deltaX = e.clientX - earthState.current.lastX;
    const deltaY = e.clientY - earthState.current.lastY;

    earthState.current.ry += deltaX * 0.009;
    earthState.current.rx -= deltaY * 0.009;
    earthState.current.vy = deltaX * 0.004;

    earthState.current.lastX = e.clientX;
    earthState.current.lastY = e.clientY;
  };

  const handleMouseUp = () => {
    earthState.current.isDown = false;
  };

  return (
    <div
      className={`relative w-full flex items-center justify-center select-none overflow-visible bg-transparent ${className}`}
    >
      {/* 3D Pure Canvas Earth with Radiating Waves - No boxes, no borders, pure Earth */}
      <div
        className="relative w-full max-w-[900px] h-[500px] sm:h-[580px] lg:h-[620px] cursor-grab active:cursor-grabbing flex items-center justify-center"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
    </div>
  );
}
