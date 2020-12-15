import React from 'react'
import HeaderComponent from '../../Components/Header';
import Home from '../../Components/Help/Home';

/**
 * @file Este archivo se encarga de montar los componentes
 * @author SRPD
 * @function Help
 * @returns {HTML} Retorna la vista unida entre el header y el componente
 */
const Help = () => {

    return (
        <>
            <HeaderComponent ayuda={true} />
            <Home />
        </>
    )
}

export default Help;