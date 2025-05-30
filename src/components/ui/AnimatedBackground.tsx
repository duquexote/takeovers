"use client";

import { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  variant: 'dots' | 'grid' | 'waves';
  className?: string;
  color?: string;
}

export default function AnimatedBackground({ variant, className = '', color = 'rgba(100, 100, 255, 0.5)' }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match parent container
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    let animationFrameId: number;
    
    // Different animation patterns
    if (variant === 'dots') {
      // Dots pattern - tech-inspired floating dots with connections
      const dots: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
      const dotCount = Math.floor(canvas.width * canvas.height / 15000); // Adjust density
      
      // Create dots
      for (let i = 0; i < dotCount; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1
        });
      }
      
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw and update dots
        dots.forEach((dot, i) => {
          // Update position
          dot.x += dot.vx;
          dot.y += dot.vy;
          
          // Bounce off edges
          if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
          if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
          
          // Draw dot
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
          
          // Connect nearby dots
          dots.forEach((otherDot, j) => {
            if (i !== j) {
              const dx = dot.x - otherDot.x;
              const dy = dot.y - otherDot.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(dot.x, dot.y);
                ctx.lineTo(otherDot.x, otherDot.y);
                ctx.strokeStyle = color.replace(/[^,]+(?=\))/, (match) => {
                  const opacity = parseFloat(match) * (0.4 * (1 - distance / 100));
                  return opacity.toString();
                });
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          });
        });
        
        animationFrameId = requestAnimationFrame(animate);
      };
      
      animate();
    } else if (variant === 'grid') {
      // Grid pattern - moving tech grid
      const gridSize = 30;
      let offset = 0;
      
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        offset = (offset + 0.2) % gridSize;
        
        // Draw vertical lines
        for (let x = offset; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.strokeStyle = 'rgba(100, 100, 255, 0.1)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        
        // Draw horizontal lines
        for (let y = offset; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.strokeStyle = 'rgba(100, 100, 255, 0.1)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        
        // Draw intersection points
        for (let x = offset; x < canvas.width; x += gridSize) {
          for (let y = offset; y < canvas.height; y += gridSize) {
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
          }
        }
        
        animationFrameId = requestAnimationFrame(animate);
      };
      
      animate();
    } else if (variant === 'waves') {
      // Waves pattern - smooth flowing waves
      const waves = 3;
      const waveAmplitude = 20;
      let time = 0;
      
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        time += 0.01;
        
        for (let wave = 0; wave < waves; wave++) {
          ctx.beginPath();
          
          const waveOffset = wave * 20;
          const waveSpeed = 0.5 + wave * 0.2;
          
          for (let x = 0; x <= canvas.width; x += 5) {
            const y = Math.sin(x * 0.01 + time * waveSpeed) * waveAmplitude + 
                     Math.sin(x * 0.02 + time * (waveSpeed * 0.8)) * (waveAmplitude * 0.5) + 
                     canvas.height / 2 + waveOffset;
            
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          
          ctx.strokeStyle = color.replace(/[^,]+(?=\))/, (match) => {
            const opacity = parseFloat(match) * (0.5 - wave * 0.1);
            return opacity.toString();
          });
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        
        animationFrameId = requestAnimationFrame(animate);
      };
      
      animate();
    }
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant, color]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full -z-10 ${className}`}
    />
  );
}
