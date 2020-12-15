import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import MiInicio from '../../../Components/Help/Uso/MiInicio';
import Ayuda from '../../../JSON/Ayuda.json';

/**
 * @file Este archivo se encarga de montar los componentes para la pagina de ayuda - Mi Inicio
 * @author SRPD
 * @function PageMiInicio
 * @returns {HTML} Retorna la vista de la pagina ayuda - Mi Inicio
 */
const PageMiInicio = () => {

    return ( <MenuJoinComponent Ayuda={Ayuda.uso} component={<MiInicio />}/> )
}

export default PageMiInicio;