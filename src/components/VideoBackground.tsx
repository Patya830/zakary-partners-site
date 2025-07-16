import { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
  scrollY: number;
}

const VideoBackground = ({ scrollY }: VideoBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [time, setTime] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      setTime(prev => prev + 0.005); // Очень медленная анимация

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Создаем 3D эффект с параллаксом
      const parallaxY = scrollY * 0.3;

      // Рисуем абстрактные 3D элементы юридической тематики
      drawLegalElements(ctx, canvas.width, canvas.height, time, parallaxY);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [scrollY]);

  const drawLegalElements = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number, parallaxY: number) => {
    // Градиентный фон
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, 'rgba(20, 33, 61, 0.9)');
    gradient.addColorStop(0.5, 'rgba(139, 69, 19, 0.3)');
    gradient.addColorStop(1, 'rgba(20, 33, 61, 0.9)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Плавающие элементы правосудия
    drawFloatingScales(ctx, width, height, time, parallaxY);
    drawLegalDocuments(ctx, width, height, time, parallaxY);
    drawAbstractColumns(ctx, width, height, time, parallaxY);
  };

  const drawFloatingScales = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number, parallaxY: number) => {
    ctx.save();
    
    const scaleSize = 60;
    const x = width * 0.8 + Math.sin(time * 0.5) * 50;
    const y = height * 0.3 + Math.cos(time * 0.3) * 30 + parallaxY;

    // 3D тень
    ctx.shadowColor = 'rgba(212, 175, 55, 0.3)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;

    // Золотые весы
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.7)';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(212, 175, 55, 0.2)';

    // Основа весов
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - scaleSize/2, y + scaleSize/3);
    ctx.lineTo(x + scaleSize/2, y + scaleSize/3);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Чаши весов
    const plateY = y + scaleSize/3;
    ctx.beginPath();
    ctx.ellipse(x - scaleSize/2, plateY, scaleSize/4, scaleSize/8, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(x + scaleSize/2, plateY, scaleSize/4, scaleSize/8, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  };

  const drawLegalDocuments = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number, parallaxY: number) => {
    ctx.save();

    for (let i = 0; i < 3; i++) {
      const x = width * (0.2 + i * 0.3) + Math.sin(time * 0.4 + i) * 20;
      const y = height * (0.6 + i * 0.1) + Math.cos(time * 0.2 + i) * 15 + parallaxY * 0.5;

      // 3D эффект документа
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 3;

      ctx.fillStyle = 'rgba(245, 245, 220, 0.8)';
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
      ctx.lineWidth = 1;

      // Документ
      const docWidth = 40;
      const docHeight = 60;
      
      ctx.fillRect(x, y, docWidth, docHeight);
      ctx.strokeRect(x, y, docWidth, docHeight);

      // Линии текста
      ctx.strokeStyle = 'rgba(20, 33, 61, 0.3)';
      ctx.lineWidth = 1;
      for (let line = 0; line < 5; line++) {
        ctx.beginPath();
        ctx.moveTo(x + 5, y + 10 + line * 8);
        ctx.lineTo(x + docWidth - 5, y + 10 + line * 8);
        ctx.stroke();
      }
    }

    ctx.restore();
  };

  const drawAbstractColumns = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number, parallaxY: number) => {
    ctx.save();

    for (let i = 0; i < 2; i++) {
      const x = width * (0.1 + i * 0.8) + Math.sin(time * 0.3 + i * Math.PI) * 30;
      const y = height * 0.2 + parallaxY * 0.8;

      // 3D колонна
      ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      ctx.shadowBlur = 15;
      ctx.shadowOffsetX = 8;
      ctx.shadowOffsetY = 8;

      const columnWidth = 25;
      const columnHeight = height * 0.6;

      // Градиент для 3D эффекта
      const columnGradient = ctx.createLinearGradient(x, y, x + columnWidth, y);
      columnGradient.addColorStop(0, 'rgba(245, 245, 220, 0.4)');
      columnGradient.addColorStop(0.5, 'rgba(245, 245, 220, 0.7)');
      columnGradient.addColorStop(1, 'rgba(245, 245, 220, 0.3)');

      ctx.fillStyle = columnGradient;
      ctx.fillRect(x, y, columnWidth, columnHeight);

      // Капитель колонны
      ctx.fillStyle = 'rgba(212, 175, 55, 0.6)';
      ctx.fillRect(x - 5, y - 10, columnWidth + 10, 15);

      // База колонны
      ctx.fillRect(x - 5, y + columnHeight - 5, columnWidth + 10, 15);
    }

    ctx.restore();
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        transform: `translateZ(0)`, // Оптимизация производительности
        willChange: 'transform',
      }}
    />
  );
};

export default VideoBackground;