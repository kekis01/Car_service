import React from 'react';
import './LoginManagerPage.css';
import {useRef, useState, useEffect} from "react";


function LoginManagerPage(){

    const userRef = useRef();
    const errRef = useRef();

    const [user,setUser] = useState()
    const [pwd,setPwd] = useState()
    const [errMsg,setErrMsg] = useState()
    const [success,setSuccess] = useState()

    useEffect(() => {
        userRef.current.focus();
    },[])

    useEffect(() => {
        setErrMsg('');
    }, [user,pwd])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    return(
        <>
            <a href="/"><div className="logo_registration"></div></a>
            {
                success ? (
                    window.location.href = '/Manager'
                ) : (
            <section>
                <form onSubmit={handleSubmit} >
                    <div className="contaner_manager_login">
                        <div className="title_login_manager">Для работы, пожалуйста, <br/>авторизуйтесь!</div>
                        <p ref={errRef} className={errMsg ? "errmsg": "offscreen"} aria-live = "assertive">{errMsg}</p>
                        <label htmlFor="username" className="label_style_manager_login"> Ваше имя </label>
                        <input type="text"
                               id="username"
                               ref={userRef}
                               autoComplete="off"
                               onChange={(e)=> setUser(e.target.value)}
                               value={user}
                               required
                               className="input_style_manager_login"
                        />

                        <label htmlFor="password" className="label_style_manager_login"> Пароль </label>
                        <input type="password"
                               id="password"
                               onChange={(e)=> setPwd(e.target.value)}
                               value={pwd}
                               required
                               className="input_style_manager_login"
                        />
                        <button className="login_manager_button"> Войти </button>
                    </div>
                </form>
            </section>
            )}
        </>
    )
}
export default LoginManagerPage;