import React from "react";
import '../../styles/component/navbar.css'
import '../../styles/config.css';
import '../../styles/colors.css';
import Logo from '../../assets/icon/Logo.svg'

class navbar extends React.Component{
    render() {
        return (
            <header className="header">
                
                <img src={Logo} alt="logo"/>
                <div className="navbar">
                    <li>Network</li>
                    <li>Developers</li>
                    <li>Solutions</li>  
                    <li>Tools</li>
                </div>

                <button className="header_button button">Build on MIEXS</button>
                
            </header>
        );
    }
}

export default navbar;