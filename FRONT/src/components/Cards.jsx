import Card from './Card';
import Style from './assets/Cards.module.css'


export default function Cards({characters, onClose}) {
   
   return (
   <div className={Style.Cards}>
      
      {
         characters.map(({id,name,species,gender,image}) =>{
            return <Card className={Style.Card}
            id={id}
            name = {name}
            species = {species}
            gender = {gender}
            image = {image}
            onClose = {onClose}
            />
         })
      }
      
   </div>
      );
}
