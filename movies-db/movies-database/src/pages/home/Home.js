import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from 'react-router-dom';
import MovieList from '../../components/movieList/MovieList';
import "./home.css";


const Home = () => {
    const[popularMovies, setPopularMovies]=useState([]);

    useEffect(()=>{
        const apiKey = 'c45a857c193f6302f2b5061c3b85e743';
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        .then(res=> res.json())
        .then(data=>setPopularMovies(data.results))
        .catch(error =>console.error('Error fetching data:', error));
    },[])

  return (
    <div className='poster'>
        <Carousel 
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}>
        {
            popularMovies.map(movie=>(
                <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                <div className='posterImage'>
                     <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                </div>
                 <div className="posterImage__overlay">
                 <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                 <div className="posterImage__runtime">
                     {movie ? movie.release_date : ""}
                     <span className="posterImage__rating">
                         {movie ? movie.vote_average :""}
                         <i className="fas fa-star" />{" "}
                     </span>
                 </div>
                 <div className="posterImage__description">{movie ? movie.overview : ""}</div>
             </div>
         </Link>
            ))
        }
        </Carousel>
        <MovieList/>
     
    </div>
  )
}

export default Home
