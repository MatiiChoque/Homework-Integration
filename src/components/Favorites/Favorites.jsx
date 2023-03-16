import { useSelector } from "react-redux"
import Style from "./Favorites.modules.css"
import {Link} from "react-router-dom"
const Favorites = () => {
    const {myFavorites} = useSelector(state => state)
    return (
        <div>
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