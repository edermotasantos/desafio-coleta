import React, { useContext } from "react";
import CollectContext from "../context/CollectContext";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

function AddAnswers() {
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
    home,
    setHome,
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

    await setNewAmout(newAnswer);
    redirectToAnswers();
  }

  return (
    <>
      {home ? <form>
        <div>
          <p>1 - Você se considera bom de lógica?</p>
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              size="lg"
              type="button"
              data-testid="yes-button1"
              name="Pergunta1" onClick={ (e) => newAnswer(e) }
              value="Sim"
              active
            >
              Sim
            </Button>{' '}
            <Button
              variant="danger"
              size="lg"
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
          <p>2 - Gosta de aprender com desafios?</p>
          <div>
            <Button
              variant="primary"
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
              size="lg"
              type="button"
              data-testid="no-button2"
              name="Pergunta2"
              onClick={ (e) => newAnswer(e) }
              value="Não"
              active
            >
              Não
            </Button>
          </div>
        </div>
        <div className="d-grid gap-2">
          <p>3 - Gostaria de fazer parte da GRX?</p>
          <div>
            <Button
              variant="primary"
              size="lg"
              type="button"
              data-testid="yes-button3"
              name="Pergunta3"
              onClick={ (e) => newAnswer(e) }
              value="Sim"
              active
            >
              Sim
            </Button>
            <Button
              variant="danger"
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
        <div className="d-grid gap-2">
          <Button
            variant="primary"
            size="lg"
            type="button"
            data-testid="send-button"
            name="send-button"
            onClick={ (e) => sendButton(e) }
            value={ answers }
            active
          >
            Enviar
          </Button>
        </div>
      </form> :
      <form>
        <div>
          <div>
            { Object.values(amount).map((item, index) => (
              <Card className="text-center" key={ item } style={{ width: '100%' }}>
                <Card.Body>
                  <Card.Title><h3>{ titles[index] }</h3></Card.Title>
                  <Card.Text>
                    <h1><Badge bg="secondary">{ item }</Badge></h1>
                  </Card.Text>
                </Card.Body>
              </Card>
            )) }
          </div>
        <div>
          <Button
            variant="primary"
            size="lg"
            type="button"
            data-testid="send-button"
            name="send-button"
            onClick={ (e) => redirectToAnswers(e) }
            active
          >
            Voltar
          </Button>
        </div>        
      </div>
    </form>
    }
    </>
  );
}

export default AddAnswers;