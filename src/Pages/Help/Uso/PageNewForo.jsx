import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import NewForo from '../../../Components/Help/Uso/NewForo';
import Ayuda from '../../../JSON/Ayuda.json';

/**
 * @file Este archivo se encarga de montar los componentes para la pagina de ayuda - Nuevo Foro
 * @author SRPD
 * @function PageNewForo
 * @returns {HTML} Retorna la vista de la pagina ayuda - Nuevo Foro
 */
const PageNewForo = () => {

    return ( <MenuJoinComponent Ayuda={Ayuda.uso} component={<NewForo />}/> )
}

export default PageNewForo;