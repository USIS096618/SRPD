import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import BandejaMensaje from '../../../Components/Help/Uso/BandejaMensaje';
import Ayuda from '../../../JSON/Ayuda.json';

/**
 * @file Este archivo se encarga de montar los componentes para la pagina de ayuda - Bandeja Mensaje
 * @author SRPD
 * @function PageBandejaMensaje
 * @returns {HTML} Retorna la vista de la pagina ayuda - Bandeja Mensaje
 */
const PageBandejaMensaje = () => {

    return ( <MenuJoinComponent Ayuda={Ayuda.uso} component={<BandejaMensaje />}/> )
}

export default PageBandejaMensaje;