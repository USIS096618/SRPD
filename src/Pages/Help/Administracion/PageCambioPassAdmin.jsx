import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import Ayuda from '../../../JSON/Ayuda.json';
import CambioPass from '../../../Components/Help/Administracion/CambioPass';

const PageCambioPassAdmin = () => {

    return(
        <MenuJoinComponent Ayuda={Ayuda.administra} component={<CambioPass />} />
    )
}

export default PageCambioPassAdmin;