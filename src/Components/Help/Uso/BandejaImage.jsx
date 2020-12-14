import React from 'react';
import IconImage from '../../../Assets/Images/png/IconImage.png'
import SelectImage from '../../../Assets/Images/png/SelectedImage.png'

const BandejaImage = () => {
    return (
        <div className="ayuda">
            <div class="container">
                <h1 class="title">Como envio imagenes desde mi bandeja?</h1>

                <p>Damos click en el icono<img src={IconImage} alt="" className="imgHelp"/></p>
                <p>Se seleciona la foto y damos click en abrir y automaticamente se enviara la imagen</p>
                <img src={SelectImage} width="350" height="200" className="imgHelp"/>

            </div>
        </div>
    )
}

export default BandejaImage;