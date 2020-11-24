import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import MiInicio from '../../../Components/Help/Uso/MiInicio';
import Ayuda from '../../../JSON/Ayuda.json';

const PageMiInicio = () => {

    return ( <MenuJoinComponent Ayuda={Ayuda.uso} component={<MiInicio />}/> )
}

export default PageMiInicio;