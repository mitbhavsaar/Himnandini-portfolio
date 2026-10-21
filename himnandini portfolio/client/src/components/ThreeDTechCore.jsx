import React, { useRef, useEffect, useState, useCallback } from 'react';
import { RotateCw, Sparkles, Layers, Compass, Zap } from 'lucide-react';

const TECH_NODES = [
  { name: 'Odoo 19', tag: 'Core ERP', color: '#a855f7', size: 9 },
  { name: 'Python ORM', tag: 'Backend', color: '#38bdf8', size: 8 },
  { name: 'OWL Framework', tag: 'UI Library', color: '#c084fc', size: 7.5 },
  { name: 'PostgreSQL', tag: 'Relational DB', color: '#38bdf8', size: 8 },
  { name: 'Azure OCR', tag: 'AI Document', color: '#60a5fa', size: 7.5 },
  { name: 'Power BI', tag: 'Analytics', color: '#facc15', size: 7 },
  { name: 'Docker', tag: 'Container', color: '#38bdf8', size: 6.5 },
  { name: 'REST APIs', tag: 'Integrations', color: '#34d399', size: 7 },
  { name: 'QWeb Reports', tag: 'Templating', color: '#fb923c', size: 6.5 },
  { name: 'AWS Cloud', tag: 'DevOps', color: '#f59e0b', size: 7 },
  { name: 'Nginx Proxy', tag: 'Web Server', color: '#10b981', size: 6.5 },
  { name: 'JavaScript', tag: 'ES6+ Logic', color: '#facc15', size: 7 },
];

/**
 * ThreeDTechCore
 * Interactive 3D Holographic Tech Core / Sphere
 * - 3D vector projection with Euler rotation
 * - Full mouse drag-to-rotate with physics inertia
 * - Dynamic 3D depth-faded wireframe connections
 * - Orbiting planetary/electron rings
 * - Interactive node detection with HUD tooltip
 */
