import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../card/Card";
import "./searchResults.css";

const SearchResults = () => {
    const [searchResults, setSearchResults] = useState([]);
    const { query } = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${query}`)
            .then(res => res.json())
            .then(data => setSearchResults(data.results));
    }, [query]);

    return (
        <div className="search__results">
            <h2 className="results__title">Search Results for "{query}"</h2>
            <div className="results__cards">
                {
                    searchResults.map(movie => (
                        <Card key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </div>
    );
};

export default SearchResults;
