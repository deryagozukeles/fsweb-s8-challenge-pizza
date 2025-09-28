import "../index.css";
import logo from "../../images/iteration-1-images/logo.svg"
function Success(){
    return(
        <div className="success-container">
         <img className="logo" src={logo}/>
         <h1 className="success-message">TEBRİKLER!<br/>SİPARİŞİNİZ ALINDI!</h1>

        </div>
    )
}
export default Success;