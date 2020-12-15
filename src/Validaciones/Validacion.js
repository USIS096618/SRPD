/**
 * @file Se encarga de validar los datos ingresados en los React Select
 * @author SRPD
 * @class
 */
class Validacion {

    /**
     * @function ValidatorSelect
     * @param {String} value Valor a buscar en el array
     * @param {Array} data Array en el que se buscara el valor
     * @returns {Boolean} Regresa True si el valor se encuentra en el array y false si no
     */
    ValidatorSelect(value, data) {
        var status = false;
    
        data.map((val, i) => {
            if (val.value === value) {
                status = true;
                
            }
            return val;
        });
        
        return status;
    }

    /**
     * @function ValidatorSelect
     * @param {String} value Valor a buscar en el array
     * @param {Array} data Array en el que se buscara el valor
     * @returns {Boolean} Regresa True si el valor se encuentra en el array y false si no
     */
    ValidatorSelectMunicipios(value, data) {
        var status = false;
        
        data.map((val, i) => {
            if (val.label === value) {
                status = true;
                
            }
            return val;
        });
        
        return status;
    }

    /**
     * @function ValidatorSelect
     * @param {String} value Valor a buscar en el array
     * @param {Array} data Array en el que se buscara el valor
     * @param {String} option Verifica que tipo de validacion se ara
     * @returns {Boolean} Regresa True si el valor se encuentra en el array y false si no
     */
    ValidatorSelectCreate(value, data, option) {
        var status = false;
    
        if (option === "Universidad") {
            data.map((val, i) => {
                if (val.value.Universidad === value) {
                    status = true;
                    
                }
                return val;
            });
        } else {
            data.map((val, i) => {
                if (val.value === value) {
                    status = true;
                    
                }
                return val;
            });
        }
        
        return status;
    }

    /**
     * @function ChangeStep
     * @param {JSON} e Almacena el cambio de ventana del registro(Retroceder, Avanzar)
     */
    ChangeStep(e) {

        let progressOptions = document.querySelectorAll('.progressbar__option');
        

        if (e.next || e.back) {
            let currentStep = document.getElementById('step-' + e.step);
            let jumpStep = document.getElementById('step-' + e.to_Step);
            currentStep.addEventListener('animationend', function callback() {

                setTimeout(() => {
                    jumpStep.classList.add('visible');
                }, 500)
                
                
                currentStep.classList.remove('active');
                jumpStep.classList.add('active');
                
                if (e.next) {
                    
                    currentStep.classList.add('to-left');
                    progressOptions[e.to_Step - 1].classList.add('active');
                } else {
                    
                    jumpStep.classList.remove('to-left');
                    progressOptions[e.step - 1].classList.remove('active');
                }
                currentStep.removeEventListener('animationend', callback);
            });
            currentStep.classList.add('inactive');
            jumpStep.classList.remove('inactive');
            currentStep.classList.add('visible');
            jumpStep.classList.remove('visible');

            setTimeout(() => {
                currentStep.classList.remove('visible');
            }, 1000)
        }
    }

    /**
     * @function isJSON
     * @param {*} item Verificara si el resultado es un tipo JSON
     * @returns {Boolean} True si el dato ingresado es un tipo JSON, de lo contrario sera un false
     */
    isJson(item) {
        item = typeof item !== "string"
            ? JSON.stringify(item)
            : item;
    
        try {
            item = JSON.parse(item);
        } catch (e) {
            return false;
        }
    
        if (typeof item === "object" && item !== null) {
            return true;
        }
    
        return false;
    }

}
  
/**
 * @exports Validacion
 */
export default new Validacion();
