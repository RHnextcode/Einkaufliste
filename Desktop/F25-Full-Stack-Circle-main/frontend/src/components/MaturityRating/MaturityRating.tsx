import React from "react";
import styles from "./MaturityRating.module.css";
import type { MaturityRatingProps } from "./MaturityRating.types";

const MaturityRating: React.FC<MaturityRatingProps> = ({ rating = "TV-Y" }) => {
  return (
    <span
      className={styles.container}
      role="status"
      aria-label={`Altersfreigabe: ${rating}`}
    >
      {rating}
    </span>
  );
};

export default MaturityRating;
