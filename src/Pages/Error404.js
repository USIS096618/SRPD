import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import '../Assets/CSS/Error404.css'

const Error404 = () => {

    return (
        <Fragment>
            <div className="divFull"></div>
            <div className="notFound">
                <h2 className="">Pagina no encontrada</h2>
                <Link className="centerA" to="/">Volver</Link>
            </div>
        </Fragment>
    )
}

export default Error404