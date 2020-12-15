import React, { Fragment } from 'react'
// import Tarjeta from '../Components/Tarjeta'
import HeaderComponent from '../Components/Header'
import Identificador from '../Class/Identificador';
import CharLine from '../Components/ChartLine';
import EditarDocenteRestric from '../Components/EditarDocenteRestric'

/**
 * @file Se encarga de mostrar la vista de la pagina de Home
 * @author SRPD
 */

/**
 * @function Home
 * @param {JSON} props Contiene las propierdades del component
 * @returns {HTML} Vista de mi componente Home
 * @exports Home
 */
export const Home = (props) => {
    
    return (
        <Fragment>
            <HeaderComponent></HeaderComponent>
            
            {
                Identificador.validatorIdentificador() ? (
                    <EditarDocenteRestric></EditarDocenteRestric>
                ) : (
                    <CharLine/>
                )
            }
        </Fragment>
    );
}