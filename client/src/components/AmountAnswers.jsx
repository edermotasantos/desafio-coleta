import React, { useContext } from "react";
import CollectContext from "../context/CollectContext";
import { useNavigate } from "react-router-dom";

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

  let navigate = useNavigate();
  const {
    amount,
  } = useContext(CollectContext);

  console.log('o que está chegando na página', Object.keys(amount));

  return (
    <table>
      <div>
        <div>
        { Object.values(amount).map((item, index) => (
          <div key={ item }>
            <h3>{ titles[index] }</h3>
            <span>{ item }</span>
          </div>
        )) }
        </div>
        <div>
        <button
          type="button"
          data-testid="send-button"
          name="send-button"
          onClick={ (e) => navigate(`/`) }
        >
          Voltar
        </button>
        </div>        
      </div>
    </table>
  );
}

export default AddAnswers;