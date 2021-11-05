import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Table() {
  const [tarefa, setTarefa] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/tarefas')
      .then((res) => res.json())
      .then((data) => setTarefa(data));
  }, [tarefa]);

  const deleteData = (id) => {
    console.log(id, 'oi');
    axios.delete(`http://localhost:3001/${id}`)
      .then((res) => res)
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleRemove = (id, evt) => {
    evt.preventDefault();
    deleteData(id);
  };

  return (
    <div>
      <ul>
        { tarefa.map((el) => (
          <li key={ el._id }>
            <span>{`tarefa: ${el.tarefa} `}</span>
            <span>{`status: ${el.status}`}</span>
            <button onClick={(e) => handleRemove(el._id, e)}>X</button>
          </li>
        )) }
      </ul>
    </div>
  );
};
