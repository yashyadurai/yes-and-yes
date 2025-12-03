import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import NameInput from "@/components/NameInput";
import QuestionPage from "@/components/QuestionPage";
import SuccessPage from "@/components/SuccessPage";

type Step = "name" | "question" | "success";

const Index = () => {
  const [step, setStep] = useState<Step>("name");
  const [name, setName] = useState("");

  const handleNameSubmit = (submittedName: string) => {
    setName(submittedName);
    setStep("question");
  };

  const handleYes = () => {
    setStep("success");
  };

  return (
    <main className="min-h-screen bg-gradient-romantic flex items-center justify-center relative overflow-hidden">
      <FloatingHearts />
      
      <div className="relative z-10 w-full flex items-center justify-center py-8 px-4">
        {step === "name" && <NameInput onSubmit={handleNameSubmit} />}
        {step === "question" && <QuestionPage name={name} onYes={handleYes} />}
        {step === "success" && <SuccessPage name={name} />}
      </div>
    </main>
  );
};

export default Index;
