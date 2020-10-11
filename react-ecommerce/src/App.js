import React,{useState, useEffect} from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import StoreRoute from "./components/storeroute/StoreRoute";
import CartRoute from "./components/cartroute/CartRoute";
import readFromCookies from './readFromCookies';

const App = () => {
    const [cartItems, setCartItems] = useState([])
    const [results, setResults] = useState([])

    useEffect(()=>{
       readFromCookies(setCartItems)
       console.log(results)
    }, [results])

    return (
        <>
            <Navbar setResults={setResults}/>
            <div className='main-container'>
                <StoreRoute setCartItems={setCartItems} results={results}/>
                <CartRoute cartItems={cartItems}/>
            </div>
        </>
    );
};

export default App;
