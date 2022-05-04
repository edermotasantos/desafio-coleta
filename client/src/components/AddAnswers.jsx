import React, { useContext } from "react";
import CollectContext from "../context/CollectContext";
import './AddAnswers.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function AddAnswers() {
  const {
    answers,
    setAnswers,
    amount,
    setAmount,
    home,
    setHome,
    count,
    setCount,
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
      {home ? <Form>
        <div>
          <Form.Label style={{marginLeft: 25, marginRight: 2}}>{"\n"}1 - Você se considera bom de lógica?{"\n"}</Form.Label>
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
          <Form.Label style={{marginLeft: 25, marginRight: 2}}>2 - Gosta de aprender com desafios?</Form.Label>
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
          <Form.Label>3 - Gostaria de fazer parte da GRX?</Form.Label>
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
            <Form.Label>4 - Por favor, justifique a resposta anterior</Form.Label>
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
            />
            <p className="counter" style={{marginLeft: 889}}>{`${count}/200`}</p>
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
      </Form> :
      <table>
        <div>
          <div>
              <Card
                className="g-4"
                style={{ backgroundColor: 'white-smoke' }}
              >
                <Card.Body>
                <Card.Title><h2 className="text-center">Total</h2></Card.Title>
                  <Card.Text>
                    <h2 className="text-center">{ Object.values(amount)[0] }</h2>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Row xs={1} md={2} className="g-4" >
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title><h2 className="text-center">Quantidade Positiva</h2></Card.Title>
                      <Card.Text>
                        <h2 className="text-center">{ Object.values(amount)[1] }</h2>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title><h2 className="text-center">Porcentagem Positiva</h2></Card.Title>
                      <Card.Text>
                        <h2 className="text-center">{ Object.values(amount)[2] }</h2>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title><h2 className="text-center">Quantidade Negativa</h2></Card.Title>
                      <Card.Text>
                        <h2 className="text-center">{ Object.values(amount)[3] }</h2>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title><h2 className="text-center">Porcentagem Negativa</h2></Card.Title>
                      <Card.Text>
                        <h2 className="text-center">{ Object.values(amount)[4] }</h2>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title><h2 className="text-center">Quantidade Nao Avaliada</h2></Card.Title>
                      <Card.Text>
                        <h2 className="text-center">{ Object.values(amount)[5] }</h2>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title><h2 className="text-center">Porcentagem Nao Avaliada</h2></Card.Title>
                      <Card.Text>
                      <h2 className="text-center">{ Object.values(amount)[6] }</h2>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
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
    </table>
    }
    </>
  );
}

export default AddAnswers;