import React from 'react'
import { Form, Input} from '../MainPage/styles'

const NameForm = (props) => {
  return (
    <Form>
        <label>
          Nome:
          <Input  placeholder="Nome" value={props.name} onChange={props.nameChange}/>
        </label>
        <label>
          Idade:
          <Input  placeholder="Idade" value={props.age} onChange={props.ageChange}/>
        </label>
        <label>
          E-mail:
          <Input  placeholder="usuario@usuario.com" value={props.email} onChange={props.emailChange}/>
        </label>
        <label>
          Confirmação de e-mail:
          <Input  placeholder="usuario@usuario.com" value={props.checarEmail} onChange={props.verificaEmail}/>
        </label>
      <button onClick={props.verificaUsuario}>Enviar dados</button>
      </Form>
  )
}

export default NameForm