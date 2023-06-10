export async function getData(){   
  const response = await fetch("http://localhost:8080/products/list")
  console.log(response)
  return response;
};
  

