import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import Ayuda from '../../../JSON/Ayuda.json';
import Sesion from '../../../Components/Help/Administracion/Sesion';

/**
 * @file Este archivo se encarga de montar los componentes para la pagina de ayuda - Iniciar Sesion
 * @author SRPD
 * @function PageSesionAdmin
 * @returns {HTML} Retorna la vista de la pagina ayuda - Iniciar Sesion
 */
const PageSesionAdmin = () => {

    return(
        <MenuJoinComponent Ayuda={Ayuda.administra} component={<Sesion />} />
    )
}

export default PageSesionAdmin;