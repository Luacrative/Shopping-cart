import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import Store from "./components/Store.jsx"
import "./styles/App.css"

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                </Routes>
            </Router>
        </>
    )
}

export default App