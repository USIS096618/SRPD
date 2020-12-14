import React from 'react';
import Foro from '../../../Assets/Images/png/Foro.png'

const DeleteForo = () => {
    return (
        <div className="ayuda">
            <div class="container">
                <h1 class="title">Eliminar mi foro</h1>

                <img src={Foro} className="imgHelp"/>
                <p>Damos click en el icono de la parte superior derecha y nos mostrara dos opcion de editar y eliminar, se le dara click en la opcion eliminar y ahi nos mandara un aviso que si desear eliminar el foro y le dara click en "SI"</p>
            </div>
        </div>
    )
}

export default DeleteForo;