import { ADD_FAVORITE,DELETE_FAVORITE,FILTER,ORDER } from "./action-types";
import axios from 'axios'

export const addFavorite = (character) => {
    return (dispatch)=>{
        axios.post('http://localhost:3001/rickandmorty/favs', character)
        .then(response=>{
            return dispatch({
                type:ADD_FAVORITE,
                payload:response.data
            })
        })
    }
}
export const deleteFavorite = (id) => {
    return (dispatch)=>{
        axios.delete(`http://localhost:3001/rickandmorty/favs/${id}`)
        .then(response=>{
            return dispatch({
                type:DELETE_FAVORITE,
                payload:response.data
            })
        })
    }
}

export	const filterCards = (gender)=>{
    return {type:FILTER,payload:gender}
}   

export	const orderCards = (id) =>{
    return {type: ORDER,payload:id}
}