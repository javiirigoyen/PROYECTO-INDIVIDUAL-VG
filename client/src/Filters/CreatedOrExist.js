import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllGames, getDb, getApi } from "../Redux/Actions";

function CreatedOrExist() {
    const [filtrado, setFiltrado] = useState("")

    useEffect(()=> {
        if(filtrado === "Created") {
            dispatch(getDb())
        }
        if(filtrado === "All") {
            dispatch(getAllGames())
        }
        if(filtrado === "Api") {
            dispatch(getApi())
        }
        if(filtrado === ""){
            dispatch(getAllGames())
        }
    }, [filtrado])

const dispatch = useDispatch()

return (
<div>
    <select onChange={(e) => setFiltrado(e.target.value)}>
    <option value ="">Filter by origin</option>
    <option>All</option>
    <option>Created</option>
    <option>Api</option>
    </select>
</div>

)
}


export default CreatedOrExist