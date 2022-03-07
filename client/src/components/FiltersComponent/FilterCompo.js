import react from "react";
import CreatedOrExist from '../../Filters/CreatedOrExist';
import ByGenre from '../../Filters/ByGenre';
import style from "./FilterCompo.module.css"
//

export default function Filters({handlerFilter, handlerRating}){

    return (
        <div className={style.filters}> 
        <CreatedOrExist/>
       <ByGenre/>  <div>
           <select onChange={(event) => handlerFilter(event)} className={style.filter}>
             <option value="">Filter Alphabetically</option>
             <option value="a-z">A-Z</option>
             <option value="z-a">Z-A</option>
           </select>
         </div>
   
         <div>
           <select onChange={(event) => handlerRating(event)} className={style.filter}>
             <option value="">Filter Rating</option>
             <option value="menor-mayor">menor-mayor</option>
             <option value="mayor-menor">mayor-menor</option>
           </select>
         </div></div>
    )
}