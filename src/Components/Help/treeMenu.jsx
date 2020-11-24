import React, {useState} from 'react'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Collapsable = styled.div`
    display: ${({ open }) => open ? 'none' : 'relative'};
    transition: 3s;
`;

const HeaderCollapsable = styled.div`
    width: 100%;
    color: #999;
`;

const TreeMenu = (props) => {

    const [open, setOpen] = useState(true);

    useEffect(() => {
        
        props.option.subMenu.map((val, i) => {
            if (props.path === val.link) {
                setOpen(false)
            }
        })
    }, [])

    return <>
        <HeaderCollapsable onClick={() => setOpen(!open)}>
            <span style={!open ? {color: "black"} : { color: "#999" }}>{props.option.Nombre}</span>
        </HeaderCollapsable>
        <Collapsable open={open}>
            {
                props.option.subMenu.map((val, i) => {

                    return (
                        <div className="submenu">
                            <NavLink to={val.link} className="limpiar submenu-item" activeClassName="list-submenu-active">{val.Nombre}</NavLink>
                        </div>
                    )
                })
            }
        </Collapsable>
    </>
}

export default TreeMenu;