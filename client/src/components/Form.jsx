import React from 'react'

export default function Form() {
  return (
    <form action="">
      <input name="Tarefa" placeholder="tarefa" />
      <select name="status">
        <option>Pronto</option>
        <option>Em andamento</option>
        <option>Pendente</option>
      </select>
      <button type="submit">Criar tarefa</button>
    </form>
  )
}
