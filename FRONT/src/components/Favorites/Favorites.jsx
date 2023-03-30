import { useSelector,useDispatch } from "react-redux"
import Style from "./Favorites.modules.css"
import {Link} from "react-router-dom"
import { filterCards, orderCards } from "../../redux/actions"
const Favorites = () => {
    const {myFavorites} = useSelector(state => state)
    const dispatch = useDispatch()

    const handlerOrder = (event) =>{
        dispatch(orderCards(event.target.value))
    }

    const handlerFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <div>
                <select onChange={handlerOrder}>
                    <option value="order" disabled='disabled'>Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handlerFilter}>
                    <option value="filter" disabled='disabled'>Filter By</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </div>
            {
                myFavorites.map((character) => {
                    return (
                        <div>
                                                    <div className={Style.wrap}>
                            
                            <div className={Style.singlecard}>
                                <div className={Style.front}><img  src={character.image} alt="" /></div>       
                                <div className={Style.back}>
                                
                                        <div className={Style.content}>
                                            <Link to={`/detail/${character.id}`}>
                                            <h2>{character.name}</h2>
                                            </Link>
                                            <h2>{character.species}</h2>
                                            <h2>{character.gender}</h2>
                                            
                                        </div>
                                
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Favorites