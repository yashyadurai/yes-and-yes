import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  color: string;
  size: number;
}

const colors = [
  "hsl(340, 82%, 65%)",
  "hsl(350, 90%, 60%)",
  "hsl(15, 90%, 75%)",
  "hsl(350, 100%, 92%)",
  "hsl(40, 100%, 70%)",
];

const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const confettiPieces: ConfettiPiece[] = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 8 + Math.random() * 12,
    }));
    setPieces(confettiPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti absolute rounded-sm"
          style={{
            left: `${piece.left}%`,
            top: "-20px",
            animationDelay: `${piece.delay}s`,
            backgroundColor: piece.color,
            width: piece.size,
            height: piece.size * 0.6,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
