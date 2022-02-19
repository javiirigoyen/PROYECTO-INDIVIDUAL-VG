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
          <div key={number} className={style.botones}>
              <button className={style.boton} onClick={() => paginate(number)} >{number}</button>
          </div>
  ))}
  </div>
  </nav>
  );
      }
  export default Pagination