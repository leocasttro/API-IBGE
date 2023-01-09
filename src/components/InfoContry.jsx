import React from 'react'
import { useState, useEffect } from 'react';

import axios from '../services/axios'


const InfoContry = ({selectContryId}) => {

  const [ datas, setDatas ] = useState([])

  const setData = new Set();

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`/municipios/${selectContryId}/distritos`);
      setDatas(response.data);
    }

    getData();
  }, [selectContryId]);

  const filterData = datas.filter((data) => {
    const duplicateData = setData.has(data.municipio.microrregiao.id);
    setData.add(data.municipio.microrregiao.id);
    return !duplicateData;
  })

  return (
    <div className='containerInfo'>
    
      <div className="info">
      {filterData.map((mic) => (
        <p key={mic.id}>Microrregião: {mic.municipio.microrregiao.nome}</p>
      ))}

      {filterData.map((meso) => (
        <p key={meso.id}>Mesoregião: {meso.municipio.microrregiao.mesorregiao.nome}</p>
      ))}

      {filterData.map((UF) => (
        <p key={UF.id}>UF: {UF.municipio.microrregiao.mesorregiao.UF.sigla}</p>
      ))}

      {filterData.map((reg) => (
        <p key={reg.id}>Região: {reg.municipio.microrregiao.mesorregiao.UF.regiao.nome}</p>
      ))}
    </div>

    </div>
  )
}

export default InfoContry