import { Outlet } from "react-router-dom";

function AplicacaoLayout(){
    return(
        <>
        <h1>Texto Teste</h1>
        <div>
            <Outlet />
        </div>
        </>

    )
}

export default AplicacaoLayout;