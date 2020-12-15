import React from 'react';
import Cuenta from '../../../Assets/Images/jpg/cuentaa.jpg'
import Cuentaa from '../../../Assets/Images/jpg/cuentaap.jpg'
import Recuperar from '../../../Assets/Images/png/recuperar.png'

const CambioPass = () => {

    return (
        <div className="ayuda">
            <div class="container">
                <h1 class="title">Como cambio o restablezco mi contraseña</h1>
                <p>En el login en la parte de abajo nos dice una pregunta si hemos olvidado la contraseña le damos click ahi</p>
                <p>Nos mandara a este formulario donde ingresaremos nuestro usuario</p>
                <img src={Recuperar} className="imgHelp"/>
                <p>Luego entramos al correo y ahi nos habra caido una solicitud de cambio de contraseña</p>
                <p>Entramos al enlace recibido y ahi nos aparecera otro formulario donde escribiremos la nueva contraseña</p>
                <img src={Cuenta} className="imgHelp"/>
                <p>En la aplicacion solo el formulario de cambio de contraseña cambiaria y lo mostraria de esta manera</p>
                <img src={Cuentaa} className="imgHelp"/>

            </div>
        </div>
    )
}

export default CambioPass;