import React from 'react';
import HeaderComponent from '../Header';
import SubMenu from './SubMenu';

const MenuJoinComponent = (props) => {
    
    return (
        <>
            <HeaderComponent ayuda={true}/>
            
            <div className="ayuda">

                <SubMenu option={props.Ayuda}/>

                <div className="component-ayuda">
                    {props.component}
                </div>
            </div>
        </>
    )
}

export default MenuJoinComponent;