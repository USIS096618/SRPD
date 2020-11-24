import React, { Component } from 'react'
import Navbar from './Navigator/Navbar'
import Logo from '../Assets/Images/jpeg/Logo.jpeg'

export default class HeaderComponent extends Component {

    render() {
        return (
            <header className="header">
                
                {
                    this.props.ayuda ? (
                        <div className="header_img">
                            <img src={Logo} alt="Logo SRP"></img>
                            <hr></hr>
                            <span className="header_title">Servicio de ayuda</span>
                        </div>
                    ) : (
                        <div className="header_img">
                            <img src={Logo} alt="Logo SRP"></img>
                            <hr></hr>
                            <span className="header_title">SRPD</span>
                        </div >
                    )
    }
                <Navbar ayuda={this.props.ayuda ? true : false}></Navbar>
            </header >
        )
    }
}