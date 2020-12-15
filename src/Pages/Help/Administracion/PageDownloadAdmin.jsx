import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import Ayuda from '../../../JSON/Ayuda.json';
import Descargar from '../../../Components/Help/Administracion/Descargar';

/**
 * @file Este archivo se encarga de montar los componentes para la pagina de ayuda - Descargar Curriculum
 * @author SRPD
 * @function PageDownloadAdmin
 * @returns {HTML} Retorna la vista de la pagina ayuda - Descargar Curriculum
 */
const PageDownloadAdmin = () => {

    return(
        <MenuJoinComponent Ayuda={Ayuda.administra} component={<Descargar />} />
    )
}

export default PageDownloadAdmin;