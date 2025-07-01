import { type FC } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import Loader from "./Loader";

interface ReviewProps {
  review: string;
  isGenerating: boolean;
}

const Review: FC<ReviewProps> = ({ review, isGenerating }) => (
  <div className="h-full w-6/12 relative overflow-scroll">
    {isGenerating ? (
      <Loader />
    ) : (
      <MarkdownPreview
        source={review}
        style={{ fontSize: "30px", minHeight: "100vh", padding: "20px" }}
      />
    )}
  </div>
);

export default Review;
