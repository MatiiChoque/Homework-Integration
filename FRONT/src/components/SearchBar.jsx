import { useState } from 'react';
import Style from '../components/assets/SearchBar.module.css'

export default function SearchBar({onSearch}) {
   const [id,setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
      
   }

   return (
      <div className={Style.countainer} >
         <input type="search" autocomplete="off" name="text" className={Style.input} placeholder="Agregar" onChange={handleChange}/>
         <br></br>
      <button className={Style.btn} onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}

