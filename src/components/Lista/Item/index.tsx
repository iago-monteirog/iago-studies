import { ITerefas } from '../../../types/tarefa';
import style from '../Lista.module.scss'

interface Props extends ITerefas {
    selecionaTarefa: (tarefaSelecionada: ITerefas) => void;
}

export default function Item(
    {
        tarefa,
        tempo,
        selecionado,
        completado,
        id,
        selecionaTarefa
    }: Props) {
    console.log('Item atual: ', { tarefa, tempo, selecionado, completado, id });
    return (
        <li
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
            onClick={() => selecionaTarefa(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id
                }
            )} >
            <h3>
                {tarefa}
            </h3>
            <span>
                {tempo}
            </span>
        </li>
    );
}