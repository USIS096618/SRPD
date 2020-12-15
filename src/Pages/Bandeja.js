import React, {Component, Fragment} from 'react'
import User from '../Components/Chat/User'
import ChatColumn from '../Components/Chat/ChatColumn'
import Axios from 'axios'
import Global from '../Global'
import HeaderComponent from '../Components/Header'
import JWT from '../Class/JWT'
import Identificador from '../Class/Identificador'

/**
 * @file Este archivo contiene todo lo referente con la pagina de Bandeja
 * @author SRPD
 * 
 * @class
 * @exports Bandeja
 */
export default class Bandeja extends Component {

    /**
     * @constructor
     */
    constructor(props){
        super(props)
        this.connectSocket = Global.ConnectChat
    }

    /**
     * @global
     */
    state = {
        Docentes: {
            recopilados: null,
            mostrar: null
        },
        Docente: null
    }

    search = React.createRef();

    /**
     * @function getDocentes
     */
    getDocentes = () => {
        
        /** @constant */
        const headers = {
            authorization: `Bearer ${JWT.getJWT()}`
        } 

        Axios.get(Global.servidor + 'getDocentes/desc', { headers})
            .then((response) => {
                this.setState({
                    Docentes: {
                        recopilados: response.data.Docentes,
                        mostrar: response.data.Docentes
                    },
                    Docente: this.state.Docente
                })
            })
            .catch((err) => {
                console.log(err);
            });

    }

    /**
     * @function docenteSelection
     * @param {JSON} event Contiene el docente seleccionado para el chat
     */
    docenteSelection = (event) => {
        this.setState({
            Docentes: this.state.Docentes,
            Docente: event
        })
    }

    /**
     * @function searchDocentes
     * @param {JSON} event Contiene la tecla que a presionado el usuario
     */
    searchDocentes = (event) => {
        if (event.key === "Enter") {

            /**
             * @constant
             */
            const NombreSearch = this.search.current.value.toLowerCase();

            /**
             * @constant
             */
            const ArrayFilter = this.state.Docentes.recopilados.filter((val, i) => {

                /** @constant */
                const Nombre =  val.Nombre.toLowerCase()
                
                if (Nombre.indexOf(NombreSearch) !== -1 ) {
                    return true;
                }
                else{
                    return false;
                }
            });
            
            this.setState({
                Docentes: {
                    recopilados: this.state.Docentes.recopilados,
                    mostrar: ArrayFilter
                },
                Docente: this.state.Docente
            });
        }
        
    }

    /**
     * Esta funcion se ejecuta cuando el componente es montado
     * @function UNSAFE_componentWillMount
     */
    UNSAFE_componentWillMount(){
        this.getDocentes()


    }

    /**
     * Esta funcion se ejecuta cuando el componente se a terminado de montar
     * @function componentDidMount
     */
    componentDidMount(){
        this.connectSocket.on("searchMSG", (data) => {
            this.getDocentes();
        })
    }

    /**
     * @function render
     * @returns {HTML} Retorna la vista de la pagina de bandeja
     */
    render(){
        var docentes = null;
        if (this.state.Docentes.mostrar !== null && this.state.Docentes.mostrar !== undefined) {
            docentes = this.state.Docentes.mostrar.map((value, i) => {
                return <User docente={value} docenteSelection={this.docenteSelection} key={i}></User>
            })
        }
        else{
            docentes = <label></label>
        }
        return (
            <Fragment>
                <HeaderComponent></HeaderComponent>
                <div className="main-container">

                    {
                        !Identificador.validatorIdentificador() &&
                        <div className="users-column">
                            <div className="title">
                                <div className="search-container">
                                    <i className="fas fa-search"></i>
                                    <input type="text" className="input-search" placeholder="Buscar...." ref={this.search} onKeyPress={this.searchDocentes}/>
                                </div>
                            </div>
                            <div className="users">
                                {docentes}
                                
                            </div>
                        </div>
                    }
                    
                    <div className="chat-column">
                        <ChatColumn salaChat={this.state.Docente}></ChatColumn>
                    </div>
                </div>
            </Fragment>
        )
    }
}