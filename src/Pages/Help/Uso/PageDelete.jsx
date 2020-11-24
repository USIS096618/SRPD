import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import DeleteForo from '../../../Components/Help/Uso/DeleteForo';
import Ayuda from '../../../JSON/Ayuda.json';

const PageDeleteForo = () => {

    return ( <MenuJoinComponent Ayuda={Ayuda.uso} component={<DeleteForo />}/> )
}

export default PageDeleteForo;