import React from "react";

function AddAnswers() {
  return (
    <form>
      <div>
        <p>1 - Você se considera bom de lógica?</p>
        <div>
          <button>Sim</button>
          <button>Não</button>
        </div>
      </div>
      <div>
        <p>2 - Gosta de aprender com desafios?</p>
        <div>
          <button>Sim</button>
          <button>Não</button>
        </div>
      </div>
      <div>
        <p>3 - Gostaria de fazer parte da GRX?</p>
        <div>
          <button>Sim</button>
          <button>Não</button>
          <button>Não Sei</button>
          <button>Agora!!</button>
        </div>
      </div>
      <div>
        <p>4 - Por favor, justifique a resposta anterior</p>
        <div>
          <textarea data-ls-module="charCounter" maxlength="200"></textarea>
        </div>
      </div>
    </form>
  );
}

export default AddAnswers;
