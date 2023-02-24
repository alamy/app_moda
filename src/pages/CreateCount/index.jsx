import { React, useState } from "react"
import Logo from '../../component/atoms/logo'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Validacao from '../../db/validar.json' 
import './style.css'

var objeto = Validacao;
const Index = () => {

    let [usuario, setUsuario] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [cnpj, setcnpj] = useState('');
    const [tipo, setTipo] = useState('ONG');

  

    const createCount = () => {
        let cadastro = {
            "name" : usuario,
            "senha": password,
            "email": email,
            "tipo": tipo
        }
        console.log(cadastro)
        console.log("________________")
        objeto.push(cadastro)
        console.log(objeto)
    }

    return (
        <>
            <section className="creatCount">
            <Logo/>
            <h3>Faça seu cadastro</h3>

            <div className="inputCreat">
                <TextField
                    id="input-user"
                    label="Usuário"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <span class="material-symbols-outlined">person</span>
                        </InputAdornment>
                    ),
                    }}
                    placeholder="digite seu nome"
                    variant="outlined"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
            </div>
            <div className="inputCreat">
             <TextField
                id="input-email"
                label="Email"

                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <span class="material-symbols-outlined">mail</span>
                    </InputAdornment>
                ),
                }}
                placeholder="email@email.com"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="inputCreat">
            <TextField
                id="input-password"
                label="Senha"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                         <span class="material-symbols-outlined">lock</span>
                    </InputAdornment>
                ),
                }}
                type="password"
                placeholder="email@email.com"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div className="inputCreat">
            <TextField
                id="input-password"
                label="cnpj"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                         <span class="material-symbols-outlined">lock</span>
                    </InputAdornment>
                ),
                }}
                placeholder="000.000.000-0000/00"
                variant="outlined"
                value={cnpj}
                onChange={(e) => setcnpj(e.target.value)}
            />
            </div>
            <div className="inputRadio">
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                >
                    <FormControlLabel value="Compania" control={<Radio />} label="Compania" />
                    <FormControlLabel value="ONG" control={<Radio />} label="ONG" />
                </RadioGroup>
            </div>    
            <button onClick={createCount}>Proximo</button>
            </section>
        </>
    )
}

export default Index