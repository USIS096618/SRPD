import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import Ayuda from '../../../JSON/Ayuda.json';
import Configuracion from '../../../Components/Help/Administracion/Configuracion';

/**
 * @file Este archivo se encarga de montar los componentes para la pagina de ayuda - Configuracion
 * @author SRPD
 * @function PageConfiguracionAdmin
 * @returns {HTML} Retorna la vista de la pagina ayuda - Configuracion
 */
const PageConfiguracionAdmin = () => {

    return(
        <MenuJoinComponent Ayuda={Ayuda.administra} component={<Configuracion />} />
    )
}

export default PageConfiguracionAdmin;