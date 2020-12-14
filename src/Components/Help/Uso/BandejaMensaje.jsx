import React from 'react';
import Teclado from '../../../Assets/Images/jpg/teclado.jpg'

const BandejaMensaje = () => {
    return (
        <div className="ayuda">
            <div class="container">
                <h1 class="title">"Como envio mensajes desde mi bandeja?"</h1>

                <p>Luego de redactar el mensaje que enviara pulsa la tecla enter <img src={Teclado} alt="" className="imgHelp"/></p>
            </div>
            </div>
    )
}

export default BandejaMensaje;