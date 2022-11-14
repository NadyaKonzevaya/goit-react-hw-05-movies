import API from 'services/api';
import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    API.fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <NavLink to={`movies/${id}`} state={{ from: location }}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
