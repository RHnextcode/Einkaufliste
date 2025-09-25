import type { Meta } from '@storybook/react-vite';
import MaturityRating from './MaturityRating';
import type { MaturityRatingProps } from './MaturityRating.types';
import styles from './MaturityRating.module.css';

const meta: Meta<MaturityRatingProps> = {
  title: 'Components/MaturityRating',
  component: MaturityRating,
};
export default meta;

// Story: Alle Ratings in einer großen Box
export const AllRatings = () => {
  const ratings: MaturityRatingProps["rating"][] = [
    "TV-Y","TV-Y7","G","TV-G","PG","TV-PG","PG-13","TV-14","R","TV-MA","NC-17"
  ];

  return (
    <div className={styles.ratingsBox}>
      {ratings.map(r => (
        <MaturityRating key={r} rating={r} />
      ))}
    </div>
  );
};
