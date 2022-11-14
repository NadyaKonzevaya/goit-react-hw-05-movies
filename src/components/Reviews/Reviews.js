import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import API from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  console.log(movieId);

  useEffect(() => {
    API.fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  console.log(reviews);

  if (!reviews) {
    return;
  }

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <b> Author: {author}</b>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};

export default Reviews;
