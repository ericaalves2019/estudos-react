
import { useState } from 'react';
import './Campotexto.css'
export function Campotexto(props){
    let [texto, setTexto] = useState('');
    function aperta(objeto) {
        setTexto(objeto.target.value)
    }
    return (
        <div>
        <textarea onKeyUp={aperta} className='campotexto' id="msg"></textarea>
        <p>{texto}</p>
    </div>
    )
}