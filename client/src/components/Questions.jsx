import React, { useContext } from "react";
import CollectContext from "../context/CollectContext";
import './AddAnswers.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Questions() {
  const {
    answers,
    setAnswers,
    amount,
    setAmount,
    home,
    setHome,
    count,
    setCount,
    fewCharacters,
    setFewCharacters,
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

  const redirectToAnswers = () => {
    console.log('o valor de home é', home);
    setHome((prevState) => {
      return !prevState;
    });
    console.log('o valor de home é', home);
  }

  const sendButton = async (e) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(answers)
    };
  
    const newAnswer = await fetchAnswers(requestOptions);
    
    console.log('o que foi setado', amount);

    
    const { Pergunta1, Pergunta2, Pergunta3, Pergunta4 } = answers
    
    if (Pergunta1 === '' || Pergunta2 === '' || Pergunta3 === '') return setFewCharacters(
      <p className="alert" style={{marginLeft: 25}} muted>
        Todas as perguntas precisam ser respondidas
      </p>);
    
    if (count < 15) return setFewCharacters(
      <p className="alert" style={{marginLeft: 25}} muted>
        O seu texto precisa ter de 15 à 200 caracteres.
      </p>);

    await setNewAmout(newAnswer);

    setAnswers({ [Pergunta1]: '', [Pergunta2]: '', [Pergunta3]: '', [Pergunta4]: '' });

    redirectToAnswers();
  }

  return (
    <Form>
      <div>
        <Form.Label className="first-question" style={{marginLeft: 25, marginRight: 2}}>{"\n"}1 - Você se considera bom de lógica?{"\n"}</Form.Label>
        <div>
          <Button
            variant="primary"
            style={{height: 80, marginLeft: 25, marginRight: 2, width: 450}}
            type="button"
            data-testid="yes-button1"
            name="Pergunta1"
            onClick={ (e) => newAnswer(e) }
            value="Sim"
            active
          >
            Sim
          </Button>{' '}
          <Button
            variant="danger"
            style={{height: 80, marginLeft: 2, marginRight: 2, width: 450}}
            type="button"
            data-testid="no-button1"
            name="Pergunta1"
            onClick={ (e) => newAnswer(e) }
            value="Não"
            active
          >
            Não
          </Button>
        </div>
      </div>
        <div  className="d-grid gap-2">
          <Form.Label className="other-questions" style={{marginLeft: 25, marginRight: 2}}>2 - Gosta de aprender com desafios?</Form.Label>
          <div>
            <Button
              variant="primary"
              style={{height: 80, marginLeft: 25, marginRight: 2, width: 450}}
              size="lg"
              type="button"
              data-testid="yes-button2"
              name="Pergunta2"
              onClick={ (e) => newAnswer(e) }
              value="Sim"
              active
            >
              Sim
            </Button>{' '}
            <Button
              variant="danger"
              style={{height: 80, marginLeft: 2, marginRight: 2, width: 450}}
              size="lg"
              type="button"
              data-testid="no-button2"
              name="Pergunta2"
              onClick={ (e) => newAnswer(e) }
              value="Não"
              active
            >
              Não
            </Button>{"\n"}
          </div>
        </div>
        <div className="d-grid gap-2">
          <Form.Label className="other-questions" style={{marginLeft: 25, marginRight: 2}}>3 - Gostaria de fazer parte da GRX?</Form.Label>
          <div>
            <Button
              variant="primary"
              style={{height: 80, marginLeft: 25, marginRight: 2, width: 221}}
              size="lg"
              type="button"
              data-testid="yes-button3"
              name="Pergunta3"
              onClick={ (e) => newAnswer(e) }
              value="Sim"
              active
            >
              Sim
            </Button>{' '}
            <Button
              variant="danger"
              style={{height: 80, marginLeft: 2, marginRight: 2, width: 221}}
              size="lg"
              type="button"
              data-testid="no-button3"
              name="Pergunta3"
              onClick={ (e) => newAnswer(e) }
              value="Não"
              active
            >
              Não
            </Button>{' '}
            <Button
              variant="warning"
              style={{height: 80, marginLeft: 2, marginRight: 2, width: 221}}
              size="lg"
              type="button"
              data-testid="idontkonw-button3"
              name="Pergunta3"
              onClick={ (e) => newAnswer(e) }
              value="Não Sei"
              active
            >
              Não Sei
            </Button>{' '}
            <Button
              variant="success"
              style={{height: 80, marginLeft: 2, marginRight: 2, width: 221}}
              size="lg"
              type="button"
              data-testid="rightnow-button3"
              name="Pergunta3"
              onClick={ (e) => newAnswer(e) }
              value="Agora!!"
              active
            >
              Agora!!
            </Button>{' '}
          </div>
        </div>
        <div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="other-questions" style={{marginLeft: 25, marginRight: 2}}>4 - Por favor, justifique a resposta anterior</Form.Label>
            <Form.Control
              style={{height: 80, marginLeft: 25, marginRight: 2, width: 905}}
              as="textarea"
              rows={3}
              data-ls-module="charCounter"
              maxLength="200"
              data-testid="textarea"
              name="Pergunta4"
              onChange={ (e) => { 
                newAnswer(e);
                setCount(e.target.value.length);
              } }
              placeholder="Escreva um texto de 15-200 caracteres."
            />{' '}
          <>
            <p className="counter" style={{marginLeft: 889}}>{`${count}/200`}</p>
            { fewCharacters }
          </>
        </Form.Group>
      </div>
      <div className="d-grid gap-2">
        <Button
          variant="primary"
          style={{height: 60, marginLeft: 25, marginRight: 2, width: 905}}
          size="lg"
          type="button"
          data-testid="send-button"
          name="send-button"
          onClick={ (e) => sendButton(e) }
          value={ answers }
          active
        >
          Enviar
        </Button>{"\n"}
      </div>
    </Form>
  );
}

export default Questions;