/**
 * Esta clase se encarga de procesar los JWT(JSON Web Token)
 * @class
 */
class JWT {

    /**
     * @constructor
     */
    constructor(){

        const value_or_null = (document.cookie.match(/^(?:.*;)?\s*JWT\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1]
        this.JWT = value_or_null !== null ? value_or_null : ''
    }

    /**
     * Se le agrega un nuevo JWT
     * @function setJWT
     * @param {String} jwt 
     */
    setJWT(jwt){
        this.JWT = jwt;

        let date = new Date()
        date.setDate( date.getDate() + 13);
        
        document.cookie = `JWT = ${jwt}; expires = ${date.toUTCString()};`
    }

    /**
     * Se limpia el JWT
     * @function clearJWT
     */
    clearJWT(){
        this.JWT = '';
        document.cookie = `JWT = ;`
    }

    /**
     * Valida si existe un token
     * @function validatorJWT
     */
    validatorJWT(){
        if (this.JWT !== '') {
            return true
        } else {
            return false
        }
    }
    /**
     * Nos regresa el valor del JWT
     * @function getJWT
     * @exports JWTValue
     */
    getJWT(){
        return this.JWT
    }
}

/**
 * @exports JWT
 */
export default new JWT()