export default function ThreeDTechCore({ isDark = false, className = '' }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [activeNode, setActiveNode] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [coreMode, setCoreMode] = useState('sphere'); // 'sphere' | 'rings' | 'matrix'
  const [isDragging, setIsDragging] = useState(false);

  // Rotation angles & velocities in radians
  const rotState = useRef({
    rx: 0.25,
    ry: 0.4,
    rz: 0.1,
    vx: 0.002,
    vy: 0.006,
    isDown: false,
    lastMouseX: 0,
    lastMouseY: 0,
  });

  // Calculate 3D spherical positions for nodes
  const nodes3D = useRef(
    TECH_NODES.map((node, i) => {
      const phi = Math.acos(-1 + (2 * i) / TECH_NODES.length);
      const theta = Math.sqrt(TECH_NODES.length * Math.PI) * phi;
      const radius = 140;
      return {
        ...node,
        x0: radius * Math.cos(theta) * Math.sin(phi),
        y0: radius * Math.sin(theta) * Math.sin(phi),
        z0: radius * Math.cos(phi),
        screenX: 0,
        screenY: 0,
        screenZ: 0,
        scale: 1,
      };
    })
  );

  // Floating background particles
  const particles3D = useRef(
    Array.from({ length: 48 }, () => {
      const r = 90 + Math.random() * 110;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      return {
        x0: r * Math.cos(phi) * Math.sin(theta),
        y0: r * Math.sin(phi),
        z0: r * Math.cos(phi) * Math.cos(theta),
        size: Math.random() * 2 + 0.8,
        alpha: Math.random() * 0.6 + 0.2,
      };
    })
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const fov = 420; // Field of view depth

    const render = () => {
      const parent = canvas.parentElement;
      const width = parent ? parent.clientWidth : 400;
      const height = parent ? parent.clientHeight : 400;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Auto rotation & inertia damping
      const state = rotState.current;
      if (!state.isDown) {
        if (autoRotate) {
          state.ry += state.vy;
          state.rx += state.vx * 0.5;
        }
        // Damping when released
        state.vx *= 0.94;
        state.vy = state.vy * 0.95 + (autoRotate ? 0.005 * 0.05 : 0);
      }

      const cosX = Math.cos(state.rx);
      const sinX = Math.sin(state.rx);
      const cosY = Math.cos(state.ry);
      const sinY = Math.sin(state.ry);

      // Project 3D Point to 2D Screen
      const project = (x0, y0, z0) => {
        // Rotate Y
        const x1 = x0 * cosY + z0 * sinY;
        const y1 = y0;
        const z1 = -x0 * sinY + z0 * cosY;

        // Rotate X
        const x2 = x1;
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;

        // Perspective scale
        const scale = fov / (fov + z2 + 200);
        return {
          x: cx + x2 * scale,
          y: cy + y2 * scale,
          z: z2,
          scale,
        };
      };

      // 1. Draw Central Energy Pulse Core
      const corePulse = Math.sin(Date.now() * 0.003) * 6 + 28;
      const coreGradient = ctx.createRadialGradient(cx, cy, 2, cx, cy, corePulse * 2.2);
      if (isDark) {
        coreGradient.addColorStop(0, 'rgba(167, 139, 250, 0.45)');
        coreGradient.addColorStop(0.5, 'rgba(52, 211, 153, 0.2)');
        coreGradient.addColorStop(1, 'transparent');
      } else {
        coreGradient.addColorStop(0, 'rgba(147, 51, 234, 0.35)');
        coreGradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.15)');
        coreGradient.addColorStop(1, 'transparent');
      }
      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(cx, cy, corePulse * 2.2, 0, Math.PI * 2);
      ctx.fill();

      // 2. Draw Orbiting Concentric Rings in 3D
      const rings = [
        { radius: 155, tilt: 0.45, speed: 0.004, color: isDark ? 'rgba(167,139,250,0.22)' : 'rgba(147,51,234,0.2)' },
        { radius: 180, tilt: -0.65, speed: -0.003, color: isDark ? 'rgba(52,211,153,0.25)' : 'rgba(16,185,129,0.22)' },
        { radius: 205, tilt: 1.15, speed: 0.002, color: isDark ? 'rgba(56,189,248,0.18)' : 'rgba(2,132,199,0.18)' },
      ];

      rings.forEach((ring, idx) => {
        ctx.beginPath();
        const steps = 60;
        const timeOffset = Date.now() * ring.speed;
        for (let s = 0; s <= steps; s++) {
          const theta = (s / steps) * Math.PI * 2 + timeOffset;
          const rx0 = ring.radius * Math.cos(theta);
          const ry0 = ring.radius * Math.sin(theta) * Math.sin(ring.tilt);
          const rz0 = ring.radius * Math.sin(theta) * Math.cos(ring.tilt);
          const p = project(rx0, ry0, rz0);
          if (s === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });

      // 3. Draw Background Ambient Particles
      particles3D.current.forEach((part) => {
        const p = project(part.x0, part.y0, part.z0);
        ctx.fillStyle = isDark
          ? `rgba(167, 139, 250, ${part.alpha * (p.z > 0 ? 0.9 : 0.3)})`
          : `rgba(109, 40, 217, ${part.alpha * (p.z > 0 ? 0.8 : 0.25)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.6, part.size * p.scale), 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Project Node Positions
      const projectedNodes = nodes3D.current.map((node) => {
        const p = project(node.x0, node.y0, node.z0);
        node.screenX = p.x;
        node.screenY = p.y;
        node.screenZ = p.z;
        node.scale = p.scale;
        return node;
      });

      // Sort by Z for proper 3D depth rendering
      projectedNodes.sort((a, b) => a.screenZ - b.screenZ);

      // 5. Draw 3D Connecting Wireframe Vectors
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const n1 = projectedNodes[i];
          const n2 = projectedNodes[j];
          const dx = n1.screenX - n2.screenX;
          const dy = n1.screenY - n2.screenY;
          const dist = Math.hypot(dx, dy);

          // Connect nodes within proximity
          if (dist < 135) {
            const avgZ = (n1.screenZ + n2.screenZ) / 2;
            const depthAlpha = Math.max(0.04, Math.min(0.35, (avgZ + 140) / 280));
            ctx.beginPath();
            ctx.moveTo(n1.screenX, n1.screenY);
            ctx.lineTo(n2.screenX, n2.screenY);
            ctx.strokeStyle = isDark
              ? `rgba(167, 139, 250, ${depthAlpha * 0.8})`
              : `rgba(109, 40, 217, ${depthAlpha * 0.7})`;
            ctx.lineWidth = Math.max(0.5, depthAlpha * 2);
            ctx.stroke();
          }
        }
      }

      // 6. Draw Nodes & Badges
      projectedNodes.forEach((node) => {
        const isHovered = activeNode && activeNode.name === node.name;
        const radius = Math.max(4, node.size * node.scale * (isHovered ? 1.4 : 1));
        const depthAlpha = Math.max(0.3, Math.min(1, (node.screenZ + 160) / 320));

        // Node Glow Halo
        const glowGrad = ctx.createRadialGradient(
          node.screenX,
          node.screenY,
          radius * 0.2,
          node.screenX,
          node.screenY,
          radius * 2.8
        );
        glowGrad.addColorStop(0, node.color);
        glowGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(node.screenX, node.screenY, radius * 2.8, 0, Math.PI * 2);
        ctx.fill();

        // Node Core Circle
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.screenX, node.screenY, radius, 0, Math.PI * 2);
        ctx.fill();

        // High-depth border
        ctx.strokeStyle = isDark ? '#ffffff' : '#1e1b4b';
        ctx.lineWidth = 1.2 * node.scale;
        ctx.stroke();

        // Text Label (only for nodes in the foreground Z > -30)
        if (node.screenZ > -40 || isHovered) {
          ctx.font = `${isHovered ? 'bold ' : ''}${Math.round(10.5 * Math.max(0.8, node.scale))}px "Plus Jakarta Sans", sans-serif`;
          ctx.fillStyle = isDark
            ? `rgba(248, 250, 252, ${depthAlpha})`
            : `rgba(15, 23, 42, ${depthAlpha})`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          ctx.fillText(node.name, node.screenX, node.screenY + radius + 4);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [autoRotate, isDark, activeNode, coreMode]);

  // Mouse & Touch Interaction Handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    rotState.current.isDown = true;
    rotState.current.lastMouseX = e.clientX;
    rotState.current.lastMouseY = e.clientY;
  };

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (rotState.current.isDown) {
      const deltaX = e.clientX - rotState.current.lastMouseX;
      const deltaY = e.clientY - rotState.current.lastMouseY;

      rotState.current.vy = deltaX * 0.005;
      rotState.current.vx = -deltaY * 0.005;
      rotState.current.ry += deltaX * 0.008;
      rotState.current.rx -= deltaY * 0.008;

      rotState.current.lastMouseX = e.clientX;
      rotState.current.lastMouseY = e.clientY;
    } else {
      // Check node hover collision
      let hovered = null;
      for (const node of nodes3D.current) {
        const dist = Math.hypot(node.screenX - mouseX, node.screenY - mouseY);
        if (dist < 20) {
          hovered = node;
          break;
        }
      }
      setActiveNode(hovered);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    rotState.current.isDown = false;
  };

  const handleReset = () => {
    rotState.current.rx = 0.25;
    rotState.current.ry = 0.4;
    rotState.current.vx = 0.002;
    rotState.current.vy = 0.006;
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-3xl overflow-hidden glass-panel border border-slate-200/90 dark:border-white/10 shadow-2xl backdrop-blur-xl transition-all ${className}`}
    >
      {/* 3D Canvas Scene */}
      <div className="relative w-full h-[400px] sm:h-[460px] cursor-grab active:cursor-grabbing select-none">
        <canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="w-full h-full block"
        />

        {/* HUD Top-Left Status Bar */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 dark:bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs font-mono shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold tracking-wide">3D ENTERPRISE CORE</span>
          <span className="text-slate-400 text-[10px]">60 FPS</span>
        </div>

        {/* HUD Bottom-Left Drag Hint */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 bg-white/70 dark:bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/60 dark:border-white/10">
          <Compass className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Click &amp; Drag to rotate in 3D</span>
        </div>

        {/* Active Node Tooltip Card (Dynamic 3D HUD) */}
        {activeNode && (
          <div
            className="absolute pointer-events-none transition-all duration-150 transform -translate-x-1/2 -translate-y-full mb-3 z-30"
            style={{
              left: `${activeNode.screenX}px`,
              top: `${activeNode.screenY - 12}px`,
            }}
          >
            <div className="px-3 py-2 rounded-xl bg-slate-950/90 dark:bg-[#0d1715]/95 backdrop-blur-md border border-purple-500/40 text-white shadow-xl shadow-purple-950/30 min-w-[130px] text-center">
              <div className="font-bold text-xs flex items-center justify-center gap-1.5" style={{ color: activeNode.color }}>
                <Zap className="w-3 h-3" />
                {activeNode.name}
              </div>
              <div className="text-[10px] text-slate-400 font-medium mt-0.5">
                {activeNode.tag}
              </div>
            </div>
          </div>
        )}

        {/* HUD Top-Right Control Buttons */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 z-20">
          <button
            type="button"
            onClick={() => setAutoRotate(!autoRotate)}
            title={autoRotate ? 'Pause Rotation' : 'Auto Rotate'}
            className={`p-2 rounded-xl backdrop-blur-md border text-xs transition-all ${
              autoRotate
                ? 'bg-purple-600 text-white border-purple-400 shadow-md shadow-purple-600/30'
                : 'bg-white/80 dark:bg-white/10 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
          </button>
          <button
            type="button"
            onClick={handleReset}
            title="Reset Orientation"
            className="p-2 rounded-xl bg-white/80 dark:bg-white/10 text-slate-700 dark:text-slate-300 backdrop-blur-md border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/20 transition-all text-xs"
          >
            <Layers className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
