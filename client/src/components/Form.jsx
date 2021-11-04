import React from 'react';

export default function Form() {
  // const [ tarefa, setTarefa ] = useState('');
  // const [ saveTarefa, setSaveTarefa ] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

  const handleclick = (evt) => {
    evt.preventDefault();
  }

  return (
    <form action="" onSubmit={ handleSubmit }>
      <input name="tarefa" placeholder="Tarefa" />
      <select name="status">
        <option>Pronto</option>
        <option>Em andamento</option>
        <option>Pendente</option>
      </select>
      <button type="submit" onClick={ handleclick }>Criar tarefa</button>
    </form>
  )
}
