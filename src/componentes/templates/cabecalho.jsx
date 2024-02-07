//Lembrar que em React os componentes devem começar com letras maiúsculas
import { Alert } from "react-bootstrap";

export default function Cabecalho(props){
    return (
        <Alert variant="light" className="text-center"><h1>{props?.texto}</h1></Alert>
    );
}