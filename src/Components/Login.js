import React, {Component} from 'react'
import Icon from '../Assets/Images/svg/avatar.svg'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import Global from '../Global'
import JWT from '../Class/JWT'
import Identificador from '../Class/Identificador'
import Push from '../Class/Push'

export default class LoginComponent extends Component {

    constructor(props){
        super(props);
        this.connectSocket = Global.ConnectChat;
    }

    Usuario = React.createRef();
    Password = React.createRef();
    AdminRef = React.createRef();
    DocenteRef = React.createRef();
    
    Register = () => {
        
        this.props.Registrar('Register');
    }

    Login = async (e) => {
        e.preventDefault();
        
        Swal.fire({
            title: 'Iniciando Sesion...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            },
        });


        var params = {
            User: this.Usuario.current.value,
            Password: this.Password.current.value
        };

        if (this.DocenteRef.current.checked) {
            axios.post(Global.servidor + 'LoginDocente', params)
            .then(async (resp) => {

                const {_id, sesionActive} = resp.data.user[0]

                Identificador.setIdentificador(_id)
                JWT.setJWT(resp.data.token)
                this.connectSocket.emit('newVisit', {});

                const subscription = await Push.getSubscription();

                const positionNew = sesionActive.length

                sesionActive.push(subscription)

                await axios.post(Global.servidor + "pushDocente", {id: resp.data.user[0]._id, sesion: sesionActive}).then(() => {
                    Push.setPosition(positionNew)
                })
                .catch( err => {
                    console.error(err)
                })

                return resp.data.token;
            })
            .then( resp => {
                Swal.close();
                this.props.History(resp);
            })
            .catch(error => {
                Swal.fire('Error', 'Este usuario no existe !!!', 'info');
            });
        } else {
            axios.post(Global.servidor + 'Login', params)
            .then(async (resp) => {
                JWT.setJWT(resp.data.token)

                const subscription = await Push.getSubscription();
                
                await axios.post(Global.servidor + "pushAdmin", {sesion: subscription}).then((resp) => {
                    Push.setPosition(resp.data.doc._id)
                })
                .catch((err) => {
                    console.error(err);
                })

                return resp.data.token;
            })
            .then( resp => {
                Swal.close();
                this.props.History(resp);
            })
            .catch(error => {
                Swal.fire('Error', 'Este usuario no existe !!!', 'info');
            });
        }

        
    }

    render() {
        return (
            <form method="GET" onSubmit={this.Login} id="frmLogin">

                <img src={Icon} alt="Icono"/>

                <h2 className="title-login">Bienvenido</h2>

                <div className="input-div">
                    <div className="i">
                            <i className="fas fa-user"></i>
                    </div>
                    <div className="div">
                            <h5>Usuario</h5>
                            <input required type="text" className="input" ref={this.Usuario}/>
                    </div>
                </div>

                <div className="input-div">
                    <div className="i"> 
                        <i className="fas fa-lock"></i>
                    </div>
                    <div className="div">
                        <h5>Contraseña</h5>
                        <input required type="password" className="input" ref={this.Password}/>
                    </div>
                </div>

                <Link to="/Recuperar">¿Has olvidado la contraseña?</Link>
                <Link to="/Ayuda">¿Necesitas ayuda?</Link>
                
                <div className="type-access">
                    <div className="type-access-container">
                        <input type="radio" name="access" value="Admin" ref={this.AdminRef}/> MINED
                    </div>
                    <div className="type-access-container">
                        <input type="radio" name="access" defaultChecked value="Docente" ref={this.DocenteRef}/> Docente
                    </div>
                </div>

                <input type="submit" className="btn" value="Iniciar Sesion"/>
                <input type="button" value="Crear Cuenta" className="btn" onClick={this.Register}/>
                                
            </form>
        )
    }
}