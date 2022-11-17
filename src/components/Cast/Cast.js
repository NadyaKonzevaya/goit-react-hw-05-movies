import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { GiBabyFace } from 'react-icons/gi';
import API from 'services/api';
import { StyledLi } from './Cast.styles';
import defaultFace from 'images/defaultFace.png';

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
          {profile_path ? (
            <img
              alt="actor"
              src={`${IMAGE_BASE_URL}${profile_path}`}
              width="100"
            />
          ) : (
            <img src={defaultFace} alt="vf;lkdfsmv" width="100" height="150" />
          )}
          <span>{name}</span>
          <span>Character: {character}</span>
        </StyledLi>
      ))}
    </ul>
  );
};

export default Cast;
