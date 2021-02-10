import React, { useRef } from 'react';
import { Redirect } from 'react-router-dom'

const Form = () => {

  const inputUser = useRef<HTMLInputElement>(null)
  const inputSenha = useRef<HTMLInputElement>(null)

  const [login] = React.useState<String>('daniel@')
  const [senha] = React.useState<Number>(123)
  const [estado, setEstado] = React.useState<any>(false)

  const entrar = () => {
    const user = inputUser.current?.value
    const senhaa = Number(inputSenha.current?.value)

    if((user === login) && (senha === senhaa)){
      setEstado(true)
    }
  }
  
  return (
    <div>
      <h1>Login</h1>

      <label>Usuario</label> <br/>
      <input type="text" placeholder='digite seu usuario' ref={inputUser} /> <br/><br/>

      <label>Senha</label><br/>
      <input type="text" placeholder='digite sua senha' ref={inputSenha} /><br/><br/>

      <button onClick={entrar}>Entrar</button>

      {
        estado ?
        <Redirect to="/login" />
      :
        null
      }
    </div>
  );
}

export default Form;