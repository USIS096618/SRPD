import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import Foro from '../../../Components/Help/Uso/Foro';
import Ayuda from '../../../JSON/Ayuda.json';

/**
 * @file Este archivo se encarga de montar los componentes para la pagina de ayuda - Foro
 * @author SRPD
 * @function PageForo
 * @returns {HTML} Retorna la vista de la pagina ayuda - Foro
 */
const PageForo = () => {

    return ( <MenuJoinComponent Ayuda={Ayuda.uso} component={<Foro />}/> )
}

export default PageForo;