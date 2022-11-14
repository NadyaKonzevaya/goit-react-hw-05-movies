import { useParams, Outlet, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import API from 'services/api';
import {
  StyledDiv,
  StyledInfoDiv,
  StyledUl,
  StyledLi,
  StyledAddInfoDiv,
} from './MovieDetails.styled';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    API.fetchMovieInfo(movieId).then(setMovie);
  }, [movieId]);

  console.log(movie);

  if (!movie) {
    return null;
  }

  const { title, release_date, vote_average, overview, genres, poster_path } =
    movie;

  return (
    <>
      <button type="button">
        <NavLink to={backLinkHref}>Go back</NavLink>
      </button>
      <StyledDiv>
        <img
          alt="poster"
          src={`${IMAGE_BASE_URL}${poster_path}`}
          width="300"
          //   height="300"
        />
        <StyledInfoDiv>
          <h1>
            {title}({Number.parseInt(release_date)})
          </h1>
          <p>User Score: {Math.round(vote_average * 10)}% </p>
          <h2>Overviews</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <StyledUl>
            {genres.map(({ id, name }) => (
              <StyledLi key={id}>{name}</StyledLi>
            ))}
          </StyledUl>
        </StyledInfoDiv>
      </StyledDiv>
      <StyledAddInfoDiv>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </StyledAddInfoDiv>
      <Outlet />
    </>
  );
};

export default MovieDetails;
