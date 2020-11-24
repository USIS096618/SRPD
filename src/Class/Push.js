class Push {

    constructor() { 
        const value_or_null = (document.cookie.match(/^(?:.*;)?\s*Position\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1]
        this.Position = value_or_null !== null ? value_or_null : ''
        this.publicVapidKey = "BGqQ2mAh7U94YP99ZFvkV5kpw1-Pt4MQ_9yQjMMvnTvgIA31vP9bHarflB10gO0y-v_go8V58tIzHLzgwBQKc8Q"
    }

    getSubscription = async () => {

        if ('serviceWorker' in navigator) {
            return await this.send().catch(err => console.error(err));
        }

        return null
    }

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

    setPosition = (index) => {
        this.Position = index;

        let date = new Date()
        date.setDate( date.getDate() + 13);
        
        document.cookie = `Position = ${index}; expires = ${date.toUTCString()};`
    }

    getPosition = () => {
        return this.Position
    }

    clearPosition(){
        this.Position = '';
        document.cookie = `Position = ;`
    }

}

export default new Push()