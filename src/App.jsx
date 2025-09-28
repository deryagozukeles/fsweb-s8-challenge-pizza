import { useState } from 'react'
import workintech from '/workintech.svg'
import './App.css'
import OrderPizza from './components/OrderPizza'
import Home from './components/Home'
import Success from './components/Success'
import { Route, Router, Switch } from 'react-router-dom/cjs/react-router-dom.min'

function App() {
  
  return (
    
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/siparis">
          <OrderPizza/>
        </Route>
         <Route path="/success">
          <Success/>
        </Route>
      </Switch>
    
  )
}

export default App
