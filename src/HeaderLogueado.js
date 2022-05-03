import React from "react";
import Helmet from "react-helmet";
import './headerLogueadoStyle.css';
import cloudUpload from "./assets/images/cloudUpload.png";
import iconoLogin from "./assets/images/iconoLogin.png";


function HeaderLogueado({ navigation }) {
    return (
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <title>Header no logueado</title>
            </Helmet>
            <header className="HeaderLogueado__header">
                <h1 className="HeaderLogueado__h1">Eravity</h1>

                <nav class="HeaderLogueado__barraNavegacion">
                    <li className="HeaderLogueado__apartadoBarraNavegacion"><a>My subjects</a></li>
                    <li className="HeaderLogueado__apartadoBarraNavegacion"><a>Contact Us</a></li>
                    <li className="HeaderLogueado__apartadoBarraNavegacion"><a>Upload</a></li>
                    <li><a><img src={cloudUpload} className="HeaderLogueado__imagenUpload" /></a></li>
                    <li className="HeaderLogueado__apartadoBarraNavegacion"><a><img src={iconoLogin} className="HeaderLogueado__imagenUsuario" /></a></li>
                </nav>
            </header>
        </div>
    )
}

export default HeaderLogueado
