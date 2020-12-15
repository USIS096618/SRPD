import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import styled from 'styled-components';
import Swal from 'sweetalert2'
import JWT from '../../Class/JWT';
import Identificador from '../../Class/Identificador';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 681px) {
    z-index: 4;
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
  @media (max-width: 301px) {
    width: 100%;
  }
`;

const RightNavHelp = ({ open }) => {


  var redirection = () => {
    window.location.reload(true);
  }

  var Salir = ()=>{
    Swal.fire({
      title: '¿Estas seguro de cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      console.log(result.value);
      if (result.value) {
        JWT.clearJWT()
        Identificador.clearIdentificador()
        redirection();
      }
    });
  }

  return (
    <Ul open={open}>
      <li>
        <NavLink to="/Ayuda" activeClassName="active-route">Inicio</NavLink>
      </li>
      <li>
        <NavLink to="/Ayuda_/Uso" activeClassName="active-route">Usar SRPD</NavLink>
      </li>
      <li>
        <NavLink to="/Ayuda_/Administrar" activeClassName="active-route">Administra tu cuenta</NavLink>
      </li>
      <li>
        <NavLink to="/" >Inicia Sesion</NavLink>
      </li>
    </Ul>
  )
}

export default RightNavHelp