import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import EditForo from '../../../Components/Help/Uso/EditForo';
import Ayuda from '../../../JSON/Ayuda.json';

/**
 * @file Este archivo se encarga de montar los componentes para la pagina de ayuda - Editar Foro
 * @author SRPD
 * @function PageEditForo
 * @returns {HTML} Retorna la vista de la pagina ayuda - Editar Foro
 */
const PageEditForo = () => {

    return ( <MenuJoinComponent Ayuda={Ayuda.uso} component={<EditForo />}/> )
}

export default PageEditForo;