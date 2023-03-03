import { React, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import './style.css'
import Logo from '../../component/atoms/logo'
import Validacao from '../../db/validar.json' 

var objeto = Validacao;
const Sign = () => {
    const navigate = useNavigate()
    let [name, setName] = useState('');
    let [senha, setSenha] = useState(''); 
    let [error, setError] = useState(''); 

    const validarCampo = () => {
        for(let i = 0; i < objeto.length; i++){
            if(name !== objeto[i].name || senha !== objeto[i].senha){
                    setError('Este usuario não existe')
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
        <div className="inputCreat">
            <TextField
                id="input-name"
                label="Usuário"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <span className="material-symbols-outlined">person</span>
                        </InputAdornment>
                    ),
                }}
                placeholder="digite seu nome"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="inputCreat">
            <TextField
                id="input-senha"
                label="Senha"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <span className="material-symbols-outlined">lock</span>
                        </InputAdornment>
                    ),
                }}
                type="password"
                placeholder="********************"
                variant="outlined"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />
        </div>
                <p className="error">{error}</p>
        <button onClick={validarCampo} className="green">Entrar</button>

       </section>
       </>
    )
}

export default Sign