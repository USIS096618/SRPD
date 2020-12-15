import React, {Component, Fragment} from 'react'
import SideBar from '../Components/SideBar'
import Foros from '../Components/Foros'
import Axios from 'axios'
import Global from '../Global'
import HeaderComponent from '../Components/Header'
import JWT from '../Class/JWT'
import Identificador from '../Class/Identificador'

/**
 * @file Se encarga de cargar la vista del Foro
 * @author SRPD
 * @class
 * @exports Foro
 */
export default class Foro extends Component {

    /** @global */
    state = {
        Datos: {
            recopilados: null,
            mostrar: null
        }
    }

    /**
     * @function update
     * @param {JSON} event Verifica que se debe realizar una actualizacion
     */
    update = (event) => {
        this.getForo()
    }

    /**
     * @function getForo
     */
    getForo = () => {
        
        /**
         * @global
         */
        const headers = {
            authorization: `Bearer ${JWT.getJWT()}`
        } 

        Axios.get(Global.servidor + 'getForos', { headers})
            .then((response) => {
                this.setState({
                    Datos: {
                        recopilados: response.data.Foros ,
                        mostrar: response.data.Foros
                    }
                })
            })
            .catch((err) => {
                console.log(err);
            });

    }

    /**
     * Se ejecuta cuando el componente a sido montado
     * @function UNSAFE_componentWillMount
     */
    UNSAFE_componentWillMount(){
        this.getForo();
    }

    /**
     * @function render
     * @returns {HTML} Carga la vista de la pagina de Foro
     */
    render(){
        return (
            <Fragment>
                <HeaderComponent></HeaderComponent>
                <div className="center">
                    <section id="content">

                        <div id="container-busqueda">
                            
                            {
                                Identificador.validatorIdentificador() && 
                                <SideBar></SideBar>
                            }
                            
                            <div className="container-resultados">
                                <Foros
                                    Data={this.state.Datos.mostrar}
                                    update={this.update}
                                ></Foros>
                            </div>

                        </div>
                        
                    </section>

                    <div className="clearfix"></div>
                </div>
            </Fragment>
        )
    }
}