import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import Bandeja from '../../../Components/Help/Uso/Bandeja';
import Ayuda from '../../../JSON/Ayuda.json';

const PageBandeja = () => {

    return ( <MenuJoinComponent Ayuda={Ayuda.uso} component={<Bandeja />}/> )
}

export default PageBandeja;