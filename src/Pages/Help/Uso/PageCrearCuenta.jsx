import React from 'react'
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import Ayuda from '../../../JSON/Ayuda.json'
import CrearCuenta from '../../../Components/Help/Uso/CrearCuenta';

/**
 * @file Este archivo se encarga de montar los componentes para la pagina de ayuda - Crear Cuenta
 * @author SRPD
 * @function PageCrearCuenta
 * @returns {HTML} Retorna la vista de la pagina ayuda - Crear Cuenta
 */
const PageCrearCuenta = () => {

    return (
        <MenuJoinComponent Ayuda={Ayuda.uso} component={<CrearCuenta />}/>
    )
}

export default PageCrearCuenta;