import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const dot = dotRef.current;
    if (!dot) return;
    document.documentElement.classList.add('custom-cursor');

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let hovering = false;
    let raf = 0;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const over = (e) => {
      const t = e.target;
      hovering = !!(t.closest && t.closest('a, button, input, textarea, select, label, [data-cursor]'));
    };

    const loop = () => {
      rx += (x - rx) * 0.2;
      ry += (y - ry) * 0.2;
      const s = hovering ? 40 : 12;
      dot.style.transform = `translate(${rx - s / 2}px, ${ry - s / 2}px)`;
      dot.style.width = s + 'px';
      dot.style.height = s + 'px';
      dot.style.opacity = hovering ? '0.5' : '0.85';
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over, { passive: true });
    loop();

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove('custom-cursor');
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] rounded-full border border-gold bg-gold/20 transition-[width,height,opacity] duration-200"
      style={{ width: 12, height: 12 }}
    />
  );
}