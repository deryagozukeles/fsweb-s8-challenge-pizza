import { useState } from 'react'
import workintech from '/workintech.svg'
import './App.css'
import OrderPizza from './components/OrderPizza'
import Home from './components/Home'
import Success from './components/Success'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home2 from './components/Home2'

function App() {
  const [siparisData,setSiparisData]=useState({
    isim: "",
    hamur:"",
    boyut: "",
    malzemeler: [],
    aciklama: "",	
    adet:0,
    toplam:0,
});
  return (
    
      <Switch>
        <Route exact path="/">
          <Home2/>
        </Route>
        <Route path="/siparis" >
          <OrderPizza  setSiparisData={setSiparisData}/>
        </Route>
         <Route path="/success" >
          <Success siparisData={siparisData}/>
        </Route>
      </Switch>
    
  )
}

export default App
