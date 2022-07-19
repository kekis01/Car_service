import React from "react";
import './Footer.css';

function Footer(){
    return(
        <>
            <div className="footer">
                <div className="footer_title">О нас</div>
                <div className="footer_inner">
                    <div className="first_footer_contaner">
                        <div className="contaner_footer_title">Наш адрес:</div>
                        <div className="contaner_footer_subtitle">г. Екатеринбург, ул Примеров 12/2</div>
                    </div>
                    <div className="second_footer_contaner">
                        <div className="contaner_footer_title">Телефон:</div>
                        <div className="contaner_footer_subtitle">+7-(912)-889-89-49</div>
                        <div className="contaner_footer_subtitle">+7-(912)-112-23-34</div>
                    </div>
                    <div className="third_footer_contaner">
                        <div className="contaner_footer_title">Соц.сети и месседжеры:</div>
                        <div className="social_media">
                            <a href="/"><div className="media_component_1"></div></a>
                            <a href="/"><div className="media_component_2"></div></a>
                            <a href="/"><div className="media_component_3"></div></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;