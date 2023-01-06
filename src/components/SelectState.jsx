import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import axios from '../services/axios'
import SelectContry from './SelectContry';
import * as actions from '../store/modules/select/actions'

const SelectState = () => {
  const dispatch = useDispatch()
  const [ state, setState ] = useState([])
  const [ selectState, setSelectState ] = useState('') 

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/estados');
      setState(response.data);
    }

    getData();
  }, []);

  const selectStateUpdate = (e) => {
    let pay = e.target.value
    const dis = dispatch(actions.stateUpdate(pay))
    setSelectState(dis.payload)
  }


  return (
    <div className='containerState'>
      <select value={selectState} 
        onChange={selectStateUpdate} style={{width: '250px', height: '30px', marginBottom: '10px'}}>
        <option>
          Selecione um estado
        </option>
      {state.map((state) => (
          <option key={state.id} value={state.sigla}>{state.nome}</option>
        ))}
      </select>
      <SelectContry selectState={selectState}/>
    </div>
  );
}


export default SelectState