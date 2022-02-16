import React from "react"
import { Link } from "react-router-dom"
import style from "./Pagination.module.css"


const Pagination = ({gamesPerPage, videojuegos, paginate}) => {

const pageNumbers = []

for (let i = 1; i <= Math.ceil(videojuegos / gamesPerPage); i++){
    pageNumbers.push(i);
}

  return (
      <nav>
  <div className={style.todo}>
      {pageNumbers.map(number => (
          <li key={number}>
              <Link style={{ textDecoration: 'none' }} onClick={() => paginate(number)} to='/home'>
                <p>{number}</p>
              </Link>
          </li>
  ))}
  </div>
  </nav>
  );
      }
  export default Pagination