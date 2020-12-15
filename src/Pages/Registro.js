import React, {Component, Fragment} from 'react'
import HeaderComponent from '../Components/Header';
import Paginador from '../Components/Paginador'
import RegistroDocentes from '../Components/RegistroDocente'
import Identificador from '../Class/Identificador';

/**
 * @file Es la pagina de Registro de docente
 * @author SRPD
 * @class
 * @exports Registro
 */
export default class Registro extends Component {

    /**
     * @funtion render
     * @returns {HTML} Regresa la vista de la pagina de Registro
     */
    render(){
        return (
            <Fragment>
                <HeaderComponent></HeaderComponent>

                {
                    Identificador.validatorIdentificador() ? (
                        <label>No tienes permiso para usar este modulo</label>
                    ) : (
                        <div className="root" id="registro">
                            <div className="form-register">
                                <Paginador></Paginador>

                                <div className="form-register__body">
                                    <RegistroDocentes change={this.animation}></RegistroDocentes>
                                </div>
                            </div>
                        </div>
                    )
                }
                
            </Fragment>
        )
    }
}