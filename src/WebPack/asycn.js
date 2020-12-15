import Axios from 'axios'
import Global from '../Global'
import JWT from '../Class/JWT';

/**
 * @file Se encarga de realizar la mayoria de funciones asincronas
 * @author SRPD
 * @class
 */
class AsyncMethods {

    /**
     * @function saveImages
     * @param {File} file Archivo el cual se subira a cloudinary
     * @param {String} ruta Ruta de la peticion Ajax
     * @returns {String} Ruta de la imagen
     */
    async saveImages (file, ruta) {

        /**
         * @constant <FormData> formData
         */
        const formData = new FormData();

        formData.append(
            'file0',
            file,
            file.name
        )
        const headers = {
            authorization: `Bearer ${JWT.getJWT()}`
        }

        return await Axios.post(Global.servidor + ruta, formData, {headers})
            .then((resp) => {
                return resp.data.image
            })
        

    }
}

/**
 * @exports AsyncMethods
 */
export default new AsyncMethods()