import { useState } from "react";
import { Interface } from "readline";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import { ITerefas } from "../components/types/tarefa";
import style from './App.module.scss'


function App() {
  const [tarefas, setTarefas] = useState<Array<ITerefas> | [] > ([])
  return (
    <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas} />
        <Lista tarefas={tarefas}  />
        <Cronometro />
    </div>
  );
}

export default App;
