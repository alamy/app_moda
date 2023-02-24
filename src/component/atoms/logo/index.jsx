import React from "react";
import './style.css';
import SolicityLogo from "../../../img/Logo.svg";

const Logo = (props) => {    
    let rotate = "";
    if(props.spin === 'true'){
        rotate = "logoSpin"
    }
    
    return (<>
        <div className="logoBox">
            <img src={SolicityLogo} className={"logo " + rotate} alt="Solicity" title="Solicity" />
            <h1>Solicity</h1>
            <p><i>Combatendo a <br /> insegurança alimentar</i></p>
        </div>
    </>)
}

export default Logo