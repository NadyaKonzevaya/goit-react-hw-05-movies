import { useSearchParams, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import API from 'services/api';
import {
  StyledForm,
  StyledInput,
  StyledButton,
  // StyledUl,
} from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const movieTitle = searchParams.get('title') ?? '';

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(movieTitle.toLowerCase())
  );

  console.log(movies);

  const handleSubmit = e => {
    e.preventDefault();
    API.fetchAllMovies(movieTitle).then(setMovies);
    e.target.reset();
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={searchParams.get('title')}
          onChange={e => setSearchParams({ title: e.target.value })}
        />
        <StyledButton type="submit">Search</StyledButton>
      </StyledForm>
      <ul>
        {{ searchParams } &&
          иfilteredMovies.map(({ id, title }) => (
            <li key={id}>
              <NavLink to={`${id}`} state={{ from: location }}>
                {title}
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Movies;
