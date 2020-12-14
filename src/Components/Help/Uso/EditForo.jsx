import React from 'react';
import Foro from '../../../Assets/Images/png/Foro.png'

const EditForo = () => {
    return (
        <div className="ayuda">
            <div class="container">
                <h1 class="title">Editar foro</h1>

                <img src={Foro} className="imgHelp"/>
                <p>Damos click en el icono de la parte superior derecha y nos mostrara dos opcion de editar y eliminar, se le dara click en la opcion editar y ahi nos permitira editar la publicacion</p>
                <p>Luego de realizar los cambios que queremos le daremos en el boton "publicar"</p>
            </div>
        </div>
    )
}

export default EditForo;