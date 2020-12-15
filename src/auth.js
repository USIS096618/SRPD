/**
 * @file Esta clase se encarga de la autenticacion del usuario
 * @author SRPD
 * @class
 */
class Auth {

  /**
   * @constructor
   */
    constructor() {
      this.authenticated = false;
    }
  
    /**
     * @function login
     * @param {function} cb Realizara la funcion de logearse
     */
    login(cb) {
      this.authenticated = true;
      cb();
    }
  
    /**
     * @function logout
     * @param {function} cb Realizara la funcionde logout
     */
    logout(cb) {
      this.authenticated = false;
      cb();
    }
    
    /**
     * @function isAuthenticated
     * @returns {Boolean} True => si tiene permiso, y False si no tiene permiso
     */
    isAuthenticated() {
      return this.authenticated;
    }
  }
  
  /**
   * @exports Auth
   */
  export default new Auth();