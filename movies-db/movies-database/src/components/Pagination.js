import React from 'react';
import './pagination.css';

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    className={`page-number ${currentPage === i ? 'active' : ''}`}
                    onClick={() => handlePageClick(i)}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="pagination">
            <button className="prev-page" onClick={handlePrevPage} disabled={currentPage === 1}>
                Prev
            </button>
            {renderPageNumbers()}
            <button className="next-page" onClick={handleNextPage} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
}

export default Pagination;
