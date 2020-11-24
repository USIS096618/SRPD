import React, { useEffect, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import TreeMenu from './treeMenu';



const SubMenuComponent = withRouter(props => <SubMenu {...props} />);

const SubMenu = (props) => {

    const [option, setOption] = useState([])

    useEffect(() => {
        setOption(props.option)
    }, [])

    return <div className="submenu-ayuda">

        <div className="lista">

            {option.map((val, i) => {
                return (
                    <div className="list-submenu" key={i}>
                        {
                            val.subMenu ?
                                <>
                                    <div className="limpiar">
                                        <TreeMenu option={val} path={props.location.pathname}/>
                                    </div>
                                    
                                </> : <>
                                    <NavLink to={val.link} className="limpiar" activeClassName="list-submenu-active">{val.Nombre}</NavLink>
                                </>
                        }

                    </div>
                )
            })}

        </div>

    </div>
}

export default SubMenuComponent;