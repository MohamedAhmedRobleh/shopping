import Header from "./components/Header";
import { Routes, Route, Form } from "react-router-dom";
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import Contact from "../src/pages/Contact"
import Cart from "../src/pages/Cart"
import { useState } from "react";
const App = () => {

    const [cart, setCart] = useState(5);
 
    return (
        <div className="container">
            <Header cart={cart} setCart={setCart}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart setCart ={setCart}/>} />
            </Routes>
        </div>
    )
}

export default App;