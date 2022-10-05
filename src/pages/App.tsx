import { useState } from "react";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import { ITerefas } from "../types/tarefa";
import style from './App.module.scss'


function App() {
  const [tarefas, setTarefas] = useState<ITerefas[] > ([]);
  const [selecionado, setSelecionado] = useState<ITerefas>();

  function selecionaTarefa(tarefaSelecionada: ITerefas) {
    setSelecionado(tarefaSelecionada);
  }
  return (
    <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas} />
        <Lista 
          tarefas={tarefas} 
          selecionaTarefa={selecionaTarefa} />
        <Cronometro />
    </div>
  );
}

export default App;
