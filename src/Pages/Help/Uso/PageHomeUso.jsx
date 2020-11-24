import React from 'react'
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import Ayuda from '../../../JSON/Ayuda.json'

const PageHomeUso = () => {

    return ( <MenuJoinComponent Ayuda={Ayuda.uso} component={() => <h1>Hola mundo</h1>}/>)
}

export default PageHomeUso;