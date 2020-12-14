/**
 * Registro de notificacion push
 * @class
 */
class Push {

    /**
     * @constructor
     */
    constructor() { 
        const value_or_null = (document.cookie.match(/^(?:.*;)?\s*Position\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1]
        this.Position = value_or_null !== null ? value_or_null : ''
        this.publicVapidKey = "BGqQ2mAh7U94YP99ZFvkV5kpw1-Pt4MQ_9yQjMMvnTvgIA31vP9bHarflB10gO0y-v_go8V58tIzHLzgwBQKc8Q"
    }

    /**
     * @description validamos si el navegador tiene serviceWorker
     * @function getSubscription
     * @exports serviceWorker
     */
    getSubscription = async () => {

        if ('serviceWorker' in navigator) {
            return await this.send().catch(err => console.error(err));
        }

        return null
    }

    /**
     * Registramos el service worker para la subscripcion
     * @async
     * @function send
     * @exports serviceWorker
     */
    send = async () => {
        console.log('Registering service worker.....');
        const register = await navigator.serviceWorker.register('/serviceWorker.js', {
            scope: '/'
        });

        console.log('Service Worker Registered....');

        // Register Push
        console.log('Register Push....');
        const subscription = await register.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: this.urlBase64ToUint8Array(this.publicVapidKey)
        });

        return subscription
    }

    /**
     * @function urlBase64ToUint8Array
     * @param {String} base64String 
     */
    urlBase64ToUint8Array = (base64String) => {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/-/g, '+')
            .replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }
    /**
     * Agregamos la posicion en la que fue almacenada
     * @function setPosition
     * @param {String} index 
     */
    setPosition = (index) => {
        this.Position = index;

        let date = new Date()
        date.setDate( date.getDate() + 13);
        
        document.cookie = `Position = ${index}; expires = ${date.toUTCString()};`
    }

    /**
     * Obtenemos la posicion en la que se encuentra la subscripcion
     * @function getPosition
     * @exports Position
     */
    getPosition = () => {
        return this.Position
    }

    /**
     * Limpiamos la subscripcion
     * @function clearPosition
     */
    clearPosition(){
        this.Position = '';
        document.cookie = `Position = ;`
    }

}

/**
 * Exportamos la clase
 * @exports Push
 */
export default new Push()