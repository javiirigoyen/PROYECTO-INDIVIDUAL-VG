import React from "react"
import { Link } from "react-router-dom"





const Pagination = ({gamesPerPage, videojuegos, paginate}) => {

const pageNumbers = []

for (let i = 1; i <= Math.ceil(videojuegos / gamesPerPage); i++){
    pageNumbers.push(i);
}

  return (
  <div className='cont-pagination'>
      {pageNumbers.map(number => (
          <li key={number}>
              <Link onClick={() => paginate(number)} to='/home'>
                {number}
              </Link>
          </li>
  ))}
  </div>
  );
      }
  export default Pagination