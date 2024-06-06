import { useContext } from "react";
import { ContatoContext } from "./ContatoContext";

export default function Componente3() {

    const { objeto } = useContext(ContatoContext);

    return (
        <div className="container">
            <h3>Seja Bem Vindo, {objeto.nome} </h3>
            <h4>Seu contador: {objeto.contador} </h4>
        </div>
    );
}
