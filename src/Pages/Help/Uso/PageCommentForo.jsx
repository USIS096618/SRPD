import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import CommentForo from '../../../Components/Help/Uso/CommentForo';
import Ayuda from '../../../JSON/Ayuda.json';

/**
 * @file Este archivo se encarga de montar los componentes para la pagina de ayuda - Cambio de contraseña
 * @author SRPD
 * @function PageCommentForo
 * @returns {HTML} Retorna la vista de la pagina ayuda - Cambio de contraseña
 */
const PageCommentForo = () => {

    return ( <MenuJoinComponent Ayuda={Ayuda.uso} component={<CommentForo />}/> )
}

export default PageCommentForo;