import React from "react";
import '../../styles/component/navbar.css'
import Logo from '../../assets/icon//navbar/Logo.svg'

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

                <button>Build on MIEXS</button>
                
            </header>
        );
    }
}

export default navbar;