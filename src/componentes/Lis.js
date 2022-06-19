import'./Lis.css'
export function Lis(props){
    function click() {
        alert('Fui clicado, sou o componente lis');
    }
    return (
        <p className='lis'onClick={click}>Cheque especial disponivel 20000</p>
       
    
    )
}