import { useEffect, useState } from "react"
import logo from "../../images/iteration-1-images/logo.svg"
import "../index.css"
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
   const initialForm={
    isim: "",
    hamur:"",
    boyut: "",
    malzemeler: [],
    aciklama: "",	
};
const errorMessages={
    isim:"İsim alanı boş bırakılamaz ve en az 3 harf olmalıdır!",
    boyut:"Pizza boyutu seçin!",
    hamur:"Hamur kalınlığı seçin!",
    malzemeler:"4'ten az 10'dan fazla malzeme seçilemez!"}

function OrderPizza(){
    const [formData,setFormData]=useState(initialForm);
    const [errors,setErrors]=useState({
        isim:false,
        hamur:true,
        boyut:true,
        malzemeler:false,
    });
    const [isValid,setIsValid]=useState(false);
    const [adet,setAdet]=useState(1);
    const [toplam,setToplam]=useState(85.5);
    const history=useHistory();
    const malzemeList=[
    "Pepperoni",
    "Sosis",
    "Sucuk",
    "Mısır",
    "Ananas",
    "Soğan",
    "Domates",
    "Biber",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Jalepeno",
    "Sarımsak",
    "Kabak",
  ];
 
  useEffect(()=>{
        if(formData.malzemeler.length>=4 && formData.malzemeler.length<=10 && formData.isim.length>3 && formData.hamur!==""&& formData.boyut!=""){
            setIsValid(true)
        }else{
            setIsValid(false)
        }
        const malzemeUcret=formData.malzemeler.length*5;
        
        setToplam((85.5+malzemeUcret)*adet);
    },[formData,adet]);
 function handleChange(event){
    const {type,name,checked,value}=event.target;

    
    if(name==="isim"){
        setFormData({...formData,[name]:value})
        if(value.trim().length>=3){
            setErrors({...errors,[name]:false})
        } else{
            setErrors({...errors,[name]:true})
        }
    }
    if (name === "malzemeler") {
      let yeniMalzemeler = [...formData.malzemeler];
      if (checked) {
        yeniMalzemeler.push(value);
      } else {
        yeniMalzemeler = yeniMalzemeler.filter((m) => m !== value);
      }
      setFormData({ ...formData, malzemeler: yeniMalzemeler });

      setErrors({
        ...errors,
        malzemeler:
          yeniMalzemeler.length < 4 || yeniMalzemeler.length > 10,
      });
    } else {
      setFormData({ ...formData, [name]: value });}
    if(name==="hamur"){
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: value === "" });
         }
    if(name==="boyut"){
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: value === "" });
         }

    
 }
 function azalt(e){
    e.preventDefault();
    if(adet>1){ setAdet(adet-1);}
 }
 function arttir(e){
    e.preventDefault();
    setAdet(adet+1);
 }
function handleSubmit(event){
    event.preventDefault();
    if(!isValid) return;
    console.log(formData);
    axios.post("https://reqres.in/api/pizza", formData)
    .then((response)=>{console.log(response.data);
       
    })
    .catch((error)=>console.log(error));
    history.push("/success"); 
    setFormData(initialForm);
    setAdet(1);
}

    return(
        <div>
            <header>
                <img className="logo" src={logo}/>
                <nav className="nav-link">
                    <Link to="/">AnaSayfa -</Link>
                    <Link to="/siparis">Sipariş Oluştur</Link>
                </nav>
            </header>
            <form className="order-container" onSubmit={handleSubmit}>
                <h3 className="title">Position Absolute Acı Pizza</h3>
                <section className="baslik-container">
                     <h1 className="price">85.5₺</h1>
                     <span className="score">4.9</span>
                     <span className="count">(200)</span>  
                </section>
                <div className="aciklama">
                    <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza , domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. küçük bir pizzaya bazen pizzetta denir.</p>
                </div>
                <section className="secenek-container">
                    <div className="boyut-container">
                <h3>Boyut Seç</h3>
                <label className="label-radio">
                    <input
                    type="radio"
                    onChange={handleChange}
                    name="boyut"
                    value="küçük"
                    checked={formData.boyut==="küçük"}
                    />
                    Küçük
                </label>
                <label className="label-radio">
                    <input
                    type="radio"
                    onChange={handleChange}
                    name="boyut"
                    value="orta"
                     checked={formData.boyut==="orta"}
                    />
                    Orta
                </label>
                <label className="label-radio">
                    <input
                    type="radio"
                    onChange={handleChange}
                    name="boyut"
                    value="büyük"
                     checked={formData.boyut==="büyük"}
                    />
                    Büyük
                </label>
                <p className="error">{errors.boyut && errorMessages.boyut}</p>
                </div>
                <div className="hamur-container">
                    <h3>Hamur Seç</h3>
                    <select className="dropdown-menu" name="hamur" value={formData.hamur} onChange={handleChange}>
                            <option value="">Hamur Seçin</option>
                            <option value="ince">İnce Hamur</option>
                            <option value="normal">Normal Hamur</option>
                            <option value="kalın">Kalın Hamur</option>
                    </select>
                    <p className="error">{errors.hamur && errorMessages.hamur}</p>
                </div>
                </section> 
                <div className="malzeme-title">
                    <h3>Ek Malzemeler</h3>
                    <p>En az 4 , en fazle 10 malzeme seçebilirsiniz. Malzeme başı 5TL.</p>
                </div>
                <section className="malzeme-container">
                {malzemeList.map((item,index)=>(
                    <label  key={index} htmlFor="terms" className="label-Checkbox">
                        <input
                        id="terms"
                        type="checkbox"
                        onChange={handleChange}
                        name="malzemeler"
                        value={item}
                        checked={formData.malzemeler.includes(item)}
                       
                        />{item}
                    </label>)   )}
                    <p className="error">{errors.malzemeler && errorMessages.malzemeler}</p>
                </section>
                <section className="bilgi-container">
                     <div className="name-container">
                    <label>İsim:
                    <input
                    type="text"
                    name="isim"
                    placeholder="Adınızı girin"
                    value={formData.isim}
                    onChange={handleChange}
                    />
                    </label>
                    <p className="error">{errors.isim && errorMessages.isim}</p>
                </div>
                <div className="note-container">
                    <label>Sipariş Notu</label>
                    <textarea
                    name="aciklama"
                    rows="3"
                    placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
                    value={formData.aciklama}
                    onChange={handleChange}
                    />    
                </div>

                </section>
               <footer>
                    <div className="sayac-container">
                    <button className ="sayac"onClick={azalt}>-</button>
                    <span className="sayi">{adet}</span>
                    <button className ="sayac" onClick={arttir} >+</button>
                </div>
                <div className="ucret-container">
                    <div className="siparis-title">Sipariş Toplamı</div>
                    <div className="malzeme-ucret"><span>Seçimler :</span> {formData.malzemeler.length*5*adet}₺</div>
                    <div className="totalcontainer"><span>Toplam :</span> {toplam.toFixed(2)}₺</div>
                    <button className="siparis-button" disabled={!isValid}>Sipariş Ver</button>
                </div>
                
               </footer>
                
            </form>
        </div>
    )

}

export default OrderPizza;