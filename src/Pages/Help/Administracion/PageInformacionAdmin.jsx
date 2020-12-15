import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import Ayuda from '../../../JSON/Ayuda.json';
import Informacion from '../../../Components/Help/Administracion/Informacion';

/**
 * @file Este archivo se encarga de montar los componentes para la pagina de ayuda - Informacion
 * @author SRPD
 * @function PageInformacionAdmin
 * @returns {HTML} Retorna la vista de la pagina ayuda - Informacion
 */
const PageInformacionAdmin = () => {

    return(
        <MenuJoinComponent Ayuda={Ayuda.administra} component={<Informacion />} />
    )
}

export default PageInformacionAdmin;