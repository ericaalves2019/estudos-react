import { useState } from 'react';

import'./Bemvindo.css'
export function Bemvindo(props){
    
    let [contador, setContador] = useState(0);
    function click() {
        setContador(contador++);
    }
    return (
        <p className='fonte' onClick={click}>Bem vindo, você visitou {contador} vezes</p>
    )
}