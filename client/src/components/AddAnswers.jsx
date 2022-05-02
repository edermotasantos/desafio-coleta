import React, { useContext } from "react";
import CollectContext from "../context/CollectContext";

function AddAnswers() {
  const {
    answers,
    setAnswers,
  } = useContext(CollectContext);

  const newAnswer = (e) => {
    const { name, value } = e.target;
    setAnswers((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    console.log(answers);
  };

  const sendButton = async (e) => {
    // const data = JSON.stringify(answers);
    // console.log(data);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(answers)
    };
  
    fetch('http://localhost:3001/answers/', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
  }

  return (
    <form>
      <div>
        <p>1 - Você se considera bom de lógica?</p>
        <div>
          <button
            type="button"
            data-testid="yes-button1"
            name="Pergunta1" onClick={ (e) => newAnswer(e) }
            value="Sim"
          >
            Sim
          </button>
          <button
            type="button"
            data-testid="no-button1"
            name="Pergunta1"
            onClick={ (e) => newAnswer(e) }
            value="Não"
          >
            Não
          </button>
        </div>
      </div>
      <div>
        <p>2 - Gosta de aprender com desafios?</p>
        <div>
          <button
            type="button"
            data-testid="yes-button2"
            name="Pergunta2"
            onClick={ (e) => newAnswer(e) }
            value="Sim"
          >
            Sim
          </button>
          <button
            type="button"
            data-testid="no-button2"
            name="Pergunta2"
            onClick={ (e) => newAnswer(e) }
            value="Não"
          >
            Não
          </button>
        </div>
      </div>
      <div>
        <p>3 - Gostaria de fazer parte da GRX?</p>
        <div>
          <button
            type="button"
            data-testid="yes-button3"
            name="Pergunta3"
            onClick={ (e) => newAnswer(e) }
            value="Sim"
          >
            Sim
          </button>
          <button
            type="button"
            data-testid="no-button3"
            name="Pergunta3"
            onClick={ (e) => newAnswer(e) }
            value="Não"
          >
            Não
          </button>
          <button
            type="button"
            data-testid="idontkonw-button3"
            name="Pergunta3"
            onClick={ (e) => newAnswer(e) }
            value="Não Sei"
          >
            Não Sei
          </button>
          <button
            type="button"
            data-testid="rightnow-button3"
            name="Pergunta3"
            onClick={ (e) => newAnswer(e) }
            value="Agora!!"
          >
            Agora!!
          </button>
        </div>
      </div>
      <div>
        <p>4 - Por favor, justifique a resposta anterior</p>
        <div>
          <textarea
            data-ls-module="charCounter"
            maxLength="200"
            data-testid="textarea"
            name="Pergunta4"
            onChange={ (e) => newAnswer(e) }
          >
          </textarea>
        </div>
      </div>
      <button
        type="button"
        data-testid="send-button"
        name="send-button"
        onClick={ (e) => sendButton(e) }
        value={ answers }
      >
        Enviar
      </button>
    </form>
  );
}

export default AddAnswers;