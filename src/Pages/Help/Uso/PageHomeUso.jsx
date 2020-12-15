import React from 'react'
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import Ayuda from '../../../JSON/Ayuda.json'

/**
 * @file Este archivo se encarga de montar los componentes para la pagina de ayuda - Home
 * @author SRPD
 * @function PageHomeUso
 * @returns {HTML} Retorna la vista de la pagina ayuda - Home
 */
const PageHomeUso = () => {

    return ( <MenuJoinComponent Ayuda={Ayuda.uso} component={() => <h1>Hola mundo</h1>}/>)
}

export default PageHomeUso;