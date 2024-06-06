export default function Componente2({contato, setContato, umaFuncao}) {

    return(
        <div className="container">
            <h4>Seu contador: {contato.contador}</h4>
            <button onClick={() => {
                const novoContato = {...contato, contador: contato.contador + 1};
                setContato(novoContato);
                umaFuncao();
            }}>Incrementa</button>
        </div>
    );
}
