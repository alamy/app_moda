import {React, useEffect, useState} from 'react'
import './style.css'
import Logo from '../../component/atoms/logo'
import { useNavigate } from "react-router-dom"

const Sucess = () => {
    const navigate = useNavigate()
    const [count, setCount] = useState(10);
    useEffect(() => {
        setTimeout(() => {
          setCount((count) => count - 1);
        }, 1000);
      });

      if(count === 0){
        navigate("/login");
      }

    return(
        <>
        <div className="BakgroundOnbor">
            <section className="Onborading block" id="onbor">
            <Logo spin="true"/>
            <h2 className='segundos'>Seu cadastro foi realizado com sucesso</h2>
            <p className='segundos'>Você será redirecionado em {count}s</p>
            </section>
        </div>
        </>
    )
}

export default Sucess