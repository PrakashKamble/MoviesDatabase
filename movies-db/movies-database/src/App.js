import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/header/Header";
import MovieList from './components/movieList/MovieList';
import Home from './pages/home/Home';
import Movie from './pages/MovieDetails/Movie';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route path="movies/:type" element={<MovieList/>}></Route>
          <Route path='/*' element={<h1>Error</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
