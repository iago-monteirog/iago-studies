import React from "react";
import { Botao } from "../Botao";
import './style.scss'

export class Formulario extends React.Component {
    render(): React.ReactNode {
        return (
            <form className="novaTarefa">
                <div className="inputContainer">
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você quer estudar?"
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="23:99:99"
                        required
                    />
                </div>
                <Botao />
            </form>
        );
    }
}