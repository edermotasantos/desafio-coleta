import React, { useContext } from "react";
import CollectContext from "../context/CollectContext";
import { useNavigate } from "react-router-dom";

function AddAnswers() {
  let navigate = useNavigate();
  const {
    amount,
  } = useContext(CollectContext);

  console.log('o que está chegando na página', Object.keys(amount));

  return (
    <table>
      <div>
        <div>
          <span>{ Object.values(amount)[0] }</span>
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