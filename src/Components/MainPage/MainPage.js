import React, { useState } from 'react'
import { MainContainer } from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [checarEmail, setChecarEmail] = useState("");;//exercicio
  const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangeAge = (event) => {
    setAge(event.target.value)
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  // exercicio 2 
  const onChangeEmailVerifica = (event) => {
    setChecarEmail(event.target.value)
  }

  // console.log(verificaLetras)



  const verificaIdade = age >= 18 ? true : false;
  const verificaNome = name.length >= 10 && name.length <= 30 ? true: false;
  const verificaEmail = email.includes('@' && '.') ? true : false;
  const verificaEmailVazio = email.length !== 0 ? true : false;
  const verificaEmailIgual = email === checarEmail ? true : false;
  // console.log(verificaIdade);
  // console.log(verificaNome);
  // console.log(verificaEmail)
  // console.log(verificaEmailIgual)
  // console.log(verificaEmailVazio)
  // console.log(name, email, checarEmail);
  const sendData = () => {

    // Exercicio 2 verificacao se todos os campos estao corretos !!
    
    if (verificaIdade && verificaNome && verificaEmail && verificaEmailIgual && verificaEmailVazio ) {
      setFormFlow(2)
    } else alert("Preencha corretamente os campos!")
    setAge("") 
    setChecarEmail("")
    setEmail("")
    setName("")
  }
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm verificaUsuario={sendData} name={name} age={age} email={email} checarEmail={checarEmail}
        nameChange={onChangeName} emailChange={onChangeEmail} ageChange={onChangeAge} verificaEmail={onChangeEmailVerifica}
      /> : <ConfirmationForm form={formFlow} form2={setFormFlow}/>}
    </MainContainer >
  )
}

export default MainPage