import React, { useEffect, useState } from "react";
import '../../App.css'

const Pagination = ({postPerPage, length, handlePagination, loading }) => {
    const [number, setNumber] = useState([1, 2, 3])
       let paginationNumber = [];
        for (let i = 1; i <= Math.ceil(length / postPerPage); i++ ) {
            paginationNumber.push(i);
        }
    
    return(
        <div>
            <h4>Pagination Buttons</h4>
            {paginationNumber.length && paginationNumber?.map((pageNumber) => {
                return (
                    <button className="page-button" onClick={() => handlePagination(pageNumber)} key={pageNumber}>{pageNumber}</button>
                )
            })}
        </div>
    )
}

export default Pagination;