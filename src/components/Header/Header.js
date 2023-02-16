import "./Header.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import search from "../../assets/icons/search.svg";
import upload from "../../assets/icons/upload.svg"



function Header(){

    return(
        <header>
        <nav className="menu">
            <a href=""><img className="menu__logo" src={logo} alt="Brainflix logo"/></a>
            <div className="container">
            <div className="menu__bar">
            <input className="menu__bar-input" id="search" type="search" name="search" placeholder="Search"/>
            <img className="menu__bar--search-icon" src={search} alt="search"/>
            <img className="menu__bar--avatar" src={avatar} alt="avatar"/>
            </div>
            <div className="menu__button--container">
            <button className="menu__button">UPLOAD</button>
            <img className="menu__button-image" src={upload} alt="upload"/>
            </div>
            </div>
        </nav>
        </header>
    )
}

export default Header