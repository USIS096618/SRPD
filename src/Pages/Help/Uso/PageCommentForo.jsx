import React from 'react';
import MenuJoinComponent from '../../../Components/Help/MenuJoinComponent';
import CommentForo from '../../../Components/Help/Uso/CommentForo';
import Ayuda from '../../../JSON/Ayuda.json';

const PageCommentForo = () => {

    return ( <MenuJoinComponent Ayuda={Ayuda.uso} component={<CommentForo />}/> )
}

export default PageCommentForo;