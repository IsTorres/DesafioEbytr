import React, { useEffect, useState } from 'react'

export default function Table() {
  const [tarefa, setTarefa] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/tarefas')
      .then((res) => res.json())
      .then((data) => setTarefa(data));
  }, [tarefa]);

  return (
    <div>
      { tarefa.map((el) => ( <div key={ el._id }>{`tarefa: ${el.tarefa} | status: ${el.status}`}</div>)) }
    </div>
  )
}
