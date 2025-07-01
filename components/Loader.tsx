import { type FC } from "react";

const Loader: FC = () => (
  <div className="loader">
    <div className="spinner"></div>
    <div className="loading-text">Generating Review...</div>
  </div>
);

export default Loader;
