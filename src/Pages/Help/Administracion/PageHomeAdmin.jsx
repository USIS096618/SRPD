import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import Ayuda from '../../../JSON/Ayuda.json';
import HomeAdmin from '../../../Components/Help/Administracion/HomeAdmin';

const PageHomeAdmin = () => {

    return(
        <MenuJoinComponent Ayuda={Ayuda.administra} component={<HomeAdmin />} />
    )
}

export default PageHomeAdmin;