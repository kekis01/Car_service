import React from 'react';
import './RegisterPage.css'
import {Link} from 'react-router-dom';

function RegisterPage(){
    return(
        <>
            <div className="content_regisration">
                <a href="/"><div className="logo_registration"></div></a>
                <div className="register_contaner">
                    <div className="register_title"> Войдите в аккаунт </div>
                    <div className="decoration_line_login"></div>
                    <div className="register_contaner_inner">
                        <label htmlFor="number" className="register_lable"> Номер телефона </label>
                        <input type="text" id="number" className="register_input" placeholder="+ 7 - (9__)-___-__-__"/>
                    </div>
                    <div className="register_contaner_inner">
                        <label htmlFor="carNumber" className="register_lable"> Гос. номер </label>
                        <input type="text" id="carNumber" className="register_input" placeholder="A 000 AA 000"/>
                    </div>
                    <Link to = '/Account' className="login_button" > Войти </Link>
                </div>
            </div>
        </>
    )
}
export default RegisterPage;