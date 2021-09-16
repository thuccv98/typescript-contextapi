import axios from 'axios';

const topMovieIds = [
  'tt0111161',
  'tt0114161',
  'tt0011261',
  'tt0115161',
  'tt0117161',
  'tt0181161',
  'tt0112161',
  'tt0134161',
  'tt0111321',
  'tt0098161',
];

const topMoviesInfo = topMovieIds.map((id) =>
  axios.get(`http://www.omdbapi.com/?i=${id}&apikey=fe5a9562`)
);

export default topMoviesInfo;
