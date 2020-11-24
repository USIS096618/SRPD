import React from 'react'
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import Ayuda from '../../../JSON/Ayuda.json'
import CrearCuenta from '../../../Components/Help/Uso/CrearCuenta';

const PageCrearCuenta = () => {

    return (
        <MenuJoinComponent Ayuda={Ayuda.uso} component={<CrearCuenta />}/>
    )
}

export default PageCrearCuenta;