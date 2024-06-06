import { useState } from "react";

export default function Componente4() {

    const [contato, setContato] = useState({});

    return (
        <div className="container">
            <h3>Seja Bem Vindo, {contato.nome} </h3>
            <h4>Seu contador: {contato.contador} </h4>
            <button onClick={() => {
                const contato = JSON.parse(localStorage.getItem("contato"));
                setContato(contato);
            }}>Pega Contato No Local Storage</button>
        </div>
    );
}
