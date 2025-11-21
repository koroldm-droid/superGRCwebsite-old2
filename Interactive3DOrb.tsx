import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  theta: number;
  phi: number;
  bandIndex: number;
  size: number;
}

export function Interactive3DOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const mouseCanvasRef = useRef({ x: 250, y: 250 });
  const timeRef = useRef(0);
  const particlesRef = useRef<Particle[]>([]);
  const rotationRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Set canvas size
    const size = 500;
    canvas.width = size;
    canvas.height = size;

    const radius = 120;

    // Create particles along distinct wave bands like the reference image
    const particles: Particle[] = [];
    const numBands = 12; // Number of wave bands wrapping around sphere
    const particlesPerBand = 250; // Dense particles along each band
    
    for (let band = 0; band < numBands; band++) {
      for (let i = 0; i < particlesPerBand; i++) {
        // Create particles along parametric wave paths
        const t = (i / particlesPerBand) * Math.PI * 2;
        const bandOffset = (band / numBands) * Math.PI;
        
        // Create flowing wave pattern
        const theta = t;
        const phi = Math.PI * 0.5 + Math.sin(t * 3 + bandOffset) * 0.8;
        
        particles.push({
          x: radius * Math.sin(phi) * Math.cos(theta),
          y: radius * Math.sin(phi) * Math.sin(theta),
          z: radius * Math.cos(phi),
          theta,
          phi,
          bandIndex: band,
          size: 1.2 + Math.random() * 0.8,
        });
      }
    }

    particlesRef.current = particles;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      };
      mouseCanvasRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      timeRef.current += 0.015;
      
      // Clear with transparency
      ctx.clearRect(0, 0, size, size);

      // Gentle auto-rotation
      rotationRef.current.y += 0.004;
      rotationRef.current.x = Math.sin(timeRef.current * 0.3) * 0.15 + mouseRef.current.y * 0.25;

      // Process and sort particles
      const sortedParticles = [...particlesRef.current].map(particle => {
        // Flowing wave animation - creates the distinct band motion
        const waveSpeed = timeRef.current * 1.5;
        const bandWave = Math.sin(particle.theta * 3 + particle.bandIndex * 0.5 + waveSpeed) * 25;
        const crossWave = Math.sin(particle.phi * 5 + waveSpeed * 1.2) * 18;
        const pulseWave = Math.sin(particle.bandIndex * 0.8 + timeRef.current * 2) * 10;
        
        const waveOffset = bandWave + crossWave + pulseWave;
        
        // Apply wave displacement
        const currentRadius = Math.sqrt(particle.x ** 2 + particle.y ** 2 + particle.z ** 2);
        const waveFactor = currentRadius > 0 ? (currentRadius + waveOffset) / currentRadius : 1;
        
        let px = particle.x * waveFactor;
        let py = particle.y * waveFactor;
        let pz = particle.z * waveFactor;

        // 3D Rotation
        const cosY = Math.cos(rotationRef.current.y);
        const sinY = Math.sin(rotationRef.current.y);
        const cosX = Math.cos(rotationRef.current.x);
        const sinX = Math.sin(rotationRef.current.x);

        // Rotate Y-axis
        let x = px * cosY - pz * sinY;
        let z = px * sinY + pz * cosY;
        
        // Rotate X-axis
        let y = py * cosX - z * sinX;
        z = py * sinX + z * cosX;

        return { ...particle, x, y, z, waveOffset };
      }).sort((a, b) => b.z - a.z);

      // Render particles with band-based effects
      sortedParticles.forEach((particle) => {
        // Perspective projection
        const scale = 400 / (400 + particle.z);
        let x2d = particle.x * scale + size / 2;
        let y2d = particle.y * scale + size / 2;

        // Mouse interaction
        const dx = mouseCanvasRef.current.x - x2d;
        const dy = mouseCanvasRef.current.y - y2d;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;
        
        let mouseProximity = 0;
        if (distance < maxDistance) {
          const normalizedDist = distance / maxDistance;
          const easedFalloff = 1 - normalizedDist ** 3;
          const force = easedFalloff * 20;
          const angle = Math.atan2(dy, dx);
          x2d -= Math.cos(angle) * force;
          y2d -= Math.sin(angle) * force;
          mouseProximity = easedFalloff;
        }

        // Depth and wave intensity for sophisticated rendering
        const depth = (particle.z + 250) / 500;
        const bandPhase = (particle.theta * 3 + particle.bandIndex * 0.5 + timeRef.current * 1.5);
        const waveIntensity = (Math.sin(bandPhase) + 1) / 2;
        
        // Size varies with wave intensity - creates the band effect
        const baseSize = particle.size * (0.8 + waveIntensity * 0.7);
        const finalSize = Math.max(0.4, scale * baseSize * 1.3);

        // Exact Electric Lime RGB(207, 233, 40)
        const r = 207;
        const g = 233;
        const b = 40;
        
        // Alpha varies to create distinct bands
        const baseAlpha = 0.7 + depth * 0.25;
        const waveAlpha = waveIntensity * 0.2;
        const mouseAlpha = mouseProximity * 0.1;
        const alpha = Math.min(0.95, baseAlpha + waveAlpha + mouseAlpha);

        // Main particle
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x2d, y2d, finalSize, 0, Math.PI * 2);
        ctx.fill();

        // Glow for wave peaks - creates the bright bands
        if (waveIntensity > 0.6 || mouseProximity > 0.3) {
          const glowStrength = Math.max(waveIntensity, mouseProximity);
          
          // Inner glow
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${glowStrength * 0.35 * depth})`;
          ctx.beginPath();
          ctx.arc(x2d, y2d, finalSize * 2, 0, Math.PI * 2);
          ctx.fill();
          
          // Outer glow for band definition
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${glowStrength * 0.18 * depth})`;
          ctx.beginPath();
          ctx.arc(x2d, y2d, finalSize * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Brightest band peaks get white highlights
        if (waveIntensity > 0.8 && depth > 0.5) {
          ctx.fillStyle = `rgba(255, 255, 255, ${0.5 * depth * waveIntensity})`;
          ctx.beginPath();
          ctx.arc(x2d, y2d, finalSize * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ maxWidth: '100%', height: 'auto', background: 'transparent' }}
    />
  );
}
