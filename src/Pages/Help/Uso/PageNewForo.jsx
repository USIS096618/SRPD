import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import NewForo from '../../../Components/Help/Uso/NewForo';
import Ayuda from '../../../JSON/Ayuda.json';

const PageNewForo = () => {

    return ( <MenuJoinComponent Ayuda={Ayuda.uso} component={<NewForo />}/> )
}

export default PageNewForo;