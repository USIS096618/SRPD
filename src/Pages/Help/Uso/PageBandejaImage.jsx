import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import BandejaImage from '../../../Components/Help/Uso/BandejaImage';
import Ayuda from '../../../JSON/Ayuda.json';

const PageBandejaImage = () => {

    return ( <MenuJoinComponent Ayuda={Ayuda.uso} component={<BandejaImage />}/> )
}

export default PageBandejaImage;