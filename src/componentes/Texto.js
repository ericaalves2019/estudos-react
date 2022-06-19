import {Texto2} from './Texto2';
export function Texto(props){
    return (
    <p>
        {props.titulo} - {props.toto} 
        <Texto2></Texto2>
    </p>
    )
}