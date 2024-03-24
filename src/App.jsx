import { useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx"
import Navbar from "./components/Navbar.jsx"
import "./styles/App.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/Home",
        element: <Home />
    }
]);


function App() {
    return (
        <>
            <Navbar />
            <RouterProvider router={router} />
        </>
    )
}

export default App