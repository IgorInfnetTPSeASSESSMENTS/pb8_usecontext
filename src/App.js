import { useState } from 'react';
import './App.css';
import Componente1 from './componentes/Componente1';
import { ContatoContext } from './componentes/ContatoContext';
import Componente3 from './componentes/Componente3';
import Componente4 from './componentes/Componente4';
import Counter from './componentes/UseRefExample';
import UseRefExample from './componentes/UseRefExample';


function App() {

  const [objeto, setObjeto] = useState({});

  return (
    <>
      {/* <ContatoContext.Provider value={{ objeto, setObjeto }}>
        <Componente1 />
        <Componente3 />
      </ContatoContext.Provider >
      <Componente4></Componente4> */}
      <UseRefExample></UseRefExample>
    </>
  )
}

export default App
