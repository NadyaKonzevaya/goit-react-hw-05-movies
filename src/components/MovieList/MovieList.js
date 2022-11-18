import { useLocation, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

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

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};

export default MovieList;
