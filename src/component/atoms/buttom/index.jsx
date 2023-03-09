import React from "react";
import { useNavigate } from "react-router-dom";
import './style.css';


const Buttom = ({name, path, color}) => {
    const navigate = useNavigate();
    const Path = () => {
        //console.log(path)
        return(
            navigate(path)
        )
    }

    return(
       <button onClick={Path} className={color}>{name}</button>
    )

}

export default Buttom