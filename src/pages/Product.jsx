import { Link, useParams } from "react-router-dom";
import products from "../database.json";
export default function Product() {
  const { productId } = useParams();
  let product = products.find((p) => p.id === +productId); //esse + converte para tipo number

  if (!product) {
    return <h2>Produto não encontrado</h2>;
  }
  return (
    <section>
      <Link to="/products">
        <button>Voltar</button>
      </Link>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button>Comprar</button>
    </section>
  );
}
