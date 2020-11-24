import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import EditForo from '../../../Components/Help/Uso/EditForo';
import Ayuda from '../../../JSON/Ayuda.json';

const PageEditForo = () => {

    return ( <MenuJoinComponent Ayuda={Ayuda.uso} component={<EditForo />}/> )
}

export default PageEditForo;