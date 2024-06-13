import { useState, useRef } from 'react';

/* Praticamente um document.getElement, reserva algumn valor ou o nó HTML dentro de um objeto com a propriedade current { current : elemento} */
/* Pode usar pra chamar eventos no dom a partir dessa propriedade que armazena o item, alguns exemplos seriam: current.remove(), current.focus() e etc */
export default function UseRefExample() {
  const [show, setShow] = useState(true);
  const ref = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}>
        Toggle with setState
      </button>
      <button
        onClick={() => {
          ref.current.remove();
        }}>
        Remove from the DOM
      </button>
      {show && <p ref={ref}>Hello world</p>}
    </div>
  );
}

