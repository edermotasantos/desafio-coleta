import React, { useContext } from "react";
import CollectContext from "../context/CollectContext";
import './AddAnswers.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Questions from "./Questions";

function AddAnswers() {
  const {
    amount,
    home,
    setHome,
    setCount,
    setFewCharacters,
  } = useContext(CollectContext);

  const redirectToAnswers = () => {
    console.log('o valor de home é', home);
    setHome((prevState) => {
      return !prevState;
    });
    console.log('o valor de home é', home);
  }

  return (
    <>
      {home ?<Questions/> :
      <table>
        <div>
          <div>
              <Card
                className="g-4"
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
              </Row>{"\n"}
          </div>
        <div>
          <Button
            variant="primary"
            style={{height: 60, marginLeft: 25}}
            size="lg"
            type="button"
            data-testid="send-button"
            name="send-button"
            onClick={ (e) => {
              redirectToAnswers(e);
              setFewCharacters(<></>);
              setCount(0);
            } }
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