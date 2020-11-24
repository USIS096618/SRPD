import React from 'react'
import HeaderComponent from '../../Components/Header';
import Home from '../../Components/Help/Home';

const Help = () => {

    return (
        <>
            <HeaderComponent ayuda={true} />
            <Home />
        </>
    )
}

export default Help;