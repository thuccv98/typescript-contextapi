import React from 'react';
import './App.css';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import ToggleThemeBtn from './components/ToggleThemeBtn';
import MovieContextProvider from './contexts/MovieContext';
import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div>
      <MovieContextProvider>
        <ThemeContextProvider>
          <ProgressContextProvider>
            <Navbar />
            <Movies />
            <ToggleThemeBtn />
          </ProgressContextProvider>
        </ThemeContextProvider>
      </MovieContextProvider>
    </div>
  );
}

export default App;
