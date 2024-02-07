import FormCadClientes from "../formularios/formCadClientes";
import Pagina from "../templates/pagina";

export default function TelaCadastroProduto(props){
    return (
        <Pagina>
            <h2>Tela de Cadastro de Produtos</h2>
            <FormCadClientes/>
        </Pagina>
    )
}