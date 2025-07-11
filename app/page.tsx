"use client";
import { type FC, useState } from "react";
import Editor from "@/components/Editor";
import Review from "@/components/Review";

const Home: FC = () => {
  const [review, setReview] = useState("");
  const [state, setState] = useState<"idle" | "generating" | "generated">(
    "idle"
  );
  const isGenerating = state === "generating";

  const handleGenerateReview = async (code: string) => {
    try {
      setState("generating");

      console.log(`${process.env.NEXT_PUBLIC_APP_BASE_URL}api/reviews`);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BASE_URL}api/reviews`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code }),
        }
      );

      const data = await response.json();

      setReview(data.review);
    } catch (err) {
      alert("Something went wrong. Please try again later.");
      console.log(err);
    }

    setState("generated");
  };

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <Editor
        isGenerating={isGenerating}
        onGenerateReview={handleGenerateReview}
      />
      <Review isGenerating={isGenerating} review={review} />
    </div>
  );
};

export default Home;
