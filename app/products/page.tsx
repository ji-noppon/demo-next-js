// api
import { fetchAllProducts } from '@/app/apis/produts'
// component
import CardLists from '@/app/components/cardLists'
// type
import { IProduct, IProductDetail } from '@/app/interfaces/apis/IApiProduct'

async function getProducts() {
  const productLists: IProductDetail[] = await fetchAllProducts()
  const mapCardLists: IProduct = {
    cardLists: productLists
  }
  return mapCardLists
}

export default async function Categorys() {
  const products = await getProducts()

  return ( 
    <>
      <h1 className='container-group'>All Products</h1>
      <CardLists cardLists={ products.cardLists } />
    </>
  );
}
