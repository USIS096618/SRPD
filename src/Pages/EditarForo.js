import React, { Component, Fragment } from 'react'
import Editor from '../Components/Editor'
import Axios from 'axios'
import Global from '../Global'
import Swal from 'sweetalert2'
import HeaderComponent from '../Components/Header'
import { Redirect } from 'react-router-dom'
import JWT from '../Class/JWT'

/**
 * @file Se encarga de los procesos de editar foro
 * @author SRPD
 * 
 * @class
 * @exports NewForo
 */
export default class NewForo extends Component {

    /**
     * @global
     */
    state = {
        informacion: null,
        redirect: false
    }

    /**
     * @function sendForo
     * @param {JSON} data Contiene toda la informacion editada para guardar
     */
    sendForo = (data) => {

        /**
         * @constant
         */
        const headers = {
            authorization: `Bearer ${JWT.getJWT()}`
        }
        Axios.put(Global.servidor + "updateForo", data, { headers })
            .then((resp) => {
                if (resp.data.status !== 'error') {
                    Swal.fire('Seccion actualizada correctamente', '', 'success');
                    this.setState({
                        informacion: this.state.informacion,
                        redirect: true
                    })
                } else {
                    Swal.fire('Error al actualizar la seccion', '', 'info');
                }
            })
            .catch((err) => {
                Swal.fire('Error al conectar con el servidor', '', 'error');
            })
    }

    /**
     * @function checkText
     * @param {String} text Contiene el texto a procesar para la revision de comportamiento abusivo
     * @returns {Boolean} Regresa true si el contenido es abusivo de lo contrario, retornara false
     */
    checkText = async (text) => {
        var value = true
        await Axios.post(Global.servidor + "pruebaAPItext", { text: text.trim() })
            .then((resp) => {
                /** @constant */
                const api = resp.data

                if (!api.profanity) {
                    value = false
                } else {
                    Swal.fire('Contenido de Agresion', api.text, 'error')
                }
            })
            .catch((err) => {
                console.log(err);
            })

        return value
    }

    /**
     * @function submitTest
     * @param {String} e Contiene el contenido del body
     */
    submitTest = async (e) => {

        /** @constant */
        const input = document.getElementById("tituloComment").value

        if (input.trim() === '') {
            Swal.fire('Titulo', 'El titulo es obligatorio', 'info')
        }
        else {
            Swal.fire({
                title: 'Creando seccion...',
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading()
                },
            });

            /** @constant */
            const descripcion = e;
            /** @constant */
            const img = document.getElementById("btn_enviar");
            /** @constant */
            const titulo = document.getElementById("tituloComment").value;
            /** @constant */
            const checkTittle = await this.checkText(titulo);

            if (!checkTittle) {
                /** @constant */
                const checkDescription = await this.checkText(descripcion)

                if (!checkDescription) {

                    if (img.files[0]) {

                        /** @constant */
                        const headers = {
                            authorization: `Bearer ${JWT.getJWT()}`
                        }

                        /** @constant */
                        const formData = new FormData();

                        formData.append(
                            'file0',
                            img.files[0],
                            img.files[0].name
                        )

                        Axios.post(Global.servidor + "saveImageForo", formData, { headers })
                            .then((resp) => {
                                /**
                                 * @constant
                                 */
                                const informationSend = {
                                    id: this.state.informacion._id,
                                    data: {
                                        titulo,
                                        descripcion,
                                        imagen: resp.data.image
                                    }
                                }

                                Axios.post(Global.servidor + "pruebaAPI", { url: informationSend.data.imagen }).then((resp) => {

                                    if (resp.data.profanity || resp.data.nudity) {
                                        Swal.fire('', resp.data.message, 'error')

                                    }
                                    else {

                                        this.sendForo(informationSend)
                                    }
                                }).catch((err) => {
                                    console.log(err);
                                })
                            })
                            .catch((err) => {
                                Swal.fire('Error al subir imagen', '', 'info');
                            })
                    } else {
                        /** @constant */
                        const informationSend = {
                            id: this.state.informacion._id,
                            data: {
                                titulo,
                                descripcion,
                                imagen: this.state.informacion.imagen
                            }
                        }

                        this.sendForo(informationSend)
                    }
                }
            }


        }
    }

    /**
     * @function getForo
     */
    getForo = () => {
        /** @constant */
        const headers = {
            authorization: `Bearer ${JWT.getJWT()}`
        }
        Axios.get(Global.servidor + "getForo/" + this.props.match.params.id, { headers })
            .then((resp) => {
                this.setState({
                    informacion: resp.data.Foros[0]
                })
                document.getElementById("tituloComment").value = resp.data.Foros[0].titulo;
                document.getElementById("editor").innerHTML = resp.data.Foros[0].descripcion;

                if (resp.data.Foros[0].imagen !== null) {
                    document.getElementById("imagePrevia").src = resp.data.Foros[0].imagen
                }

            })
            .catch((err) => {
                console.log(err);
            })
    }

    /**
     * Se ejecuta cuando el componente a sido montado
     * @function UNSAFE_componentWillMount
     */
    UNSAFE_componentWillMount() {
        this.getForo()
    }

    /**
     * @function render
     * @returns {HTML} Retorna la vista de la pagina de Editar foro
     */
    render() {

        if (this.state.redirect) {
            return (<Redirect to="/Foro"></Redirect>)
        }
        return (
            <Fragment>
                <HeaderComponent></HeaderComponent>
                {
                    this.state.informacion !== null ? (
                        <Editor onSubmit={this.submitTest}></Editor>
                    ) : (
                            <label>Cargando...</label>
                        )
                }
            </Fragment>
        )
    }
}