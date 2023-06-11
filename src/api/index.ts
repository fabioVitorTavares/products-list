export type ProductsType = {
  id: string,
  name: string,
  value: number,
}

export async function getProducts() {   
  const response = await fetch("http://localhost:8080/products/list")
  const data = await response.json();
  return data as ProductsType[];
};
  

