import { React, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './style.css'
import Logo from '../../component/atoms/logo'
import Validacao from '../../db/validar.json' 

var objeto = Validacao;
const Sign = () => {
    const navigate = useNavigate()
    let [name, setName] = useState('');
    let [senha, setSenha] = useState(''); 

    const validarCampo = () => {
        for(let i = 0; i < objeto.length; i++){
            if(name !== objeto[i].name || senha !== objeto[i].senha){
             console.log("não entrar")
            }else{
                console.log("entrar")
                navigate("/home");
            }
         }
    }

    return(
       <>
       <section className="LoginComponent">
        <Logo/>
        <h3>Caso não tenha conta <Link to="/creat">Clique aqui!</Link></h3>
        
        <input 
            type='text' 
            name="nome"
            placeholder="Digite seu usuario"
            value={name}
            onChange={(e) => setName(e.target.value)}/>

        <input 
            type='password' 
            name="senha"  
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}/>


        <button onClick={validarCampo} className="green">Entrar</button>

       </section>
       </>
    )
}

export default Sign