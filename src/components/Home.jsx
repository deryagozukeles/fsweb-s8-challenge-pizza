import banner from "../../images/iteration-1-images/home-banner.png";
import "../index.css";
import logo from "../../images/iteration-1-images/logo.svg"
import { Link } from "react-router-dom";
function Home(){

    return(
        <>
        <div className="home-container">
            <img className="home-banner" src={banner}/>
                <div class="title-banner">
                <img className="logo" src={logo}/>
                <h1 className="title-container">KOD ACIKTIRIR<br/>PIZZA, DOYURUR</h1>
                <Link to="/siparis">
                <button className="order-button">ACIKTIM</button>
                </Link>
                
                </div>
        </div>
        </>
    )
}
export default Home;