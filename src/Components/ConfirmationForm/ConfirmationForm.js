import React, { useState } from 'react'
import MainPage from '../MainPage/MainPage'
import { Form, Input } from '../MainPage/styles'
import NameForm from '../NameForm/NameForm'


const ConfirmationForm = (props) => {
  const [dataNas, setDataNas] = useState("")
  const changedata = (event) => {
    setDataNas(event.target.value)
  }

  const [fone, setFone] = useState("")
  const changefone = (event) => {
    setFone(event.target.value)
  }

  const [genero, setGenero] = useState("");
  const changeGenero = (event) => {
    setGenero(event.target.value)
  }
  const [raca, setRaca] = useState("")
  const changeRaca = (e) => {
    setRaca(e.target.value)
  }
  const [curso, setCurso] = useState("")
  const changeCurso = (e) => {
    setCurso(e.target.value)
  }
  const [ensino, setEnsino] = useState("")
  const changeEnsino = (e) => {
    setEnsino(1)
  }
  const [disponivel, setDisponivel] = useState("")
  const changeDisponivel = (e) => {
    setDisponivel(1)
  }
  // console.log(dataNas);
  // console.log(fone);
  // console.log(genero)
  // console.log(cor)
  // console.log(curso);
  // console.log(ensino);
  // console.log(disponivel);
  const enviarDados = () => {
    if (dataNas.length !== 0 && fone.length > 0 && genero.length > 0 && raca.length > 0 && ensino === 1 && disponivel === 1) {
      if (curso === "noturno" || curso === "integral") {
        setGenero("")
        setRaca("")
        setDataNas("")
        setFone("")
        alert("Prontinho! Seus dados foram enviados");
        props.form2(1)
      }
    } else
      alert("Preencha todos campos!")
    setGenero("")
    setRaca("")
    setDataNas("")
    setFone("")

  }
  return (
    <Form>
      <label>Data de Nascimento :
        <Input type="date" value={dataNas} onChange={changedata} />
      </label>
      <label>Telefone:
        <Input type="text" value={fone} onChange={changefone} />
      </label>
      <label> Escolha seu Gênero :
        <select value={genero} onChange={changeGenero}>
          <option ></option>
          <option >Homem-cisgênero</option>
          <option >Mulher-cisgênero</option>
          <option >Homem-Trans</option>
          <option >Mulher-Trans</option>
          <option >Pessoa não binária</option>
          <option >Prefiro não dizer</option>
        </select>
      </label>
      <label> Você se considera :
        <select value={raca} onChange={changeRaca}>
          <option ></option>
          <option >Negro</option>
          <option >Branco</option>
          <option >Pardo</option>
          <option >Amarelo</option>
          <option >Indígina</option>
          <option >Prefiro não dizer</option>
        </select>
      </label>
      <form value={curso} onChange={changeCurso}> Escolha seu curso :  <br></br>
        <input type="radio" id="integral" name='curso' value="integral" />
        <label for="integral"> Curso integral web fullstack</label><br></br>
        <input type="radio" id="noturno" name='curso' value="noturno" />
        <label for="noturno"> Curso noturno web fullstack</label>
      </form>
      <form value={ensino} onChange={changeEnsino} >
        <p>Selecione :</p>
        <input type="checkbox" id="ensinoMedio" name='ensinoMedio' value={ensino} onChange={changeEnsino} />
        <label for="ensinoMedio"> Ensino Médio completo.</label><br></br>
        <input type="checkbox" id="disponivel" name='disponivel' value={disponivel} onChange={changeDisponivel} />
        <label for="disponivel"> Disponibilidade para participar das atividades.</label>

      </form>
      <button onClick={enviarDados}>Enviar dados</button>
    </Form>
  )
}

export default ConfirmationForm