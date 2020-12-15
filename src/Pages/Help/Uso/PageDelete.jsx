import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import DeleteForo from '../../../Components/Help/Uso/DeleteForo';
import Ayuda from '../../../JSON/Ayuda.json';

/**
 * @file Este archivo se encarga de montar los componentes para la pagina de ayuda - Eliminar foro
 * @author SRPD
 * @function PageDeleteForo
 * @returns {HTML} Retorna la vista de la pagina ayuda - Eliminar foro
 */
const PageDeleteForo = () => {

    return ( <MenuJoinComponent Ayuda={Ayuda.uso} component={<DeleteForo />}/> )
}

export default PageDeleteForo;