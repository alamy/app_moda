import { React, useEffect, useState } from "react";
import Buttom from '../../component/buttom';
import Logo from '../../component/logo'
import onbordingImg from "../../img/Onbordin.jpg";
 import './style.css'



const Onborading = () => {
    const [cont, setCont] = useState(0)
    function contador(){
       
        setTimeout(() => {
            setCont(cont + 1);
        }, 2000);
    }

    useEffect(() => {
        if(sessionStorage.getItem("acesso") === "false"){
            if(cont < 2) {
                contador()
            }else {
                window.document.getElementById('onbor').classList.remove('block')
                window.document.getElementById('onbor').classList.add('none')
                window.document.getElementById('tutorial').classList.remove('none')
                window.document.getElementById('tutorial').classList.add('block')
                sessionStorage.setItem("acesso", "true")
            }  
        }else{
            window.document.getElementById('onbor').classList.remove('block')
            window.document.getElementById('onbor').classList.add('none')
            window.document.getElementById('tutorial').classList.remove('none')
            window.document.getElementById('tutorial').classList.add('block')
        }
       
    })

    return(
    <>
        <div className="BakgroundOnbor"></div>
            <section className="Onborading block" id="onbor">
            <Logo spin="true"/>
        </section>

        <section className="tutorial none" id="tutorial">
           <img src={onbordingImg} alt="Solicity" title="Solicity" />
           <h2>Nosso Objetivo</h2>
           <p>Com colaboração diminuir a insegurança alimentar </p>
           <Buttom name="Próximo" color="green" path='/home' />
        </section>
    </>
    )

}

export default Onborading