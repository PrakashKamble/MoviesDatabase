// import React, { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import "./movie.css"

// const Movie = () => {
//     const [currentMovieDetail, setMovie] = useState()
//     const { id } = useParams()

//     useEffect(() => {
//         getData()
//         window.scrollTo(0,0)
//     }, [])

//     const getData = () => {
//         fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
//         .then(res => res.json())
//         .then(data => setMovie(data))
//     }

//     return (
//         <div className="movie">
//             <div className="movie__intro">
//                 <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
//             </div>
//             <div className="movie__detail">
//                 <div className="movie__detailLeft">
//                     <div className="movie__posterBox">
//                         <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
//                     </div>
//                 </div>
//                 <div className="movie__detailRight">
//                     <div className="movie__detailRightTop">
//                         <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
//                         <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
//                         <div className="movie__rating">
//                             {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
//                             <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
//                         </div>
//                         <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
//                         <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
//                         <div className="movie__genres">
//                             {
//                                 currentMovieDetail && currentMovieDetail.genres
//                                 ?
//                                 currentMovieDetail.genres.map(genre => (
//                                     <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
//                                 ))
//                                 :
//                                 ""
//                             }
//                         </div>
//                     </div>
//                     <div className="movie__detailRightBottom">
//                         <div className="synopsisText">Synopsis</div>
//                         <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
//                     </div>

//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Movie

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movie.css";

const Movie = () => {
  const [currentMovieDetail, setMovie] = useState(null);
  const [castDetails, setCastDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData();
    getCastData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  const getCastData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setCastDetails(data.cast));
  };

  return (
    <div className="movie">
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
          alt="backdrop"
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
              alt="poster"
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className="movie__tagline">
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            <div className="movie__rating">
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
              <i className="fas fa-star" />
              <span className="movie__voteCount">
                {currentMovieDetail
                  ? `(${currentMovieDetail.vote_count} votes)`
                  : ""}
              </span>
            </div>
            <div className="movie__runtime">
              {currentMovieDetail ? `${currentMovieDetail.runtime} mins` : ""}
            </div>
            <div className="movie__releaseDate">
              {currentMovieDetail
                ? `Release date: ${currentMovieDetail.release_date}`
                : ""}
            </div>
            <div className="movie__genres">
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre) => (
                    <span key={genre.id} className="movie__genre">
                      {genre.name}
                    </span>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
          </div>
        </div>
      </div>
      <div className="movie__cast">
        <div className="castTitle">Cast</div>
        <div className="castList">
          {castDetails &&
            castDetails.map((cast) => (
              <div key={cast.cast_id} className="castItem">
                <img
                  className="castImage"
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                  alt={cast.name}
                />
                <div className="castName">{cast.name}</div>
                <div className="castCharacter">as {cast.character}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
