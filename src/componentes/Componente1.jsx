import { useContext, useState } from "react";
import Componente2 from "./Componente2";
import { ContatoContext } from "./ContatoContext";

export default function Componente1() {

    const [contato, setContato] = useState({
        id: 1,
        nome: "Machado de Assis",
        email: "machado@abl.org.br",
        fone: "(21) 21228800",
        contador: 0
    });

    const hello = () => console.log("hello world");
    const { objeto, setObjeto } = useContext(ContatoContext); 

    return (
        <div className="container">
            <h3>Seja Bem Vindo, {contato.nome}</h3>
            <h4>Seu contador: {contato.contador}</h4>
            <button onClick={() => {setObjeto(contato);}}>Passa Adiante Pelo Contexto</button>
            <button onClick={() => {localStorage.setItem("contato", JSON.stringify(contato))}}>Passa Adiante 2 - Pelo Local Storage</button>
            <div>
                <Componente2 contato={contato} setContato={setContato} umaFuncao={hello} />
                <Componente2 contato={contato} setContato={setContato} umaFuncao={hello} />
            </div>
        </div>
    );
}