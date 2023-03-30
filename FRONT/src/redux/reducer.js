import { ADD_FAVORITE,DELETE_FAVORITE, FILTER,ORDER } from "./action-types"

const initialState = {
    myFavorites:[],
    allCharacter:[]
}

const reducer = (state = initialState,action) => {
    switch (action.type){
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites:action.payload,
                allCharacter:action.payload
            }
        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorites:action.payload
            }
        case FILTER: 
            const allCharFiltered = state.allCharacter.filter(char=>char.gender===action.payload)
            return {
                ...state,
                myFavorites: allCharFiltered
            }
        case ORDER:
            return{
                ...state,
                myFavorites: 
                action.payload === 'Ascendente'
                ? state.allCharacter.sort((a,b)=> a.id - b.id)
                : state.allCharacter.sort((a,b)=> b.id - a.id) 
            }
        default:
            return {...state}
    }
}

export default reducer