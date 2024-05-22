import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../card/Card";
import "./searchResults.css";

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { query } = useParams();

  useEffect(() => {
    fetchSearchResults(query, currentPage);
  }, [query, currentPage]);

  const fetchSearchResults = (query, page) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${query}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data.results);
        setTotalPages(data.total_pages);
      });
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="search__results">
      <h2 className="results__title">Search Results for "{query}"</h2>
      <div className="results__cards">
        {searchResults.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchResults;
// done
