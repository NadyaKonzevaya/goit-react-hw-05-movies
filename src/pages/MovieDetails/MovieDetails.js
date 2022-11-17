import {
  useParams,
  Outlet,
  useLocation,
  NavLink,
  useNavigate,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { BsArrowLeft } from 'react-icons/bs';
import API from 'services/api';
import {
  StyledDiv,
  StyledInfoDiv,
  StyledUl,
  StyledLi,
  StyledAddInfoDiv,
  StyledLink,
  StyledBsArrowLeft,
} from './MovieDetails.styled';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  // const navigate = useNavigate();
  const backLinkHref = location.state?.from ?? '/';
  console.log(location.state.from);

  useEffect(() => {
    API.fetchMovieInfo(movieId).then(setMovie);
  }, [movieId]);

  console.log(movie);

  if (!movie) {
    return null;
  }

  // const onGoBack = () => {
  //   navigate(backLinkHref);
  // };

  const { title, release_date, vote_average, overview, genres, poster_path } =
    movie;

  return (
    <>
      <button type="button">
        <StyledLink to={backLinkHref}>
          <StyledBsArrowLeft />
          Go back
        </StyledLink>
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
