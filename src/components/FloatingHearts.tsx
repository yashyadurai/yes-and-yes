import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface HeartData {
  id: number;
  left: number;     // Horizontal position in %
  top: number;      // Vertical position in %
  delay: number;    // Animation delay in seconds
  duration: number; // Animation duration in seconds
  size: number;     // Heart size in px
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<HeartData[]>([]);

  useEffect(() => {
    const initialHearts: HeartData[] = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,           // anywhere horizontally
      top: Math.random() * 100,            // anywhere vertically
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 3,
      size: 16 + Math.random() * 24,
    }));
    setHearts(initialHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="floating-heart fill-primary/30 text-primary/40"
          style={{
            position: "absolute",
            left: `${heart.left}%`,
            top: `${heart.top}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            width: heart.size,
            height: heart.size,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
