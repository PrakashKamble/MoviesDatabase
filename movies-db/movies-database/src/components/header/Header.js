import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./header.css"

const Header = () => {

    const [query, setQuery]=useState("");
    const navigate=useNavigate();

    const handleSearch=(e)=>{
        e.preventDefault();
        if(query.trim()){
            navigate(`/search/${query}`);
        }
    }
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>POPULAR</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>TOP RATED</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>UPCOMING</span></Link>
            </div>
            <div className="headerRight">
                <form onSubmit={handleSearch}>
                    <input 
                        type="text" 
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for a movie..."
                        className="searchInput"
                    />
                    <button type="submit" className="searchButton">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Header