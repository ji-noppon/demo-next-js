export async function fetchAllProducts() {
  const response = await fetch('https://fakestoreapi.com/products?limit=10')

  if (!response.ok) {
    throw new Error('Error')
  }
  return response.json()
}

export async function fetchProductByCategory(category: string) {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)

  if (!response.ok) {
    throw new Error('Error')
  }
  return response.json()
}

export async function fetchProductById(id: string) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  
  if (!response.ok) {
    throw new Error('Error')
  }
  return response.json()
}