import { Container } from "./styles";

export function  TransactionsTable(){
    return(
        <Container>
            <table>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>

                <tbody>
                    <tr>
                        <td>Exemplo 1</td>
                        <td className="deposit">R$122.22</td>
                        <td>Desenvolvimento</td>
                        <td>12/12/12</td>
                    </tr>

                    <tr>
                        <td>Exemplo 2</td>
                        <td className="withdraw">- R$122.22</td>
                        <td>carro</td>
                        <td>12/12/12</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    );
}
