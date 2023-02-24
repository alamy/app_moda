import { React, useEffect, useState } from "react";
import Buttom from '../../component/atoms/buttom';
import Logo from '../../component/atoms/logo'
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
        if(!sessionStorage.getItem("acesso")){
            if(cont <= 4) {
                console.log(cont)
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
        <div className="BakgroundOnbor">
            <section className="Onborading block" id="onbor">
            <Logo spin="true"/>
        </section>

        <section className="tutorial none" id="tutorial">
           <img src={onbordingImg} alt="Solicity" title="Solicity" />
           <h2>Nosso Objetivo</h2>
           <p>Com colaboração diminuir a insegurança alimentar </p>
           <Buttom name="Próximo" color="green" path='/login' />
        </section>
        </div>
    </>
    )

}

export default Onborading