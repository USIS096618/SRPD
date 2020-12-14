import React from 'react';
import General from '../../../Assets/Images/png/general.png'
import Academica from '../../../Assets/Images/png/academica.png'
import Seguridad from '../../../Assets/Images/png/seguridad.png'
import Curriculum from '../../../Assets/Images/png/curriculum.png'


const MiInicio = () => {
    return (
        <div className="ayuda">
            <div class="container">
                <h1 class="title">Tu pagina de inicio</h1>

                <p class="paragraph">Aqui podras encontrar diferentes apartados como</p>

                <h3>Informacion general</h3><p>Aqui nos aparece datos personales como el nombre,genero,fecha de nacimiento,dui, etc. <img src={General} alt="" className="imgHelp"/></p>
                <h3>Informacion academica</h3><p>Aqui nos aparece lo que la universidad donde estudio, el tituto, el cum, etc. <img src={Academica} alt="" className="imgHelp"/></p>
                <h3>Seguridad</h3><p>aqui le mostrara lo que es el usuario y contraseña <img src={Seguridad} className="imgHelp"/></p>

                <h3>Curriculum vitae</h3><p>En esta opcion al darle click en Curriculum se descargara automaticamente <img src={Curriculum} alt="" className="imgHelp"/></p>

            </div>
        </div>
    )
}

export default MiInicio;