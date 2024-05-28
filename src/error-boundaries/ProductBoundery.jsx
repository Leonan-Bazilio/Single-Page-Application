import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ProductBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <h2>Oops... Produto não encontrado</h2>;
      case 401:
        return <h2>Voce não esta autorizado a acessar essa pagina</h2>;
      case 400:
        return <h2>Parece que alguma coisa deu errado na requisição</h2>;
      case 401:
        return <h2>Erro interno do servidor</h2>;
    }
  }
  return <h2>Algo deu errado</h2>;
}
