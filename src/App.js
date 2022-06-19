
import { Botao } from './componentes/Botao';
import { Campotexto } from './componentes/Campotexto';
import { Tabela } from './componentes/Tabela';
import {Saldo} from './componentes/Saldo'
import {Lis} from './componentes/Lis'
import {Bemvindo} from './componentes/Bemvindo'
import {Botaovoltar} from './componentes/Botaovoltar'

function App() {
  const funcao = () => {
    alert('fui clicado');
  }
  return (
   <div>
    
    <Bemvindo></Bemvindo>
    <Saldo></Saldo>
    <Lis></Lis>
    <Campotexto></Campotexto>
    <Botao></Botao>
    <Tabela></Tabela>
    <Botaovoltar></Botaovoltar>
     
   </div>
  );
}

export default App;
