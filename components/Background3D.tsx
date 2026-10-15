"use client";

import { useEffect, useRef } from "react";

export default function Background3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let animationId = 0;
    let time = 0;

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const spacing = 105;
    const nodes: {
      x: number;
      y: number;
      z: number;
      phase: number;
    }[] = [];

    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;

      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes.length = 0;

      const cols = Math.ceil(width / spacing) + 3;
      const rows = Math.ceil(height / spacing) + 3;

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          nodes.push({
            x: col * spacing,
            y: row * spacing,
            z: Math.sin(col * 0.7 + row * 0.4) * 18,
            phase: col * 0.8 + row * 0.6,
          });
        }
      }
    }

    function drawCube(
      x: number,
      y: number,
      size: number,
      glow: number,
      phase: number
    ) {
      const half = size / 2;
      const depth = size * 0.32;

      const front = [
        [x - half, y - half],
        [x + half, y - half],
        [x + half, y + half],
        [x - half, y + half],
      ];

      const back = [
        [x - half + depth, y - half - depth],
        [x + half + depth, y - half - depth],
        [x + half + depth, y + half - depth],
        [x - half + depth, y + half - depth],
      ];

      const pulse = (Math.sin(time * 0.025 + phase) + 1) / 2;
      const alpha = 0.14 + pulse * 0.23 + glow * 0.48;

      ctx!.save();
      ctx!.beginPath();

      ctx!.strokeStyle = `rgba(34, 211, 238, ${Math.min(alpha, 0.95)})`;
      ctx!.lineWidth = glow > 0.35 ? 1 : 0.6;
      ctx!.shadowColor = "#22d3ee";
      ctx!.shadowBlur = 2 + glow * 8;

      for (let i = 0; i < 4; i++) {
        const next = (i + 1) % 4;

        ctx!.moveTo(front[i][0], front[i][1]);
        ctx!.lineTo(front[next][0], front[next][1]);

        ctx!.moveTo(back[i][0], back[i][1]);
        ctx!.lineTo(back[next][0], back[next][1]);

        ctx!.moveTo(front[i][0], front[i][1]);
        ctx!.lineTo(back[i][0], back[i][1]);
      }

      ctx!.stroke();
      ctx!.restore();
    }

    function animate() {
      time += 1;

      ctx!.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / spacing) + 3;
      const rows = Math.ceil(height / spacing) + 3;

      const projected = nodes.map((node) => {
        const waveX = Math.sin(time * 0.012 + node.phase) * 7;
        const waveY = Math.cos(time * 0.014 + node.phase) * 8;

        let x = node.x + waveX;
        let y = node.y + waveY;

        const dx = x - mouse.x;
        const dy = y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const radius = 190;

        let glow = 0;

        if (mouse.active && distance < radius) {
          const force = (1 - distance / radius) ** 2;
          glow = force;

          // Cursor ke aas-paas zig-zag displacement
          const angle = Math.atan2(dy, dx);
          const zigzag = Math.sin(
            angle * 5 + time * 0.035 + node.phase
          );

          x += Math.cos(angle) * force * 34;
          y += Math.sin(angle) * force * 34;
          x += zigzag * force * 13;
          y -= zigzag * force * 13;
        }

        return { x, y, glow, phase: node.phase };
      });

      // Connected zig-zag network
      ctx!.save();
      ctx!.lineWidth = 0.8;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const index = row * cols + col;
          const point = projected[index];

          if (!point) continue;

          const right = projected[index + 1];
          const below = projected[index + cols];
          const diagonal = projected[index + cols + 1];

          const drawLine = (
            target: typeof point | undefined,
            diagonalLine = false
          ) => {
            if (!target) return;

            const glow = Math.max(point.glow, target.glow);
            const alpha = 0.035 + glow * 0.30;

            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx!.shadowColor = "#22d3ee";
            ctx!.shadowBlur = glow * 18;

            ctx!.moveTo(point.x, point.y);

            if (diagonalLine) {
              const midX = (point.x + target.x) / 2;
              const midY = (point.y + target.y) / 2;

              ctx!.lineTo(
                midX + Math.sin(time * 0.02 + point.phase) * glow * 12,
                midY + Math.cos(time * 0.02 + point.phase) * glow * 12
              );
            }

            ctx!.lineTo(target.x, target.y);
            ctx!.stroke();
          };

          drawLine(right);
          drawLine(below);

          // Extra diagonal lines create the zig-zag effect near cursor
          if (point.glow > 0.12) {
            drawLine(diagonal, true);

            if (col > 0) {
              drawLine(projected[index + cols - 1], true);
            }
          }
        }
      }

      ctx!.restore();

      // Wireframe cubes
      for (let i = 0; i < projected.length; i++) {
        const point = projected[i];

        if (i % 3 === 0 || point.glow > 0.08) {
          const size = 2 + point.glow * 2;

          drawCube(
            point.x,
            point.y,
            size,
            point.glow,
            point.phase
          );
        }

        // Glowing nodes
        if (point.glow > 0.05) {
          ctx!.beginPath();
          ctx!.arc(point.x, point.y, 1.5 + point.glow * 3, 0, Math.PI * 2);
          ctx!.fillStyle = "#a5f3fc";
          ctx!.shadowColor = "#22d3ee";
          ctx!.shadowBlur = 12 + point.glow * 25;
          ctx!.fill();
          ctx!.shadowBlur = 0;
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    function onMouseMove(event: MouseEvent) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    }

    function onMouseLeave() {
      mouse.active = false;
    }

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-3d" aria-hidden="true" />;
}