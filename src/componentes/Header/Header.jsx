import React from "react";
import Logo from "./barbearia.png";
import "./App.css"


function Header() {
    return(
        <>
        <nav>
            <img src={Logo} alt="" />
            <ul>
                <li>Cortes</li>
                <li>Valores</li>
                <li>Unidades</li>
                <li>Sobre</li>
            </ul>
        </nav>
        </>
    )
}

export default Header