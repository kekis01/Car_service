import React from 'react';
import {Link} from 'react-router-dom';
import './AccountPage.css';
import Header from "../cummon/Header/Header";

function AccountPage(){
    return(
        <>
            <Header/>
            <div className="table_accoutn_contaner">
                <Link to="/" className = "accoutn_exit_button"> Вернуться на главную </Link>
            </div>

        </>
    )
}

export default AccountPage;