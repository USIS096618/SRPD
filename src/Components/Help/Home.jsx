import React from 'react'
import { Link } from 'react-router-dom';
import HomeHelp from '../../Assets/Images/jpg/HomeHelp.jpg'

const Home = () => {

    return (
        <div className="sugerencia">
            <div className="segerencias">
                <span className="header_title sugerencia-title">Sugerencia de preguntas</span>
                <div className="segerencias-list">
                    <Link to="/Ayuda_/Uso/Crear_Cuenta" className="chat-bubble sugerencia-bubble">¿Como puedo crear una cuenta del SRPD?</Link>
                    <Link to="/Ayuda_/Administrar/Sesion" className="chat-bubble sugerencia-bubble">¿Como puedo iniciar sesión en mi cuenta del SRPD?</Link>
                    <Link to="/Ayuda_/Administrar/Informacion" className="chat-bubble sugerencia-bubble">¿No Puedo Iniciar sesión en el SRPD?</Link>
                    <Link to="/Ayuda_/Administrar/Cambio_Pass" className="chat-bubble sugerencia-bubble">¿Como restablezco mi contraseña?</Link>
                </div>
            </div>
            <div className="segerencia-img">
                <img src={HomeHelp} alt="imagen de ayuda" />
            </div>
        </div>
    )
}

export default Home;