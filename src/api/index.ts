export async function getData(){   
  const response = await fetch("http://localhost:8080/products/list")
  const data = await response.json();
  return data;
};
  

