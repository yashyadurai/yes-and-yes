import { useState } from "react";
import { Heart } from "lucide-react";

interface NameInputProps {
  onSubmit: (name: string) => void;
}

const NameInput = ({ onSubmit }: NameInputProps) => {
  const [name, setName] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <div className="romantic-card max-w-md w-full mx-4 animate-fade-in-up">
      <div className="text-center mb-8">
        <Heart 
          className="w-16 h-16 mx-auto mb-4 text-primary fill-primary animate-pulse-heart" 
        />
        <h1 className="text-5xl md:text-6xl font-script text-gradient mb-4">
          Hello There!
        </h1>
        <p className="text-lg text-muted-foreground font-medium">
          Before we begin, what's your name?
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Enter your name..."
            className="romantic-input"
            autoFocus
          />
          {isFocused && (
            <div className="absolute -inset-1 bg-gradient-button rounded-2xl opacity-20 -z-10 blur-sm" />
          )}
        </div>

        <button
          type="submit"
          disabled={!name.trim()}
          className={`btn-yes w-full ${
            !name.trim() ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Continue
          <Heart className="inline-block ml-2 w-5 h-5 fill-current" />
        </button>
      </form>
    </div>
  );
};

export default NameInput;
