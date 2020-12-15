import React, { Component, Fragment } from 'react'
import Editor from '../Components/Editor'
import Axios from 'axios'
import Global from '../Global'
import Swal from 'sweetalert2'
import HeaderComponent from '../Components/Header'
import JWT from '../Class/JWT'
import Identificador from '../Class/Identificador'
import { Redirect } from 'react-router-dom'
import NotAccess from '../Components/NotAccess'

/**
 * @file Es la pagina de creacion de un nuevo foro
 * @author SRPD
 * @class
 * @exports NewForo
 */
export default class NewForo extends Component {

    /**
     * @global
     */
    state = {
        change: false
    }

    /**
     * @function checkText
     * @param {String} text Obtiene el texto que se le pasara a la IA
     * @returns {Boolean} False si el texto no contiene contenido abusivo, true si lo tiene
     */
    checkText = async (text) => {
        var value = true
        await Axios.post(Global.servidor + "pruebaAPItext", { text: text.trim() })
            .then((resp) => {
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
     * @function sendForo
     * @param {JSON} data contenido a publicar como nuevo foro
     */
    sendForo = (data) => {
        const headers = {
            authorization: `Bearer ${JWT.getJWT()}`
        }
        Axios.post(Global.servidor + "newForo", data, { headers })
            .then((resp) => {
                Swal.fire('Seccion creada correctamente', '', 'success')
                    .then((resp) => {
                        if (resp.value) {
                            this.setState({
                                change: true
                            })
                        }
                    });
            })
            .catch((err) => {
                Swal.fire('Error al crear una nueva seccion', '', 'info');
            })
    }

    /**
     * @function submitTest
     * @param {Event} e Trae la informacion del evento
     */
    submitTest = async (e) => {

        /**
         * @constant <String> input
         */
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

            /**
             * @constant <String> descripcion
             * @constant <Element> img
             * @constant <String> titulo
             */
            const descripcion = e;
            const img = document.getElementById("btn_enviar");
            const titulo = document.getElementById("tituloComment").value;

            /**
             * @constant <Boolean> checkTittle
             */
            const checkTittle = await this.checkText(titulo);

            if (!checkTittle) {

                /**
                 * @constant <Boolean> checkDescription
                 */
                const checkDescription = await this.checkText(descripcion)

                if (!checkDescription) {
                    if (img.files[0]) {

                        /**
                         * @constant <FormData> formData
                         */
                        const formData = new FormData();

                        formData.append(
                            'file0',
                            img.files[0],
                            img.files[0].name
                        )

                        /**
                         * @constant <JSON> headers
                         */
                        const headers = {
                            authorization: `Bearer ${JWT.getJWT()}`
                        }

                        Axios.post(Global.servidor + "saveImageForo", formData, { headers })
                            .then((resp) => {

                                /**
                                 * @constant <JSON> headers
                                 */
                                const informationSend = {
                                    titulo,
                                    descripcion,
                                    imagen: resp.data.image,
                                    DocenteId: Identificador.getIdentificador()
                                }

                                Axios.post(Global.servidor + "pruebaAPI", { url: informationSend.imagen }).then((resp) => {

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
                        /**
                         * @constant <JSON> headers
                         */
                        const informationSend = {
                            titulo,
                            descripcion,
                            imagen: '',
                            DocenteId: Identificador.getIdentificador()
                        }

                        this.sendForo(informationSend)
                    }
                }

            }

        }

    }

    /**
     * @function render
     * @returns {HTML} Regresa la vista de la pagina de nuevo foro 
     */
    render() {

        if (this.state.change) {
            return (<Redirect to="/Foro"></Redirect>)
        }
        return (
            <Fragment>
                <HeaderComponent></HeaderComponent>
                {
                    !Identificador.validatorIdentificador() ? (
                        <NotAccess></NotAccess>
                    ) : (
                            <Editor onSubmit={this.submitTest}></Editor>
                        )
                }

            </Fragment>
        )
    }
}