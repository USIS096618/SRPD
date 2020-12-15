import React, {Component, Fragment} from 'react'
import SideBar from '../Components/SideBar'
import HeaderComponent from '../Components/Header'
import Docentes from '../Components/Docentes'
import Axios from 'axios'
import Global from '../Global'
import Moment from 'moment'
import JWT from '../Class/JWT'

/**
 * @file Se encarga de todo lo que tenga que ver con el buscador
 * @author SRPD
 * 
 * @class
 * @exports Buscador
 */
export default class Buscador extends Component {

    /**
     * @global
     */
    state = {
        Datos: {
            recopilados: null,
            mostrar: null
        }
    }

    /**
     * Se obtienen el array de docentes
     * @function getDocentes
     */
    getDocentes = () => {
        
        /** @constant */
        const headers = {
            authorization: `Bearer ${JWT.getJWT()}`
        } 

        Axios.get(Global.servidor + 'getDocentes', { headers})
            .then((response) => {
                this.setState({
                    Datos: {
                        recopilados: response.data.Docentes,
                        mostrar: response.data.Docentes
                    }
                })
            })
            .catch((err) => {
                console.log(err);
            });

    }

    /**
     * @function searchDocentes
     * @param {JSON} event Obtiene la informacion a buscar
     */
    searchDocentes = (event) => {
        
        /** @constant */
        const ArrayFilter = this.state.Datos.recopilados.filter((val, i) => {
            
            /** @constant */
            const Nombre =  val.Nombre.toLowerCase()
            /** @constant */
            const FechaNac = (Moment().diff(val.FechaNac, 'years')).toString()
            /** @constant */
            const Carrera = val.Academica.Carrera.toLowerCase()
            /** @constant */
            const Categoria = val.Academica.CategoriaDocente.toLowerCase()
            /** @constant */
            const Egreso = (Moment(val.Academica.Egreso).add(1, "days").format('L')).toString()
            /** @constant */
            const Nivel = val.Academica.NivelDocente.toLowerCase()

            event.Egreso = event.Egreso !== "fecha invalida" ? event.Egreso : ''
            
            if (Nombre.indexOf(event.Nombre) !== -1 && FechaNac.indexOf(event.Edad) !== -1  && Carrera.indexOf(event.Carrera) !== -1 && Categoria.indexOf(event.Categoria) !== -1 && Egreso.indexOf(event.Egreso) !== -1 && Nivel.indexOf(event.Nivel) !== -1) {
                return true;
            }
            else{
                return false;
            }
        });
        
        this.setState({
            Datos: {
                recopilados: this.state.Datos.recopilados,
                mostrar: ArrayFilter
            }
        });

    }

    /**
     * @function delete
     * @param {String} e activa la funcion delete
     */
    delete = (e) => {
        this.getDocentes()
    }

    /**
     * Se ejecuta cuando el componente es montado
     * @function UNSAFE_componentWillMount
     */
    UNSAFE_componentWillMount(){
        this.getDocentes();
    }

    /**
     * @function render
     * @returns {HTML} Regresa la vista de la pagina del buscador
     */
    render() {
        return (
            <Fragment>
                <HeaderComponent></HeaderComponent>
                <div className="center">
                    <section id="content">
                        <h2 className="subheader">Resultados de busqueda</h2>
                        <div id="container-busqueda">
                            <SideBar
                                search={this.searchDocentes}
                            ></SideBar>
                            <div className="container-resultados">
                                <Docentes
                                    Data={this.state.Datos.mostrar}
                                    delete={this.delete}
                                ></Docentes>
                            </div>
                            
                        </div>
                        
                    </section>

                    <div className="clearfix"></div>
                </div>
            </Fragment>
            
        )
    }
}