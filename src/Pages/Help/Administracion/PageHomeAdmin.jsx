import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import Ayuda from '../../../JSON/Ayuda.json';
import HomeAdmin from '../../../Components/Help/Administracion/HomeAdmin';

/**
 * @file Este archivo se encarga de montar los componentes para la pagina de ayuda - Pagina Home
 * @author SRPD
 * @function PageHomeAdmin
 * @returns {HTML} Retorna la vista de la pagina ayuda - Pagina Home
 */
const PageHomeAdmin = () => {

    return(
        <MenuJoinComponent Ayuda={Ayuda.administra} component={<HomeAdmin />} />
    )
}

export default PageHomeAdmin;