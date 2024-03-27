import { useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import Store from "./components/Store.jsx"
import "./styles/App.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/Home",
        element: <Home />
    },
    {
        path: "/Store",
        element: <Store />
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