import { Grid } from '@material-ui/core';
import React from 'react';
import './App.css';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import ToggleThemeBtn from './components/ToggleThemeBtn';
import TopMovies from './components/TopMovies';
import AuthContextProvider from './contexts/AuthContext';
import MovieContextProvider from './contexts/MovieContext';
import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';
import TopMovieContextProvider from './contexts/TopMovieContext';

function App() {
  return (
    <div>
      <TopMovieContextProvider>
        <AuthContextProvider>
          <MovieContextProvider>
            <ThemeContextProvider>
              <ProgressContextProvider>
                <Navbar />
                <Grid container>
                  <Grid item xs={4}>
                    <TopMovies />
                  </Grid>
                  <Grid item xs={8}>
                    <Movies />
                  </Grid>
                </Grid>
                <ToggleThemeBtn />
              </ProgressContextProvider>
            </ThemeContextProvider>
          </MovieContextProvider>
        </AuthContextProvider>
      </TopMovieContextProvider>
    </div>
  );
}

export default App;
