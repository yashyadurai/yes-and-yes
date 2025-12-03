import { Heart, Sparkles, Stars } from "lucide-react";
import Confetti from "./Confetti";

interface SuccessPageProps {
  name: string;
}

const SuccessPage = ({ name }: SuccessPageProps) => {
  return (
    <>
      <Confetti />
      <div className="romantic-card max-w-lg w-full mx-4 text-center animate-bounce-in">
        <div className="mb-8">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Stars className="w-8 h-8 text-accent animate-pulse" />
            <Heart className="w-20 h-20 text-primary fill-primary animate-pulse-heart" />
            <Stars className="w-8 h-8 text-accent animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-script text-gradient mb-4">
            Yay! 🎉
          </h1>

          <div className="space-y-4">  
            <div></div>
            <img src="/image.png" alt="This is an image lol" />
            {/* <p className="text-xl text-muted-foreground font-medium">
              I love you too! 
            </p> */}

            <div className="flex justify-center gap-2 pt-4">
              {[...Array(5)].map((_, i) => (
                <Heart 
                  key={i}
                  className="w-6 h-6 text-primary fill-primary"
                  style={{ 
                    animation: "pulse-heart 1s ease-in-out infinite",
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border">
          <p className="text-lg font-script text-muted-foreground flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            Forever & Always
            <Sparkles className="w-5 h-5 text-accent" />
          </p>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
