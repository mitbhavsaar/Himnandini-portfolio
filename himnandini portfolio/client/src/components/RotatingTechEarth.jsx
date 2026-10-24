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
 * RotatingTechEarth - Saturn 3D Planetary Ring System
 * Features:
 * - Authentic 3D tilted Saturn ring system matching user reference
 * - True 2-pass depth occlusion (Back ring behind globe, Front ring sweeping across front)
 * - Continuous orbital rotation: Stardust particles, orbiting energy comets, dashed frequency waves
 * - Expanding gravitational/harmonic wave ripples pulsating along the ring plane
 * - Atmospheric banded Saturnian sphere with wireframe tech data matrix
 * - Orbiting technology badges (Docker, Python, OWL, Linux, Git, etc.) with glowing focus indicator
 * - Full interactive 3D mouse/touch drag to inspect Saturn from any angle
 */
export default function RotatingTechEarth({ isDark = false, className = '' }) {
  const canvasRef = useRef(null);

  // 3D Motion and Planetary State
  const planetState = useRef({
    rx: 0, // user pitch offset
    ry: 0, // user yaw offset
    vx: 0,
    vy: 0.003,
    ringSpin: 0,
    globeSpin: 0,
    isDown: false,
    lastX: 0,
    lastY: 0,
    radius: 145, // Base planet radius
  });

  // Calculate 3D points on and around planet for technologies
  const nodes3D = useRef(
    TECH_EARTH_ITEMS.map((item, idx) => {
      // Distribute nodes along spherical orbits and ring orbit
      const isRingOrbit = idx % 2 === 0;
      const phi = isRingOrbit
        ? Math.PI / 2 + (Math.random() - 0.5) * 0.22
        : Math.acos(-1 + (2 * idx) / TECH_EARTH_ITEMS.length);
      const theta = (idx / TECH_EARTH_ITEMS.length) * Math.PI * 2;
      const orbitalRadiusMult = isRingOrbit ? 1.65 + (idx % 3) * 0.25 : 1.15 + (idx % 2) * 0.15;

      return {
        ...item,
        phi,
        theta,
        baseTheta: theta,
        orbitalRadiusMult,
        speed: 0.004 + (idx % 4) * 0.0015,
        screenX: 0,
        screenY: 0,
        screenZ: 0,
        scale: 1,
      };
    })
  );

  // Stardust & ringlet micro-particles orbiting along the Saturn rings (Keplerian dynamics)
  const ringParticles = useRef(
    Array.from({ length: 130 }, (_, i) => {
      // Radii distributed across Ring C, Ring B, and Ring A
      const bandChoice = Math.random();
      let rRatio;
      if (bandChoice < 0.2) {
        rRatio = 1.25 + Math.random() * 0.2; // Ring C
      } else if (bandChoice < 0.7) {
        rRatio = 1.48 + Math.random() * 0.38; // Dense Ring B
      } else {
        rRatio = 1.98 + Math.random() * 0.35; // Ring A
      }

      const colors = ['#ffffff', '#38bdf8', '#c084fc', '#facc15', '#34d399', '#f97316'];
      return {
        rRatio,
        theta: Math.random() * Math.PI * 2,
        speed: 0.008 / Math.sqrt(rRatio), // Differential Keplerian speed
        size: Math.random() * 2 + 0.8,
        color: colors[i % colors.length],
        alpha: Math.random() * 0.7 + 0.3,
      };
    })
  );

  // Planetary continent / tech dots
  const planetDots = useRef(
    Array.from({ length: 180 }, () => {
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

      // Auto-scale Saturn radius based on screen width
      if (w < 640) {
        planetState.current.radius = 98;
      } else if (w < 1024) {
        planetState.current.radius = 125;
      } else {
        planetState.current.radius = 145;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const fov = 550;

    // Fixed iconic Saturn orientation (matches reference image)
    const tiltZ = -38 * (Math.PI / 180); // Slanted diagonal from bottom-left to top-right
    const incX = -64 * (Math.PI / 180); // Tilted towards camera so front passes over lower hemisphere
    const cosInc = Math.cos(incX);
    const sinInc = Math.sin(incX);
    const cosSlant = Math.cos(tiltZ);
    const sinSlant = Math.sin(tiltZ);

    const render = () => {
      const parent = canvas.parentElement;
      const width = parent ? parent.clientWidth : 800;
      const height = parent ? parent.clientHeight : 560;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      const state = planetState.current;
      const radius = state.radius;

      // Continuous orbital and axial rotations
      if (!state.isDown) {
        state.globeSpin += 0.005;
        state.ringSpin += 0.007;

        // Gentle spring back to canonical Saturn view when user releases drag
        state.rx += (0 - state.rx) * 0.03;
        state.ry += (0 - state.ry) * 0.03;
      }

      // Camera Euler transform
      const cosY = Math.cos(state.ry);
      const sinY = Math.sin(state.ry);
      const cosX = Math.cos(state.rx);
      const sinX = Math.sin(state.rx);

      // 3D projection for points in the tilted Saturn ring plane
      const projectRingPoint = (r, theta) => {
        const xp = r * Math.cos(theta);
        const yp = 0;
        const zp = r * Math.sin(theta);

        // 1. Inclination around X
        const x1 = xp;
        const y1 = -zp * sinInc;
        const z1 = zp * cosInc;

        // 2. Slant around Z
        const x2 = x1 * cosSlant - y1 * sinSlant;
        const y2 = x1 * sinSlant + y1 * cosSlant;
        const z2 = z1;

        // 3. Camera drag interaction
        const x3 = x2 * cosY + z2 * sinY;
        const y3 = y2;
        const z3 = -x2 * sinY + z2 * cosY;

        const x4 = x3;
        const y4 = y3 * cosX - z3 * sinX;
        const z4 = y3 * sinX + z3 * cosX;

        const scale = fov / (fov + z4 + 250);
        return {
          x: cx + x4 * scale,
          y: cy + y4 * scale,
          z: z4,
          scale,
        };
      };

      // 3D projection for spherical globe points
      const projectSpherePoint = (r, theta, phi) => {
        const x0 = r * Math.sin(phi) * Math.cos(theta + state.globeSpin);
        const y0 = r * Math.cos(phi);
        const z0 = r * Math.sin(phi) * Math.sin(theta + state.globeSpin);

        // Tilt with Saturn's polar axis
        const x1 = x0;
        const y1 = -z0 * sinInc;
        const z1 = z0 * cosInc;

        const x2 = x1 * cosSlant - y1 * sinSlant;
        const y2 = x1 * sinSlant + y1 * cosSlant;
        const z2 = z1;

        const x3 = x2 * cosY + z2 * sinY;
        const y3 = y2;
        const z3 = -x2 * sinY + z2 * cosY;

        const x4 = x3;
        const y4 = y3 * cosX - z3 * sinX;
        const z4 = y3 * sinX + z3 * cosX;

        const scale = fov / (fov + z4 + 250);
        return {
          x: cx + x4 * scale,
          y: cy + y4 * scale,
          z: z4,
          scale,
        };
      };

      // Helper to draw an annular ring band between rInner and rOuter for a specific theta range
      const drawRingBand = (rIn, rOut, thetaStart, thetaEnd, fillStyle, strokeStyle, lineWidth = 1) => {
        const steps = 36;
        ctx.beginPath();

        // Outer arc
        for (let i = 0; i <= steps; i++) {
          const th = thetaStart + (i / steps) * (thetaEnd - thetaStart);
          const p = projectRingPoint(rOut, th);
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }

        // Inner arc (in reverse)
        for (let i = steps; i >= 0; i--) {
          const th = thetaStart + (i / steps) * (thetaEnd - thetaStart);
          const p = projectRingPoint(rIn, th);
          ctx.lineTo(p.x, p.y);
        }

        ctx.closePath();
        if (fillStyle) {
          ctx.fillStyle = fillStyle;
          ctx.fill();
        }
        if (strokeStyle) {
          ctx.strokeStyle = strokeStyle;
          ctx.lineWidth = lineWidth;
          ctx.stroke();
        }
      };

      // Helper to draw a single ring contour line
      const drawRingArc = (r, thetaStart, thetaEnd, strokeStyle, lineWidth = 1, lineDash = null) => {
        const steps = 48;
        ctx.beginPath();
        if (lineDash) ctx.setLineDash(lineDash);
        else ctx.setLineDash([]);

        for (let i = 0; i <= steps; i++) {
          const th = thetaStart + (i / steps) * (thetaEnd - thetaStart);
          const p = projectRingPoint(r, th);
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
        ctx.setLineDash([]);
      };

      // Ring boundaries
      const rCrepeIn = radius * 1.18;
      const rCrepeOut = radius * 1.44;
      const rMainBIn = radius * 1.44;
      const rMainBOut = radius * 1.88;
      // Cassini Division is between 1.88 and 1.98
      const rMainAIn = radius * 1.98;
      const rMainAOut = radius * 2.34;
      const rFring = radius * 2.42;

      // Color tokens based on dark/light mode
      const crepeFill = isDark ? 'rgba(168, 85, 247, 0.16)' : 'rgba(147, 51, 234, 0.12)';
      const mainBFill = isDark ? 'rgba(192, 132, 252, 0.38)' : 'rgba(168, 85, 247, 0.28)';
      const mainAFill = isDark ? 'rgba(56, 189, 248, 0.28)' : 'rgba(99, 102, 241, 0.22)';
      const ringRimColor = isDark ? 'rgba(250, 204, 21, 0.45)' : 'rgba(217, 119, 6, 0.35)';

      // =========================================================================
      // 1. BACKSPACE NEBULA & RADIATING SATURNIAN WAVE RIPPLES
      // =========================================================================
      const waveTime = Date.now() * 0.0016;
      const waveCount = 5;

      for (let w = 0; w < waveCount; w++) {
        const progress = (waveTime + w * (1 / waveCount)) % 1;
        const waveR = rMainAOut + progress * (radius * 1.1);
        const waveAlpha = Math.sin(progress * Math.PI) * (isDark ? 0.35 : 0.25);
        const dashOffset = -Date.now() * 0.03;

        // Expanding harmonic wave ripple along the tilted Saturn ring ellipse
        ctx.lineDashOffset = dashOffset;
        drawRingArc(
          waveR,
          0,
          Math.PI * 2,
          isDark ? `rgba(168, 85, 247, ${waveAlpha})` : `rgba(147, 51, 234, ${waveAlpha})`,
          Math.max(1, 2.5 * (1 - progress)),
          [8, 6]
        );
      }

      // =========================================================================
      // 2. SATURN RINGS - BACK HALF (theta: PI -> 2*PI, behind the sphere)
      // =========================================================================
      // Ring C (Crepe)
      drawRingBand(rCrepeIn, rCrepeOut, Math.PI, Math.PI * 2, crepeFill, null);
      // Ring B (Main Dense)
      drawRingBand(rMainBIn, rMainBOut, Math.PI, Math.PI * 2, mainBFill, null);
      // Cassini division lines
      drawRingArc(rMainBOut, Math.PI, Math.PI * 2, isDark ? 'rgba(0,0,0,0.45)' : 'rgba(15,23,42,0.18)', 1.5);
      // Ring A
      drawRingBand(rMainAIn, rMainAOut, Math.PI, Math.PI * 2, mainAFill, null);
      // F Ring hairline
      drawRingArc(rFring, Math.PI, Math.PI * 2, ringRimColor, 1.2);

      // Fine concentric frequency waves (sound/gravitational waves inside rings)
      for (let fw = 0; fw < 4; fw++) {
        const fwR = rMainBIn + fw * 14 + 6;
        const fwAlpha = isDark ? 0.28 : 0.2;
        drawRingArc(fwR, Math.PI, Math.PI * 2, `rgba(52, 211, 153, ${fwAlpha})`, 0.8, [4, 4]);
      }

      // Orbiting particles (Back half)
      ringParticles.current.forEach((pt) => {
        pt.theta += pt.speed;
        const currentTh = (pt.theta + state.ringSpin) % (Math.PI * 2);
        const normalizedTh = currentTh < 0 ? currentTh + Math.PI * 2 : currentTh;

        // Back half condition
        if (normalizedTh >= Math.PI && normalizedTh <= Math.PI * 2) {
          const p = projectRingPoint(radius * pt.rRatio, normalizedTh);
          ctx.fillStyle = pt.color;
          ctx.globalAlpha = pt.alpha * 0.7;
          ctx.beginPath();
          ctx.arc(p.x, p.y, pt.size * p.scale, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      });

      // Orbiting Energy Comets / Pulses (Back half)
      const cometCount = 3;
      for (let c = 0; c < cometCount; c++) {
        const cometAngle = (Date.now() * 0.0008 + c * ((Math.PI * 2) / cometCount)) % (Math.PI * 2);
        if (cometAngle >= Math.PI && cometAngle <= Math.PI * 2) {
          const cometR = rMainBIn + (c % 2) * 26 + 10;
          const p = projectRingPoint(cometR, cometAngle);

          // Glowing comet head
          ctx.fillStyle = isDark ? '#ffffff' : '#4c1d95';
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3 * p.scale, 0, Math.PI * 2);
          ctx.fill();

          // Trailing comet wave
          for (let tail = 1; tail <= 12; tail++) {
            const tailAngle = cometAngle - tail * 0.035;
            if (tailAngle >= Math.PI) {
              const tp = projectRingPoint(cometR, tailAngle);
              ctx.fillStyle = isDark
                ? `rgba(56, 189, 248, ${(1 - tail / 12) * 0.45})`
                : `rgba(168, 85, 247, ${(1 - tail / 12) * 0.35})`;
              ctx.beginPath();
              ctx.arc(tp.x, tp.y, (3 - tail * 0.2) * tp.scale, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // =========================================================================
      // 3. SATURN PLANET GLOBE (Sphere with Atmospheric Cloud Bands)
      // =========================================================================
      // Planet base disk
      const planetGrad = ctx.createRadialGradient(
        cx - radius * 0.35,
        cy - radius * 0.4,
        radius * 0.1,
        cx,
        cy,
        radius
      );

      if (isDark) {
        planetGrad.addColorStop(0, '#2a443c');
        planetGrad.addColorStop(0.35, '#162b25');
        planetGrad.addColorStop(0.7, '#0b1915');
        planetGrad.addColorStop(1, '#040908');
      } else {
        planetGrad.addColorStop(0, '#ffffff');
        planetGrad.addColorStop(0.3, '#f5f3ff');
        planetGrad.addColorStop(0.65, '#ede9fe');
        planetGrad.addColorStop(1, '#c4b5fd');
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = planetGrad;
      ctx.fill();
      ctx.clip(); // Clip atmospheric bands and ring shadow inside sphere!

      // Atmospheric cloud bands (Iconic Saturn stripes)
      const bandStripes = [
        { yRel: -0.65, h: 22, color: isDark ? 'rgba(168, 85, 247, 0.18)' : 'rgba(147, 51, 234, 0.12)' },
        { yRel: -0.42, h: 18, color: isDark ? 'rgba(52, 211, 153, 0.14)' : 'rgba(16, 185, 129, 0.1)' },
        { yRel: -0.22, h: 24, color: isDark ? 'rgba(250, 204, 21, 0.12)' : 'rgba(245, 158, 11, 0.08)' },
        { yRel: 0.0, h: 28, color: isDark ? 'rgba(56, 189, 248, 0.16)' : 'rgba(99, 102, 241, 0.1)' },
        { yRel: 0.25, h: 20, color: isDark ? 'rgba(192, 132, 252, 0.2)' : 'rgba(168, 85, 247, 0.14)' },
        { yRel: 0.48, h: 16, color: isDark ? 'rgba(52, 211, 153, 0.12)' : 'rgba(16, 185, 129, 0.08)' },
        { yRel: 0.68, h: 22, color: isDark ? 'rgba(168, 85, 247, 0.18)' : 'rgba(147, 51, 234, 0.12)' },
      ];

      bandStripes.forEach((stripe) => {
        ctx.fillStyle = stripe.color;
        ctx.fillRect(cx - radius, cy + stripe.yRel * radius - stripe.h / 2, radius * 2, stripe.h);
      });

      // Planetary Ring Shadow (Noticeable in real Saturn: ring casts dark shadow across surface)
      ctx.beginPath();
      const shadowP1 = projectRingPoint(radius * 1.25, 0.15);
      const shadowP2 = projectRingPoint(radius * 1.25, Math.PI * 0.85);
      ctx.moveTo(shadowP1.x, shadowP1.y - 12);
      ctx.lineTo(shadowP2.x, shadowP2.y - 12);
      ctx.lineTo(shadowP2.x, shadowP2.y + 14);
      ctx.lineTo(shadowP1.x, shadowP1.y + 14);
      ctx.closePath();
      ctx.fillStyle = isDark ? 'rgba(0, 0, 0, 0.55)' : 'rgba(15, 23, 42, 0.25)';
      ctx.fill();

      // Latitude Parallels
      const parallels = [-0.6, -0.3, 0, 0.3, 0.6];
      parallels.forEach((lat) => {
        ctx.beginPath();
        const steps = 36;
        const phi = Math.PI / 2 + lat;
        let started = false;
        for (let s = 0; s <= steps; s++) {
          const theta = (s / steps) * Math.PI * 2;
          const p = projectSpherePoint(radius, theta, phi);
          if (p.z > -15) {
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
        ctx.strokeStyle = isDark ? 'rgba(52, 211, 153, 0.22)' : 'rgba(124, 58, 237, 0.18)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Longitude Meridians
      for (let m = 0; m < 8; m++) {
        const theta = (m / 8) * Math.PI * 2;
        ctx.beginPath();
        let started = false;
        for (let s = 0; s <= 24; s++) {
          const phi = (s / 24) * Math.PI;
          const p = projectSpherePoint(radius, theta, phi);
          if (p.z > -15) {
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
        ctx.strokeStyle = isDark ? 'rgba(167, 139, 250, 0.2)' : 'rgba(99, 102, 241, 0.16)';
        ctx.lineWidth = 0.9;
        ctx.stroke();
      }

      // Continent & Tech Matrix Dots on sphere
      planetDots.current.forEach((dot) => {
        const p = projectSpherePoint(radius, dot.theta, dot.phi);
        if (p.z > 0) {
          const alpha = (p.z / radius) * 0.85;
          ctx.fillStyle = isDark
            ? `rgba(52, 211, 153, ${alpha})`
            : `rgba(124, 58, 237, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, dot.size * p.scale, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.restore(); // End planet clip

      // Atmospheric Rim Fresnel Glow
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = isDark ? 'rgba(167, 139, 250, 0.55)' : 'rgba(124, 58, 237, 0.4)';
      ctx.lineWidth = 2.2;
      ctx.stroke();

      // =========================================================================
      // 4. SATURN RINGS - FRONT HALF (theta: 0 -> PI, sweeps across front of globe)
      // =========================================================================
      // Ring C (Crepe) - Translucent, planet shows through
      drawRingBand(rCrepeIn, rCrepeOut, 0, Math.PI, isDark ? 'rgba(168, 85, 247, 0.22)' : 'rgba(147, 51, 234, 0.16)', null);
      // Ring B (Dense Main Ring) - Vibrant, thick
      drawRingBand(rMainBIn, rMainBOut, 0, Math.PI, isDark ? 'rgba(192, 132, 252, 0.52)' : 'rgba(168, 85, 247, 0.38)', null);
      // Cassini Division front contour
      drawRingArc(rMainBOut, 0, Math.PI, isDark ? 'rgba(0,0,0,0.45)' : 'rgba(15,23,42,0.18)', 1.5);
      // Ring A (Outer Ring)
      drawRingBand(rMainAIn, rMainAOut, 0, Math.PI, isDark ? 'rgba(56, 189, 248, 0.36)' : 'rgba(99, 102, 241, 0.28)', null);
      // F Ring hairline
      drawRingArc(rFring, 0, Math.PI, ringRimColor, 1.2);

      // Fine concentric frequency waves (Front half)
      for (let fw = 0; fw < 4; fw++) {
        const fwR = rMainBIn + fw * 14 + 6;
        const fwAlpha = isDark ? 0.42 : 0.28;
        drawRingArc(fwR, 0, Math.PI, `rgba(52, 211, 153, ${fwAlpha})`, 1, [4, 4]);
      }

      // Orbiting particles (Front half)
      ringParticles.current.forEach((pt) => {
        const currentTh = (pt.theta + state.ringSpin) % (Math.PI * 2);
        const normalizedTh = currentTh < 0 ? currentTh + Math.PI * 2 : currentTh;

        // Front half condition
        if (normalizedTh >= 0 && normalizedTh < Math.PI) {
          const p = projectRingPoint(radius * pt.rRatio, normalizedTh);
          ctx.fillStyle = pt.color;
          ctx.globalAlpha = pt.alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, (pt.size + 0.4) * p.scale, 0, Math.PI * 2);
          ctx.fill();

          // Particle sparkle halo
          if (pt.size > 2) {
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(p.x, p.y, 1.2 * p.scale, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.globalAlpha = 1;
        }
      });

      // Orbiting Energy Comets / Pulses (Front half)
      for (let c = 0; c < cometCount; c++) {
        const cometAngle = (Date.now() * 0.0008 + c * ((Math.PI * 2) / cometCount)) % (Math.PI * 2);
        if (cometAngle >= 0 && cometAngle < Math.PI) {
          const cometR = rMainBIn + (c % 2) * 26 + 10;
          const p = projectRingPoint(cometR, cometAngle);

          // Glowing comet head with bright flare
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(p.x, p.y, 4 * p.scale, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = isDark ? '#38bdf8' : '#7c3aed';
          ctx.lineWidth = 2 * p.scale;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 7 * p.scale, 0, Math.PI * 2);
          ctx.stroke();

          // Trailing comet wave
          for (let tail = 1; tail <= 14; tail++) {
            const tailAngle = cometAngle - tail * 0.035;
            if (tailAngle >= 0) {
              const tp = projectRingPoint(cometR, tailAngle);
              ctx.fillStyle = isDark
                ? `rgba(56, 189, 248, ${(1 - tail / 14) * 0.6})`
                : `rgba(168, 85, 247, ${(1 - tail / 14) * 0.45})`;
              ctx.beginPath();
              ctx.arc(tp.x, tp.y, (3.5 - tail * 0.2) * tp.scale, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // =========================================================================
      // 5. ORBITING TECHNOLOGIES & BADGES (Docker, Python, OWL, etc.)
      // =========================================================================
      let maxZ = -9999;
      let focusedNodeIdx = 0;

      const projectedTech = nodes3D.current.map((item, idx) => {
        // Continuous orbital progress
        item.theta += item.speed;
        const currentR = radius * item.orbitalRadiusMult;
        const p = projectSpherePoint(currentR, item.theta, item.phi);

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

      // Sort by Z for proper depth
      projectedTech.sort((a, b) => a.screenZ - b.screenZ);

      // Connecting subtle data vectors
      projectedTech.forEach((node) => {
        if (node.screenZ > -30) {
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(node.screenX, node.screenY);
          ctx.strokeStyle = isDark ? 'rgba(167, 139, 250, 0.14)' : 'rgba(124, 58, 237, 0.12)';
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      });

      // Render Technology Badges
      projectedTech.forEach((node, idx) => {
        const isFacing = node.screenZ > 0;
        const isFocus = idx === projectedTech.length - 1; // Highest Z (front and center)
        const alpha = Math.max(0.35, Math.min(1, (node.screenZ + 120) / 240));
        const badgeRadius = (isFocus ? 13 : 9) * node.scale;

        // Glowing node core
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.screenX, node.screenY, badgeRadius, 0, Math.PI * 2);
        ctx.fill();

        // Pulsing focus halo ring when technology reaches user view (matches Docker in Image 2)
        if (isFocus) {
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2.2 * node.scale;
          ctx.stroke();

          const pulseRadius = badgeRadius + Math.sin(Date.now() * 0.006) * 5 + 11;
          ctx.beginPath();
          ctx.arc(node.screenX, node.screenY, pulseRadius, 0, Math.PI * 2);
          ctx.strokeStyle = node.color;
          ctx.lineWidth = 1.4;
          ctx.stroke();
        }

        // Display tech name pill for front-facing nodes
        if (isFacing || isFocus) {
          ctx.font = `${isFocus ? 'bold 13px' : '600 11px'} "Plus Jakarta Sans", sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';

          const textWidth = ctx.measureText(node.name).width;
          const pillHeight = isFocus ? 22 : 18;
          const pillY = node.screenY - badgeRadius - pillHeight - 5;

          // Pill container
          ctx.fillStyle = isDark
            ? `rgba(13, 23, 20, ${alpha * 0.92})`
            : `rgba(255, 255, 255, ${alpha * 0.95})`;
          ctx.beginPath();
          ctx.roundRect(
            node.screenX - textWidth / 2 - 9,
            pillY,
            textWidth + 18,
            pillHeight,
            7
          );
          ctx.fill();

          ctx.strokeStyle = isFocus ? node.color : isDark ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.12)';
          ctx.lineWidth = isFocus ? 1.5 : 1;
          ctx.stroke();

          // Pill Text
          ctx.fillStyle = isFocus
            ? node.color
            : isDark
            ? `rgba(248, 250, 252, ${alpha})`
            : `rgba(15, 23, 42, ${alpha})`;
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
    planetState.current.isDown = true;
    planetState.current.lastX = e.clientX;
    planetState.current.lastY = e.clientY;
  };

  const handleMouseMove = (e) => {
    if (!planetState.current.isDown) return;
    const deltaX = e.clientX - planetState.current.lastX;
    const deltaY = e.clientY - planetState.current.lastY;

    planetState.current.ry += deltaX * 0.007;
    planetState.current.rx -= deltaY * 0.007;

    planetState.current.lastX = e.clientX;
    planetState.current.lastY = e.clientY;
  };

  const handleMouseUp = () => {
    planetState.current.isDown = false;
  };

  return (
    <div
      className={`relative w-full flex items-center justify-center select-none overflow-visible bg-transparent ${className}`}
    >
      {/* 3D Pure Canvas Saturn Planetary System with Orbiting Waves */}
      <div
        className="relative w-full max-w-[950px] h-[520px] sm:h-[600px] lg:h-[650px] cursor-grab active:cursor-grabbing flex items-center justify-center"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={(e) => {
          if (e.touches[0]) {
            planetState.current.isDown = true;
            planetState.current.lastX = e.touches[0].clientX;
            planetState.current.lastY = e.touches[0].clientY;
          }
        }}
        onTouchMove={(e) => {
          if (!planetState.current.isDown || !e.touches[0]) return;
          const deltaX = e.touches[0].clientX - planetState.current.lastX;
          const deltaY = e.touches[0].clientY - planetState.current.lastY;
          planetState.current.ry += deltaX * 0.007;
          planetState.current.rx -= deltaY * 0.007;
          planetState.current.lastX = e.touches[0].clientX;
          planetState.current.lastY = e.touches[0].clientY;
        }}
        onTouchEnd={handleMouseUp}
      >
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
    </div>
  );
}
