import axios from 'axios';
const BASE_URL = 'http://api.themoviedb.org';
const API_KEY = '35b67d916044ed61f84d01dde3676d84';
// const axios = require('axios').default;

const fetchTrendingMovies = () => {
  return axios
    .get(`${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }
      return response.data;
    })
    .then(data => {
      return data.results;
    });
};

const fetchAllMovies = queryTitle => {
  return axios
    .get(`${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${queryTitle}`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }
      return response.data;
    })
    .then(data => {
      return data.results;
    });
};

const fetchMovieInfo = movieId => {
  return axios
    .get(`${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }
      return response.data;
    })
    .then(data => {
      return data;
    });
};

const fetchMovieReviews = movieId => {
  return axios
    .get(`${BASE_URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }
      return response.data;
    })
    .then(data => {
      return data.results;
    });
};

const fetchMovieCast = movieId => {
  return axios
    .get(`${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }
      return response.data;
    })
    .then(data => {
      return data.cast;
    });
};

const API = {
  fetchTrendingMovies,
  fetchAllMovies,
  fetchMovieInfo,
  fetchMovieReviews,
  fetchMovieCast,
};

export default API;

// function fetchPokemon(name) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
//     if (response.ok) {
//       return response.json();
//     }

//     return Promise.reject(new Error(`Нет покемона с именем ${name}`));
//   });
// }

// const api = {
//   fetchPokemon,
// };

// export default api;
