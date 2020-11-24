import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import Ayuda from '../../../JSON/Ayuda.json';
import Informacion from '../../../Components/Help/Administracion/Informacion';

const PageInformacionAdmin = () => {

    return(
        <MenuJoinComponent Ayuda={Ayuda.administra} component={<Informacion />} />
    )
}

export default PageInformacionAdmin;