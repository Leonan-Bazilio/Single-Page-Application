import products from "../database.json";
export default function loadProduct({ params }) {
  let product = products.find((p) => p.id === +params.productId); //esse + converte para tipo number
  return product
}