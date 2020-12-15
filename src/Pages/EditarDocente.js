import React, {Component, Fragment} from 'react'
import HeaderComponent from '../Components/Header'
import SideBarEditar from '../Components/SideBarEditar'
import Axios from 'axios'
import Global from '../Global'
import ShowInfoGeneral from '../Components/ShowInfoGeneral'
import ShowInfoAcademica from '../Components/ShowInfoAcademica'
import ShowInfoPostgrado from '../Components/ShowInfoPostgrado'
import ShowInfoCarrera from '../Components/ShowInfoCarrera'
import ShowInfoOpcional from '../Components/ShowInfoOpcional'
import ShowInfoSeguridad from '../Components/ShowInfoSeguridad'
import JWT from '../Class/JWT'
import Identificador from '../Class/Identificador'
import NotAccess from '../Components/NotAccess'

/**
 * @file Este se encarga de hacer todo lo referente con la pagina de Editar Docente
 * @author SRPD
 * 
 * @class
 * @exports EditarDocente
 */
export default class EditarDocente extends Component {

    /**
     * @global
     */
    state = {
        status: 'cargando',
        data: [],
        show: "General"
    }

    /**
     * @function changeShow
     * @param {String} e Contiene el contenido a mostrar
     */
    changeShow = (e) => {
        /** @constant */
        const {status, data} = this.state;

        this.setState({
            status,
            data,
            show: e
        })
    }
    
    /**
     * Se ejecuta cuando el componente se monta
     * @function UNSAFE_componentWillMount
     */
    UNSAFE_componentWillMount(){
        /** @constant */
        const id = this.props.match.params.id;

        /** @constant */
        const headers = {
            authorization: `Bearer ${JWT.getJWT()}`
        }

        Axios.get(Global.servidor + "getDocente/" + id, {headers})
            .then((resp) => {
                this.setState({
                    status: resp.data.status,
                    data: resp.data.result ? resp.data.result : [],
                    show: this.state.show
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    /**
     * @function render
     * @returns {HTML} Retorna la vista de la pagina de editar docentes
     */
    render(){

        var show = <label></label>

        switch (this.state.show) {
            case "General":
                show = <ShowInfoGeneral data={this.state.data[0]} id={this.props.match.params.id}></ShowInfoGeneral>
                break;
            case "Academica":
                show = <ShowInfoAcademica mod={true} data={this.state.data[0]} id={this.props.match.params.id}></ShowInfoAcademica>
                break;
            case "Postgrado":
                show = <ShowInfoPostgrado mod={true} data={this.state.data[0]} id={this.props.match.params.id}></ShowInfoPostgrado>
                break;
            case "Carrera":
                show = <ShowInfoCarrera mod={true} data={this.state.data[0]} id={this.props.match.params.id}></ShowInfoCarrera>
                break;
            case "Opcional":
                show = <ShowInfoOpcional data={this.state.data[0]} id={this.props.match.params.id}></ShowInfoOpcional>
                break;
            case "Seguridad":
                show = <ShowInfoSeguridad data={this.state.data[0]} id={this.props.match.params.id}></ShowInfoSeguridad>
                break;
            default:
                break;
        }

        return (
            <Fragment>
                <HeaderComponent></HeaderComponent>
                
                {
                    this.state.status === "cargando" ? (
                        <label>cargando...</label>
                    ) : this.state.status === "warning" ? (
                        <label>Esta direccion no existe</label>
                    ) : !Identificador.validatorIdentificador() ?(
                        <div className="center">
                            <section id="content">
                                <h2 className="subheader">Editar Docente</h2>
                                <div id="container-busqueda">
                                    <SideBarEditar
                                        change={this.changeShow}
                                        idDocente={this.props.match.params.id}
                                    ></SideBarEditar>
                                    <div className="container-resultados max-content">
                                        {
                                            this.state.data.length > 0 &&
                                            show
                                        }
                                    </div>
                                    
                                </div>
                                
                            </section>

                            <div className="clearfix"></div>
                        </div>
                    ) : (
                        <NotAccess></NotAccess>
                    )
                }
                
            </Fragment>
        )
    }
}