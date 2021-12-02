import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Background from './components/Background'
import Navigation from './components/Navigation'
import Shop from './views/Shop'
import { useEffect, useState } from 'react'
import pieImg from './components/pizza-pie-vector.png'
import sliceImg from './components/pizza-slice-vector.png'
import Checkout from './views/Checkout'
import Landing from './views/Landing'


function App() {
  
  // functions to check session and local storage for order info or shopping cart info
  const getSessionOrDefault = (key, defaultValue) => {
    const stored = sessionStorage.getItem(key)
    if (!stored) return defaultValue
    return JSON.parse(stored)
  }
  const getLocalOrDefault = (key, defaultValue) => {
    const stored = localStorage.getItem(key)
    if (!stored) return defaultValue
    return JSON.parse(stored)
  }
  
  // global state props
  const [isEmpty, setIsEmpty] = useState(true)
  const [order, setOrder] = useState({ price: 0.00 })
  const [shoppingCart, setShoppingCart] = useState([])

  // function that will add an order to the urser's shopping cart
  const addToShoppingCart = () => {
    const currentOrder = getSessionOrDefault("order", order)
    console.log(currentOrder)
    const currentCart = getLocalOrDefault("shoppingCart", shoppingCart)
    currentCart.push(currentOrder)
    setShoppingCart(currentCart)
    sessionStorage.removeItem("order")
    localStorage.setItem("shoppingCart", JSON.stringify(currentCart))
    setIsEmpty(false)
  }

  // empty array that will be filled with images to be remdered as the background
  const images = []

  // render the background image grid, then check for order info in local storage
    useEffect(() => {
        for (let i = 0; i < 6; i++) {
            images.push(sliceImg)
            images.push(pieImg)
        }
        let cart = localStorage.getItem("shoppingCart")
        if (cart || cart.length > 0) {
          setIsEmpty(false)
        }
    }, [])

    // --------------------------------

  return (
    <div className="App" style={{ maxWidth: "100vw", minWidth: "fit-content" }}>

      {/* constant background (outside of router) */}
      <Background images={images} slice={sliceImg} pie={pieImg} />

      {/* sets the max width of the app (intention is for the main content to always display at mobile width) */}
      <div style={{ maxWidth: "360px", margin: "auto" }}>
      
      {/* main router */}
      <BrowserRouter>

        {/* navbar */}
        <Navigation isEmpty={isEmpty} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} getLocalOrDefault={getLocalOrDefault} />

        {/* routes (formerly 'switch') */}
        <Routes>

          {/* landing page - login/reg or continue as guest */}
          <Route exact path="/" element={<Landing />} />

          {/* shop page is minimalist, most UX exists in modals */}
          <Route exact path="/shop" element={<Shop order={order} setOrder={setOrder} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} addToShoppingCart={addToShoppingCart} getSessionOrDefault={getSessionOrDefault} getLocalOrDefault={getLocalOrDefault}/>} />

          {/* checkout view with secure payments */}
          <Route exact path="/checkout" element ={<Checkout order={order} setOrder={setOrder} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} addToShoppingCart={addToShoppingCart} getSessionOrDefault={getSessionOrDefault} getLocalOrDefault={getLocalOrDefault}/>} />

        </Routes>

      </BrowserRouter>

      </div>
      
    </div>
  );
}

export default App;
