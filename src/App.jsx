import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import Store from "./components/Store.jsx"
import Item from "./components/Item.jsx"
import Cart from "./components/Cart.jsx"
import "./styles/App.css"

const App = () => {
    const [curItem, setCurItem] = useState({});
    const [cart, setCart] = useState({});

    return (
        <>
            <Router>
                <Navbar cart={cart} />
                <Routes>
                    <Route exact path="/" element={<Home setCurItem={setCurItem} />} />
                    <Route path="/store" element={<Store setCurItem={setCurItem} />} />
                    <Route path="/item" element={<Item curItem={curItem} setCart={setCart} />} />
                    <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
                </Routes>
            </Router>
        </>
    )
};

export default App