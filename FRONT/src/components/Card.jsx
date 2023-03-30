import React, { useState,useEffect } from "react";
import Style from './assets/Card.module.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {addFavorite, deleteFavorite} from "../redux/actions"

export default function Card({id,name,species,gender,image,onClose}) {
   const dispatch=useDispatch();
   const myFavorites = useSelector(state=>state.myFavorites)
   const [isFav,setIsFav] = useState(false)
     
   const handleFavorite = () => {
      if (isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id));
      }else{
         setIsFav(true);
         dispatch(addFavorite({id,name,species,gender,image,onClose}))
      }
   }
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={Style.wrap}>
         {
            isFav ? (
              <button onClick={handleFavorite}>❤️</button>
           ) : (
              <button onClick={handleFavorite}>🤍</button>
           )
         }
         
         <div className={Style.singlecard}>
            <div className={Style.front}><img  src={image} alt="" /></div>       
               <div className={Style.back}>
               
                     <div className={Style.content}>
                        <button onClick={()=>onClose(id)}>X</button>
                        <Link to={`/detail/${id}`}>
                        <h2>{name}</h2>
                        </Link>
                        <h2>{species}</h2>
                        <h2>{gender}</h2>
                        
                     </div>
               
               </div>
         </div>
      </div>
   );
}
