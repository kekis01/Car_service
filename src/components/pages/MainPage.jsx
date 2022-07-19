import React from "react";
import './MainPage.css';
import Header from "../cummon/Header/Header";
import Footer from "../cummon/Footer/Footer";
import { Link } from "react-router-dom"

function MainPage(){
    return (
        <>
            <div className="wrapper">
                <Header/>
                <Footer/>
            </div>
        </>
    )
}

export default MainPage;