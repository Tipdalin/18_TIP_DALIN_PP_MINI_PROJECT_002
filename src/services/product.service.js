import headerToken from "../lib/header";

export async function addNewProductService(request){
  const headers = await headerToken();
    const product = {
    name: request.name,
    description: request.description,
    imageUrl: request.imageUrl,
    colors: request.colors,
    sizes: request.sizes,
    price: request.price,
    categoryId: request.categoryId
  };
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(product),
    });
    const newProduct = await res.json();

    return newProduct;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllProductService() {
  const headers = await headerToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`, {
    headers: headers,
  });
  const products = await res.json();
  console.log("Products", products);
  return products;
}