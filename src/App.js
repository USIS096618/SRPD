import React, {Component} from 'react';
import './Assets/CSS/App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { ProtectedRoute } from "./Protected.route";
import Login from './Pages/Login';
import {Home} from './Pages/Home';
import Registro from './Pages/Registro';
import Buscador from './Pages/Buscador';
import Bandeja from './Pages/Bandeja';
import NewForo from './Pages/NuevoForo';
import Foro from './Pages/Foro';
import ForoComment from './Pages/ForoComment'
import EditForo from './Pages/EditarForo'
import EditDocente from './Pages/EditarDocente'
import RecuperarCuenta from './Pages/RecuperarCuenta'
import forgetPassword from './Pages/forgetPassword'
import Footer from './Components/Footer'
import Error404 from './Pages/Error404'
import Help from './Pages/Help/Help';
import PageCrearCuenta from './Pages/Help/Uso/PageCrearCuenta';
import PageHomeUso from './Pages/Help/Uso/PageHomeUso';
import PageMiInicio from './Pages/Help/Uso/PageMiInicio';
import PageBandeja from './Pages/Help/Uso/PageBandeja';
import PageBandejaMensaje from './Pages/Help/Uso/PageBandejaMensaje';
import PageBandejaImage from './Pages/Help/Uso/PageBandejaImage';
import PageForo from './Pages/Help/Uso/PageForo';
import PageNewForo from './Pages/Help/Uso/PageNewForo';
import PageEditForo from './Pages/Help/Uso/PageEditForo';
import PageDeleteForo from './Pages/Help/Uso/PageDelete';
import PageCommentForo from './Pages/Help/Uso/PageCommentForo';
import PageHomeAdmin from './Pages/Help/Administracion/PageHomeAdmin';
import PageSesionAdmin from './Pages/Help/Administracion/PageSesionAdmin';
import PageCambioPassAdmin from './Pages/Help/Administracion/PageCambioPassAdmin';
import PageConfiguracionAdmin from './Pages/Help/Administracion/PageConfiguracionAdmin';
import PageInformacionAdmin from './Pages/Help/Administracion/PageInformacionAdmin';
import PageDownloadAdmin from './Pages/Help/Administracion/PageDownloadAdmin';

/**
 * @file Este es el nucleo de la aplicacion, es el que se encarga de generar todas las rutas
 * @author SRPD
 * @class
 */
class App extends Component {

  /**
   * @function render Se encarga de entregar un documento html
   * @returns {html} Me regresa mi componente App con todas las rutas cargadas
   */
  render(){

    return (
      <div className="App">
        <div className="bottom">
          <BrowserRouter>
            <Switch>
              <Route exact path="/Login" component={Login} />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/Home" component={Home} />
              <ProtectedRoute exact path="/Registro" component={Registro} />
              <ProtectedRoute exact path="/Buscador" component={Buscador} />
              <ProtectedRoute exact path="/Registro/Editar/:id" component={EditDocente}/>
              <ProtectedRoute exact path="/Bandeja" component={Bandeja} />
              <ProtectedRoute exact path="/Foro/Nuevo" component={NewForo} />
              <ProtectedRoute exact path="/Foro/Editar/:id" component={EditForo} />
              <ProtectedRoute exact path="/Foro" component={Foro}/>
              <ProtectedRoute exact path="/Foro/:id" component={ForoComment} />
              <Route exact path="/Recuperar" component={RecuperarCuenta} />
              <Route exact path="/Recuperar/:id/:type" component={forgetPassword} />

              {/* Rutas de ayuda */}
              <Route exact path="/Ayuda" component={Help} />

                {/* Rutas de Uso SRPD */}
              <Route exact path="/Ayuda_/Uso" component={PageHomeUso} />
              <Route exact path="/Ayuda_/Uso/Crear_Cuenta" component={PageCrearCuenta} />
              <Route exact path="/Ayuda_/Uso/Mi_Pagina" component={PageMiInicio} />
              <Route exact path="/Ayuda_/Uso/Bandeja" component={PageBandeja} />
              <Route exact path="/Ayuda_/Uso/Bandeja_Envio_Mensaje" component={PageBandejaMensaje} />
              <Route exact path="/Ayuda_/Uso/Bandeja_Envio_Image" component={PageBandejaImage} />
              <Route exact path="/Ayuda_/Uso/Foro" component={PageForo} />
              <Route exact path="/Ayuda_/Uso/Nuevo_Foro" component={PageNewForo} />
              <Route exact path="/Ayuda_/Uso/Editar_Foro" component={PageEditForo} />
              <Route exact path="/Ayuda_/Uso/Eliminar_Foro" component={PageDeleteForo} />
              <Route exact path="/Ayuda_/Uso/Foro_Comentarios" component={PageCommentForo} />

                {/* Rutas de Administracion del SRPD */}
              <Route exact path="/Ayuda_/Administrar" component={PageHomeAdmin} />
              <Route exact path="/Ayuda_/Administrar/Sesion" component={PageSesionAdmin} />
              <Route exact path="/Ayuda_/Administrar/Cambio_Pass" component={PageCambioPassAdmin} />
              <Route exact path="/Ayuda_/Administrar/Configuracion" component={PageConfiguracionAdmin} />
              <Route exact path="/Ayuda_/Administrar/Informacion" component={PageInformacionAdmin} />
              <Route exact path="/Ayuda_/Administrar/Descargar_Informacion" component={PageDownloadAdmin} />

              {/* Ruta de error 404 */}
              <Route exact path="**" component={Error404} />
            </Switch>
          </BrowserRouter>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

/**
 * @exports App
 */
export default App;
