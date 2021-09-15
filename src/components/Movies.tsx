import {
  Box,
  makeStyles,
  TextField,
  createStyles,
  Button,
  Theme,
  Chip,
  PropTypes,
} from '@material-ui/core';
import { ChangeEvent, useContext, useState } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import { ThemeContext } from '../contexts/ThemeContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieInput: {
      marginRight: '5px',
    },
    movieChip: {
      fontSize: '2rem',
      padding: '30px',
      margin: '5px',
    },
  })
);

const Movies = () => {
  // classes
  const classes = useStyles();

  // state
  const [movie, setMovie] = useState('');

  // handle change
  const onMovieInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setMovie(event.target.value);

  // context
  const { movies, addMovie, deleteMovie } = useContext(MovieContext);
  const { theme } = useContext(ThemeContext);
  const chipTheme = theme as Exclude<PropTypes.Color, 'inherit'>;

  return (
    <>
      <Box display="flex" justifyContent="center" my={5}>
        <TextField
          label="Your favourite movie..."
          variant="outlined"
          className={classes.movieInput}
          onChange={onMovieInputChange}
          value={movie}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            addMovie(movie);
            setMovie('');
          }}
        >
          Add
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}>
        {movies.map((movie) => (
          <Chip
            key={movie.id}
            label={movie.title}
            clickable
            className={classes.movieChip}
            color={chipTheme}
            onDelete={deleteMovie.bind(this, movie.id)}
          />
        ))}
      </Box>
    </>
  );
};

export default Movies;
