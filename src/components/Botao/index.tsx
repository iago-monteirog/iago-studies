import React from "react";
import style from './Botao.module.scss';

    class Botao extends React.Component<{ 
        type?: "button" | "submit" | "reset" | undefined
        texto?: string
     }> {
    render(): React.ReactNode {
        const{ type = "button" } = this.props
        return (
            <button type={type} className={style.botao}  >
                {this.props.texto}
            </button>
        )

    }
}

export default Botao;