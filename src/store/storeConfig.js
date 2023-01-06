import { createStore } from 'redux'

const intialState = {
  botaoClicado: false,
}

const reducer = (state=intialState, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO':
      const newState = {...state}
      newState.botaoClicado = !newState.botaoClicado;
      return newState;

    default: 
      return state;
  }
}

function storeConfig() {
  return createStore(reducer)
}

export default storeConfig