import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const Detail = () =>{
    const {detailId} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        
        fetch (`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return (
        <div>
            <Link to='/home'>
            <button>Home</button>
            </Link>
            <h1>{character?.name}</h1>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image}/>
        </div>
    )
}
export default Detail