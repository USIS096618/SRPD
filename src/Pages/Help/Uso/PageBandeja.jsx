import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import Bandeja from '../../../Components/Help/Uso/Bandeja';
import Ayuda from '../../../JSON/Ayuda.json';

/**
 * @file Este archivo se encarga de montar los componentes para la pagina de ayuda - Bandeja
 * @author SRPD
 * @function PageBandeja
 * @returns {HTML} Retorna la vista de la pagina ayuda - Bandeja
 */
const PageBandeja = () => {

    return ( <MenuJoinComponent Ayuda={Ayuda.uso} component={<Bandeja />}/> )
}

export default PageBandeja;