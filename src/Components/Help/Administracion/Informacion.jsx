import React from 'react';

const Informacion = () => {

    return (
        <div className="ayuda">
            <div class="container">
                <h1 class="title">Agregar y Editar Informacion del perfil</h1>
                <p>En el menu en la opcion "INICIO", al seleccionarlo se le cargaran las siguientes opciones:</p>

                <ol>
                    <li>General</li>
                    <li>Academica</li>
                    <li>Postgrado</li>
                    <li>Otra Carrera</li>
                    <li>Capacitado</li>
                    <li>Seguridad</li>
                </ol>

                <p>De los cuales solo sele permite modificar General, Capacitado y Seguridad</p>

                <div className="notes">
                    <label>Nota: Si en la Informacion Academica, Postgrado o Otra Carrera encuentra algun error en los datos, favor informar al MINED haciendo uso del chat de su aplicacion del SRPD</label>
                </div>

            </div>
        </div>
    )
}

export default Informacion;