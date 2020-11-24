import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import Ayuda from '../../../JSON/Ayuda.json';
import Descargar from '../../../Components/Help/Administracion/Descargar';

const PageDownloadAdmin = () => {

    return(
        <MenuJoinComponent Ayuda={Ayuda.administra} component={<Descargar />} />
    )
}

export default PageDownloadAdmin;