import { Outlet } from "react-router-dom";

function AutenticacaoLayout(){
    return (
        <>
        <h1>Cabeçalho da página</h1>
        <div>
            <Outlet />
        </div>
        </>
    )
}

export default AutenticacaoLayout;