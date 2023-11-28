import React from "react";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import twiter from "../../assets/img/twiter.png";
import "./footer.css";

const footer = () => {
    return (
        <>
            <div className="footer container_footer">
                <p>Seguinos en</p>
                <div className="imagen">
                    <a href="https://www.facebook.com" target="_blank"><img src={facebook} alt="facebook" /></a>
                    <a href="https://www.instagram.com" target="_blank"><img src={instagram} alt="instagram" /></a>
                    <a href="https://www.twitter.com" target="_blank"><img src={twiter} alt="twiter" /></a>
                </div>
                <p>© Copyright 2023.Todos los derechos reservados.</p>
            </div>
        </>
    );
};

export default footer;
