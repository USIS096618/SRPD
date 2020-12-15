import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import Ayuda from '../../../JSON/Ayuda.json';
import CambioPass from '../../../Components/Help/Administracion/CambioPass';

/**
 * @file Este archivo se encarga de montar los componentes para la pagina de ayuda - cambiar contraseña
 * @author SRPD
 * @function PageCambioPassAdmin
 * @returns {HTML} Retorna la vista de la pagina ayuda - cambiar contraseña
 */
const PageCambioPassAdmin = () => {

    return(
        <MenuJoinComponent Ayuda={Ayuda.administra} component={<CambioPass />} />
    )
}

export default PageCambioPassAdmin;