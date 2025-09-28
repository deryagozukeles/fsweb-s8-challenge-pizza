import banner from "../../images/iteration-1-images/home-banner.png";
import "../index.css";
import logo from "../../images/iteration-1-images/logo.svg"
import { Link } from "react-router-dom";
import Header from "./Header";
import CategoryMenu from "./CategoryMenu";
import SpecialOffers from "./SpecialOffers";
import Products from "./Products";
import Product from "./Product";
import Footer from "./Footer";

function Home2(){

    return(
        <>
      
        <Header/>
        <SpecialOffers/>
        <Product/>
        <Footer/>
        
        </>
    )
}
export default Home2;