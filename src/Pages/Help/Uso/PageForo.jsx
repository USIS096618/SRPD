import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import Foro from '../../../Components/Help/Uso/Foro';
import Ayuda from '../../../JSON/Ayuda.json';

const PageForo = () => {

    return ( <MenuJoinComponent Ayuda={Ayuda.uso} component={<Foro />}/> )
}

export default PageForo;