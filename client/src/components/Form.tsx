import { useState } from "react";
import axios from "axios";

export default function Form() {
  const [tarefa, setTarefa] = useState({ tarefa: "", status: "Pendente" });

  //fonte: https://axios-http.com/docs/post_example
  const sendData = () => {
    axios
      .post("http://localhost:3001/", tarefa)
      .then((res: any) => res)
      .catch(function (error: any) {
        console.log(error);
      });
  };

  const handleSubmit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    sendData();
  };

  const handleImputChange = (evt: {
    target: { name: string | number; value: any };
  }) => {
    tarefa[evt.target.name] = evt.target.value;
    setTarefa(tarefa);
  };

  return (
    <form action="" onSubmit={handleSubmit} method="POST">
      <input name="tarefa" placeholder="tarefa" onChange={handleImputChange} />
      <select name="status" onChange={handleImputChange}>
        <option>Pendente</option>
        <option>Em andamento</option>
        <option>Pronto</option>
      </select>
      <button type="submit">Criar tarefa</button>
    </form>
  );
}
