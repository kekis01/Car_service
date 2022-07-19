import React from "react";
import './Header.css';
import {Link} from "react-router-dom";

function HeaderManager(){
    return (
        <>

            <div className="header">
                <div className="left_line"></div>
                <Link to = "/"> <div className="logo"> </div></Link>
                <div className="mid_line"></div>
                <div className="right_line"></div>
            </div>
        </>
    )
}

export default HeaderManager;