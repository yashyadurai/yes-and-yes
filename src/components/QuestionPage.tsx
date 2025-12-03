import { useState, useRef, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";

interface QuestionPageProps {
  name: string;
  onYes: () => void;
}

const QuestionPage = ({ name, onYes }: QuestionPageProps) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [escapeCount, setEscapeCount] = useState(0);
  // const [showMessage, setShowMessage] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  // const escapeMessages = [
  //   "Nice try! 😏",
  //   "Not so fast!",
  //   "Can't catch me!",
  //   "Think again! 💕",
  //   "Just say yes!",
  //   "I'm too quick!",
  //   "Come on... 🥺",
  //   "You know you want to!",
  // ];

  const handleNoHover = () => {
    if (!containerRef.current || !noButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();

    // Calculate random position within bounds
    const maxX = container.width - button.width - 40;
    const maxY = container.height - button.height - 40;

    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;

    setNoButtonPosition({ x: newX, y: newY });
    setEscapeCount((prev) => prev + 1);
    // setShowMessage(true);

    // setTimeout(() => setShowMessage(false), 2500);
  };

  return (
    <div 
      ref={containerRef}
      className="romantic-card max-w-lg w-full mx-4 animate-fade-in-up relative overflow-visible"
      style={{ minHeight: "400px" }}
    >
      <div className="text-center mb-10">
        <div className="flex justify-center gap-2 mb-4">
          <Heart className="w-8 h-8 text-primary fill-primary animate-pulse-heart" />
          <Heart className="w-12 h-12 text-primary fill-primary animate-pulse-heart" style={{ animationDelay: "0.2s" }} />
          <Heart className="w-8 h-8 text-primary fill-primary animate-pulse-heart" style={{ animationDelay: "0.4s" }} />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-script text-gradient mb-4">
          Dear {name}...
        </h1>
        
        <p className="text-2xl md:text-3xl font-script text-foreground mb-2">
          Do you love me?
        </p>
        
        <Sparkles className="w-6 h-6 mx-auto text-accent" />
      </div>

      {/* Escape message */}
      {/* {showMessage && escapeCount > 0 && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-bounce-in">
          <p className="text-lg font-bold text-primary bg-card px-4 py-2 rounded-full shadow-glow">
            {escapeMessages[(escapeCount - 1) % escapeMessages.length]}
          </p>
        </div>
      )} */}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative h-32">
        {/* Yes Button */}
        <button
          onClick={onYes}
          className="btn-yes z-10"
        >
          Yes! 
          <Heart className="inline-block ml-2 w-5 h-5 fill-current" />
        </button>

        {/* Escaping No Button */}
        <button
          ref={noButtonRef}
          onMouseEnter={handleNoHover}
          onTouchStart={handleNoHover}
          className="btn-no transition-transform duration-150 z-10"
          style={{
            transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
          }}
        >
          No
        </button>
      </div>

      {escapeCount > 5 && (
        <p className="text-center text-sm text-muted-foreground mt-6 animate-fade-in-up">
          The "No" button is shy... just click "Yes"! 💝
        </p>
      )}
    </div>
  );
};

export default QuestionPage;
