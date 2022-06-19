import'./Tabela.css'
export function Tabela() {
    return (
      <div><table className='tabela' border="1">
      <tr>
          <td>Titulo</td>
          <td>Valor</td>
          <td>Data</td>
      </tr>
      <tr>
          <td>Ted</td>
          <td>22</td>
          <td>05\06\2022</td>
      </tr>
      <tr>
          <td>Ralf</td>
          <td>26</td>
          <td>06\06/2022</td>
      </tr>
  </table></div>  
    );
}
