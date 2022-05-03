import React, { useContext } from "react";
import CollectContext from "../context/CollectContext";
import { useNavigate } from "react-router-dom";

function AddAnswers() {
  let navigate = useNavigate();

  const titles = [
    'Total',
    'Quantidade Positiva',
    'Porcentagem Positiva',
    'Quantidade Negativa',
    'Porcentagem Negativa',
    'Quantidade Não Avaliada',
    'Porcentagem Não Avaliada'
  ];

  const {
    answers,
    setAnswers,
    amount,
    setAmount,
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


  const fetchAnswers = async (requestOptions) => {
    const response = await fetch('http://localhost:3001', requestOptions);
    const data = await response.json();
    return data;
  }

  const setNewAmout = async (data) => {
    const { QuantidadePositiva, QuantidadeNegativa, QuantidadeNaoAvaliada } = data;
    const Total = QuantidadePositiva + QuantidadeNegativa + QuantidadeNaoAvaliada;
    const PorcentagemPositiva = (((QuantidadePositiva / Total) * 100).toFixed(2)) + '%';
    const PorcentagemNegativa = (((QuantidadeNegativa / Total) * 100).toFixed(2)) + '%';
    const PorcentagemNaoAvaliada = (((QuantidadeNaoAvaliada / Total) * 100).toFixed(2)) + '%';
    await setAmount((prevState) => {
      return {
        ...prevState,
        Total,
        QuantidadePositiva,
        PorcentagemPositiva,
        QuantidadeNegativa,
        PorcentagemNegativa,
        QuantidadeNaoAvaliada,
        PorcentagemNaoAvaliada,
      }
    });
  }

  const sendButton = async (e) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(answers)
    };
  
    const newAnswer = await fetchAnswers(requestOptions);
    
    console.log('o que foi setado', amount);

    await setNewAmout(newAnswer);
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
      <div>
        <button
          type="button"
          data-testid="send-button"
          name="send-button"
          onClick={ (e) => sendButton(e) }
          value={ answers }
        >
          Enviar
        </button>
        <button
          type="button"
          data-testid="send-button"
          name="send-button"
          onClick={ (e) => navigate(`/answers`) }
        >
          Ver Resultados
        </button>
        { Object.values(amount).map((item, index) => (
          <div key={ item }>
            <h3>{ titles[index] }</h3>
            <span>{ item }</span>
          </div>
        )) }
      </div>
    </form>
  );
}

export default AddAnswers;