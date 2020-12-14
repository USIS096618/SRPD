import React from 'react';
import CommentForoPhoto from '../../../Assets/Images/png/comentario.png'
import CommentInterface from '../../../Assets/Images/png/CommentInterface.png'

const CommentForo = () => {
    return (
        <div className="ayuda">
            <div class="container">
                <h1 class="title">Como comentar el foro?</h1>
                <img src={CommentForoPhoto} className="imgHelp"/>
                <p>Daremos click en el boton que dice comentarios</p>
                <img src={CommentInterface} className="imgHelp"/>
                <p>Luego nos mostrara esta interfaz donde podremos comentar la publicacion, despues de redactar lo que vamos a comentar solo se le dara "ENTER" para enviar</p>

            </div>
        </div>
    )
}

export default CommentForo;