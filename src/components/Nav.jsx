import React from 'react'
import SearchBar from './SearchBar'
import Style from './assets/Nav.module.css'
import {Link} from 'react-router-dom'
import Logo from "../img/RandM.png"

 class Nav extends React.Component {
    constructor (props) {
        super (props);
    }

    render(){
     return (
         <div className={Style.nav}>
            <img src={Logo}/> 
            <div>
            <Link className={Style.menu} to='/'>
                <button data-text="Awesome" className={Style.buttonOut}>
                <span class="actual-text">&nbsp;LOGOUT&nbsp;</span>
                <span className={Style.hovertext} aria-hidden="true">&nbsp;LOGOUT&nbsp;</span>
                </button>
            </Link>
            <Link className={Style.menu} to='/home'>
                <button data-text="Awesome" className={Style.button}>
                <span class="actual-text">&nbsp;HOME&nbsp;</span>
                <span className={Style.hovertext} aria-hidden="true">&nbsp;HOME&nbsp;</span>
                </button>
            </Link>
            <Link className={Style.menu} to='/about'><button data-text="Awesome" className={Style.button}>
                <span class="actual-text">&nbsp;ABOUT&nbsp;</span>
                <span className={Style.hovertext} aria-hidden="true">&nbsp;ABOUT&nbsp;</span>
                </button></Link>
            </div>
            <Link className={Style.menu} to='/favorites'><button data-text="Awesome" className={Style.button}>
                <span class="actual-text">&nbsp;FAVORITES&nbsp;</span>
                <span className={Style.hovertext} aria-hidden="true">&nbsp;FAVORITES&nbsp;</span>
                </button></Link>
            <SearchBar onSearch={this.props.onSearch} />
        </div>
        )
 }
}
 export default Nav