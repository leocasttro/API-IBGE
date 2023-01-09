import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import axios from '../services/axios'
import InfoContry from './InfoContry';
import * as exampleActions from '../store/modules/select/actions'

const SelectContry = ({selectState}) => {

  
  const dispatch = useDispatch()
  const [ contry, setContry ] = useState([])
  const [ selectContryId, setSelectContryId ] = useState('') 


  useEffect(() => {
    async function getData() {
      const response = await axios.get(`estados/${ selectState }/municipios`);
      setContry(response.data);
    }

    getData();
  }, [selectState]);

  const selectContryUpdate = (e) => {
    let pay = e.target.value
    const dis = dispatch(exampleActions.contryUpdate(pay))
    setSelectContryId(dis.payload)
  }

  return (
    <div className='containerContry'>
      {selectState ? <select value={selectContryId} 
      onChange={selectContryUpdate} style={{width: '250px', height: '30px'}}>
        <option>
          Selecione um município
        </option>
        {contry.map((contry) => (
          <option key={contry.id} value={contry.id}>{contry.nome}</option>
        ))}
      </select> : null}
      <InfoContry selectContryId={selectContryId} selectState={selectState}/>
    </div>
  )
}


export default SelectContry