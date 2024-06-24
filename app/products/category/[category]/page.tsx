// api
import { fetchProductByCategory } from '@/app/apis/produts'
// components
import CardLists from "@/app/components/cardLists"
// type
import { IProduct, IProductDetail } from '@/app/interfaces/apis/IApiProduct'

async function getProductsByCategory(category: string) {
  const productLists: IProductDetail[] = await fetchProductByCategory(category)
  const mapCardLists: IProduct = {
    cardLists: productLists
  }
  return mapCardLists
}

export default async function ProductsByCategory( {params}: any ) {
  const productLists = await getProductsByCategory(params.category)

  return (
    <>
      <h1 className='container-group'>{ params.category }</h1>
      <CardLists cardLists={ productLists.cardLists } />
    </>
  )
} 