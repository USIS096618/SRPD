import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import Ayuda from '../../../JSON/Ayuda.json';
import Sesion from '../../../Components/Help/Administracion/Sesion';

const PageSesionAdmin = () => {

    return(
        <MenuJoinComponent Ayuda={Ayuda.administra} component={<Sesion />} />
    )
}

export default PageSesionAdmin;