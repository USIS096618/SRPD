import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import Ayuda from '../../../JSON/Ayuda.json';
import Configuracion from '../../../Components/Help/Administracion/Configuracion';

const PageConfiguracionAdmin = () => {

    return(
        <MenuJoinComponent Ayuda={Ayuda.administra} component={<Configuracion />} />
    )
}

export default PageConfiguracionAdmin;