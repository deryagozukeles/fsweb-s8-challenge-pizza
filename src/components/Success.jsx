import "../index.css";
import logo from "../../images/iteration-1-images/logo.svg"
function Success({siparisData}){
    console.log("sipariş data",{siparisData});
    return(
        <div className="success-container">
         <img className="logo" src={logo}/>
         <h1 className="success-message"><span className="yazi">lezzetin yolunda</span><br/>SİPARİŞ ALINDI!</h1>
         <div className="line"></div>
         <h3 className="baslik">Position Absolute Acı Pizza</h3>
         <div >
           
            <p><strong>Boyut:</strong> {siparisData.boyut}</p>
            <p><strong>Hamur:</strong> {siparisData.hamur}</p>
            <p><strong>Malzemeler:</strong> {siparisData.malzemeler.join(", ")}</p>
            <p><strong>Not:</strong> {siparisData.aciklama}</p>

         </div>
         <div className="ucret-container">
            <div>Sipariş Toplamı</div>
            <div ><span className="tutar">Seçimler :</span> {siparisData.malzemeler.length*5*siparisData.adet}₺</div>
            <div><span className="tutar">Toplam :</span> {siparisData.toplam.toFixed(2)}₺</div>
        </div>

        </div>
    )
}
export default Success;