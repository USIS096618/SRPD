import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import BandejaImage from '../../../Components/Help/Uso/BandejaImage';
import Ayuda from '../../../JSON/Ayuda.json';

/**
 * @file Este archivo se encarga de montar los componentes para la pagina de ayuda - Bandeja Imagen
 * @author SRPD
 * @function PageBandejaImage
 * @returns {HTML} Retorna la vista de la pagina ayuda - Bandeja Imagen
 */
const PageBandejaImage = () => {

    return ( <MenuJoinComponent Ayuda={Ayuda.uso} component={<BandejaImage />}/> )
}

export default PageBandejaImage;