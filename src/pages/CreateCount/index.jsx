import { React, useState } from "react"
import { useNavigate } from "react-router-dom"
import Logo from '../../component/atoms/logo'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import './style.css'
import axios from 'axios'

var validacaoUser;
const CreatCount = () => {
    const navigate = useNavigate()
    let [usuario, setUsuario] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [cnpj, setcnpj] = useState('');
    let [telefone, setTelefone] = useState('');
    let [tipo, setTipo] = useState('ONG');
    let [errorEmail, setErrorEmail] = useState('');
    let [errorUsuario, setErrorUsuario] = useState('');
    let [errorTelefone, setErrorTelefone] = useState('');
    let [errorPassword, setErrorPassword] = useState('');
    let [errorCnpj, setErrorCnpj] = useState('');
    let [cnpjBollean, setCnpjBollean] = useState(false);
    let [usuarioBollean, setUsuarioBollean] = useState(false);
    let [emailBollean, setEmailBollean] = useState(false);
    let [passwordBollean, setPasswordBollean] = useState(false);
    let [telefoneBollean, setTelefoneBollean] = useState(false);
    

    const instance = axios.create({
        baseURL: 'http://localhost:3000/'
      });

    function Validacao(a, b, c){
        if(a === ''){
            b("Campo precisa ser preenchido")
            c(true)
        }else{
            c(false)
            b("")
        }
    }

    const createCount = () => {
        Validacao(email, setErrorEmail, setEmailBollean)
        Validacao(usuario, setErrorUsuario, setUsuarioBollean)        
        Validacao(password, setErrorPassword, setPasswordBollean)
        Validacao(cnpj, setErrorCnpj, setCnpjBollean)
        Validacao(telefone, setErrorTelefone, setTelefoneBollean)
        if(!email.includes("@")){
            setErrorEmail('O email Precisa conter @')
        }else if(!email.includes(".")){
            setErrorEmail('O email Precisa conter .')
        }else{
            console.log("estou aqui")
            setErrorEmail('')
            let cadastro = {
                "name" : usuario,
                "senha": password,
                "email": email,
                "telefone": telefone,
                "cnpj": cnpj,
                "tipo": tipo
            }
            createUser(cadastro)
        }

         async function createUser(objUser){
           await instance({method:'post', url: 'user', data: objUser})
                .then((res) => validacaoUser = res.data)
                .catch((err) => {
                    console.log("ops! Erro na api GIT " + err)   
            })
            if(validacaoUser){
                navigate("/sucesso");
            }
        }
     
        
    }

    return (
        <>
            <section className="creatCount">
            <Logo/>
            <h3>Faça seu cadastro</h3>

            <div className="inputCreat">
                <TextField
                    error={usuarioBollean}
                    color="success" 
                    id="input-user"
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
                    helperText={errorUsuario}
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
            </div>
            <div className="inputCreat">
             <TextField
                error={emailBollean}
                id="input-email"
                label="Email"
                color="success"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <span className="material-symbols-outlined">mail</span>
                    </InputAdornment>
                ),
                }}
                placeholder="email@email.com"
                variant="outlined"
                helperText={errorEmail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="inputCreat">
             <TextField
                error={telefoneBollean}
                id="input-email"
                label="Email"
                color="success"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <span className="material-symbols-outlined">phone</span>
                    </InputAdornment>
                ),
                }}
                placeholder="(00) 00000-0000"
                variant="outlined"
                helperText={errorTelefone}
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
            />
            </div>
            <div className="inputCreat">
            <TextField
                error={passwordBollean}
                color="success"
                id="input-password"
                label="Senha"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                         <span className="material-symbols-outlined">lock</span>
                    </InputAdornment>
                ),
                }}
                type="password"
                placeholder="************"
                helperText={errorPassword}
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div className="inputCreat">
            <TextField
                error={cnpjBollean}
                color="success"
                id="input-password"
                label="cnpj"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                         <span className="material-symbols-outlined">lock</span>
                    </InputAdornment>
                ),
                }}
                placeholder="000.000.000-0000/00"
                variant="outlined"
                helperText={errorCnpj}
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
            <button onClick={createCount} className="green">Proximo</button>
            </section>
        </>
    )
}

export default CreatCount