import { getProducts } from "@/api";
import Products from "../products/page";



export default async function InitialData() {
  const products = await getProducts();
  return <Products products={products} />;
}