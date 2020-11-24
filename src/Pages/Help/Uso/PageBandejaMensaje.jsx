import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import BandejaMensaje from '../../../Components/Help/Uso/BandejaMensaje';
import Ayuda from '../../../JSON/Ayuda.json';

const PageBandejaMensaje = () => {

    return ( <MenuJoinComponent Ayuda={Ayuda.uso} component={<BandejaMensaje />}/> )
}

export default PageBandejaMensaje;