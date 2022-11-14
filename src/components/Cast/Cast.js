import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import API from 'services/api';
import { StyledSpan } from './Cast.styles';

import { StyledLi } from './Cast.styles';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    API.fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }
  return (
    <ul>
      {cast.map(({ id, name, character, profile_path }) => (
        <StyledLi key={id}>
          <img
            alt="actor"
            src={`${IMAGE_BASE_URL}${profile_path}`}
            width="100"
          />
          <StyledSpan>{name}</StyledSpan>
          <span>Character: {character}</span>
        </StyledLi>
      ))}
    </ul>
  );
};

export default Cast;
