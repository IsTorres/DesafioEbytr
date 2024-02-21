import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Table() {
  const [tarefa, setTarefa] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/tarefas")
      .then((res) => res.json())
      .then((data) => setTarefa(data));
  }, [tarefa]);

  const deleteData = (id: any) => {
    console.log(id, "oi");
    axios
      .delete(`http://localhost:3001/${id}`)
      .then((res: any) => res)
      .catch(function (error: any) {
        console.log(error);
      });
  };

  const handleRemove = (
    id: any,
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();
    deleteData(id);
  };

  return (
    <div>
      <ul>
        {tarefa.map((el) => (
          <li key={el.id}>
            <span>{`tarefa: ${el.tarefa} `}</span>
            <span>{`status: ${el.status}`}</span>
            <button onClick={(e) => handleRemove(el.id, e)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
