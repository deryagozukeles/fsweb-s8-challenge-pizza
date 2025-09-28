import { useEffect, useState } from "react"
import logo from "../../images/iteration-1-images/logo.svg"
import "../order.css"
import { useHistory,Link,useLocation } from "react-router-dom";
import axios from "axios";
import { Container,Form,FormGroup, Label, Input,Row, Col,Button } from "reactstrap";
import Footer from "./Footer";
 
const errorMessages={
    isim:"İsim alanı boş bırakılamaz ve en az 3 harf olmalıdır!",
    boyut:"*",
    hamur:"*",
    malzemeler:"4'ten az 10'dan fazla malzeme seçilemez!"}

function OrderPizza({setSiparisData}){
    const location=useLocation();
    const product=location.state;
    const initialForm={
    isim: "",
    hamur:"",
    boyut: "",
    malzemeler: [],
    aciklama: "",	
    adet:1,
    toplam:product.price,

};
    const [formData,setFormData]=useState(initialForm);
    const [errors,setErrors]=useState({isim:false,
        hamur:true,
        boyut:true,
        malzemeler:false,});
    const [isValid,setIsValid]=useState(false);
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
 
  useEffect(() => {
    const malzemeUcret = formData.malzemeler.length * 5;
    const ucret = (product.price + malzemeUcret) * formData.adet;

    setFormData(prev => ({ ...prev, toplam: ucret }));

    if (
        formData.malzemeler.length >= 4 &&
        formData.malzemeler.length <= 10 &&
        formData.isim.length > 3 &&
        formData.hamur !== "" &&
        formData.boyut !== ""
    ) {
        setIsValid(true);
    } else {
        setIsValid(false);
    }
}, [formData.malzemeler, formData.isim, formData.hamur, formData.boyut, formData.adet, product.price]);


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
    if(formData.adet>=1) setFormData({...formData,adet:formData.adet-1});
 }
 function arttir(e){
    e.preventDefault();
    setFormData({...formData,adet:formData.adet+1});
 }
function handleSubmit(event){
    event.preventDefault();
    if(!isValid) return;
    console.log(formData);
    axios.post("https://reqres.in/api/pizza", formData)
    .then((response)=>{console.log("response",response.data);    
    })
    .catch((error)=>console.log(error))
    .finally(() => {
        setSiparisData(formData);
    history.push("/success");
  });    
    setFormData(initialForm);
    
}

    return(
    <div>
      <header>
        <img className="logo" src={logo} />
        <nav className="nav-link">
          <Link to="/">AnaSayfa -</Link>
          <Link to="/siparis">Sipariş Oluştur</Link>
        </nav>
      </header>

       <Container>
      <Form className="order-container" onSubmit={handleSubmit}>
        <h3 className="title">{product.name}</h3>
        <section className="baslik-container">
          <h1 className="price">{product.price}₺</h1>
          <span className="score">{product.score}</span>
          <span className="count">({product.count})</span>
        </section>
        <div className="aciklama">
          <p>
            Frontend Dev olarak hala {product.name} kullanıyorsan bu çok acı pizza tam sana göre. 
            Pizza , domates, peynir ve çeşitli malzemelerle kaplanmış, geleneksel olarak odun fırınında pişirilir.
          </p>
        </div>
        <section className="secenek-container">
          <FormGroup className="d-flex flex-column">
            <h3>Boyut Seç   {errors.boyut && <span className="error">{errorMessages.boyut}</span>}</h3>

            <div className="d-flex gap-2">
              {["S", "M", "L"].map((b) => (
                <Label key={b} className={`custom-radio ${formData.boyut === b ? "checked" : ""}`}>
                  <Input
                    type="radio"
                    name="boyut"
                    value={b}
                    checked={formData.boyut === b}
                    onChange={handleChange}
                  />
                  {b}
                </Label>
              ))}
            </div>
           
          </FormGroup>
          <FormGroup className="d-flex flex-column hamur-container">
            <h3>Hamur Seç  {errors.hamur && <span className="error">{errorMessages.hamur}</span>}</h3>
            <Input
              type="select"
              name="hamur"
              value={formData.hamur}
              onChange={handleChange}
            >
              <option value="">Hamur Seçiniz</option>
              <option value="ince">İnce Hamur</option>
              <option value="normal">Normal Hamur</option>
              <option value="kalın">Kalın Hamur</option>
            </Input>
            
          </FormGroup>
        </section>
        <div className="malzeme-title">
          <h3>Ek Malzemeler</h3>
          <p>Enaz 4, fazla 10 malzeme seçebilirsiniz. 5₺</p>
        </div>
        <Row className="malzeme-container g-3">
          {malzemeList.map((item, index) => (
            <Col xs="6" sm="4" key={index}>
              <FormGroup check>
                <Label check className={`custom-checkbox-label ${formData.malzemeler.includes(item) ? "checked" : ""}`}>
                  <Input
                    type="checkbox"
                    name="malzemeler"
                    value={item}
                    checked={formData.malzemeler.includes(item)}
                    onChange={handleChange}
                  />
                  {item}
                </Label>
              </FormGroup>
            </Col>
          ))}
        </Row>
        {errors.malzemeler && <p className="error">{errorMessages.malzemeler}</p>}
        <section className="bilgi-container">
           <div className="name-container">
             <Label>İsim:
               <Input
                type="text" 
                name="isim" 
                placeholder="Adınızı girin" 
                value={formData.isim} 
                onChange={handleChange} /> 
                </Label> 
                {errors.isim && <p className="error">{errorMessages.isim}</p>}
                 </div>
        </section>
        <section className="bilgi-container">
          <div className="note-container">
            <Label>Sipariş Notu</Label>
            <Input
              type="textarea"
              name="aciklama"
              rows="3"
              placeholder="Siparişinize not ekleyin..."
              value={formData.aciklama}
              onChange={handleChange}
            />
          </div>
        </section>
        <footer className="py-4 mt-4">
          <Row className="align-items-center">
            <Col xs="12" md="6" className="sayac-container">
              <Button className="sayac" onClick={azalt}>-</Button>
              <span className="sayi">{formData.adet}</span>
              <Button className="sayac" onClick={arttir}>+</Button>
            </Col>
            <Col xs="12" md="6">
              <div className="ucret-container">
                <div className="siparis-title">Sipariş Toplamı</div>
                <div className="malzeme-ucret">
                  <span>Seçimler :</span> {formData.malzemeler.length * 5 * formData.adet}₺
                </div>
                <div className="totalcontainer">
                  <span>Toplam :</span> {formData.toplam.toFixed(2)}₺
                </div>
                <Button className="siparis-button" disabled={!isValid}>SİPARİŞ VER</Button>
              </div>
            </Col>
          </Row>
        </footer>
      </Form>
    </Container>
    <Footer/>
    </div>
  );
}

export default OrderPizza;