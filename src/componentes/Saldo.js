import'./Saldo.css'
export function Saldo(props){
    function click() {
        alert('Fui clicado, sou o componente saldo');
    }
    return (
        <p className='Saldo'onClick={click}>Saldo:100000000</p>
       
    
    )
}