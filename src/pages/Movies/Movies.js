import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import API from 'services/api';
import MovieList from 'components/MovieList/index';
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledInput,
  StyledButton,
  // StyledUl,
} from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    query && API.fetchAllMovies(query).then(setMovies);
  }, [query]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = e => {
    e.preventDefault();

    e.target.reset();
  };

  console.log(movies);

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={query}
          onChange={e => updateQueryString(e.target.value)}
        />
        <StyledButton type="submit">Search</StyledButton>
      </StyledForm>
      <ul>
        <MovieList movies={filteredMovies} />
      </ul>
    </>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape),
  query: PropTypes.string,
};

export default Movies;
