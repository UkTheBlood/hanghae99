import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../shared/data';

function Work() {

    const params = useParams();

    const foundData = data.find((item) => {
        return item.id === parseInt(params.id)
    });

    console.log("foundData", foundData)

  return (
    <div>
        <h3>할 일: {foundData.todo}</h3>
    </div>
  )
}

export default Work