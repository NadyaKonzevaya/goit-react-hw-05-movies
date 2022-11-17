import { useLocation, NavLink } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <NavLink to={`${id}`} state={{ from: location }}>
            {title}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default MovieList;
