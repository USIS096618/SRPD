/**
 * Esta es la clase identificador que nos dira si se encuentra en cuanta docente o MINED
 * @class
 */
class Identificador {

    /**
     * @constructor
     */
    constructor(){

        const value_or_null = (document.cookie.match(/^(?:.*;)?\s*Docente\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1]
        this.Identificador = value_or_null !== null ? value_or_null : ''

    }

    /**
     * Se le agrega un nuevo identificador
     * @function setIdentificador
     * @param {String} id 
     */
    setIdentificador(id){
        this.Identificador = id

        let date = new Date()
        date.setDate( date.getDate() + 13);

        document.cookie = `Docente = ${id}; expires = ${date.toUTCString()};`
    }

    /**
     * Limpia nuestro identificador
     * @function clearIdentificador
     */
    clearIdentificador(){
        this.Identificador = ''
        document.cookie = `Docente = ;`
    }

    /**
     * Validamos si es un Docente(True) o MINED(False)
     * @function validatorIdentificador
     * @exports Boolean 
     */
    validatorIdentificador(){
        if (this.Identificador !== '') {
            return true
        } else {
            return false
        }
    }

    /**
     * Obtenemos el contenido del Identificador
     * @function getIdentificador
     * @exports IdentificadorValue
     */
    getIdentificador(){
        return this.Identificador
    }
}

/**
 * @exports Identificador
 */
export default new Identificador()