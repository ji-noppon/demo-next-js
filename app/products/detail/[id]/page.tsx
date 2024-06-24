import Image from "next/image";
// api
import { fetchProductById } from "@/app/apis/produts";
// component
import BaseButton from "@/app/components/base/button";
// type
import { IProductDetail } from "@/app/interfaces/apis/IApiProduct";

async function getProductsById(id: string) {
  const product: IProductDetail = await fetchProductById(id);

  return product;
}

export default async function ProductsByCategory({ params }: any) {
  const product = await getProductsById(params.id);

  return (
    <div className="container-group grid grid-cols-3">
      <div className="max-h-[250px] desktop:max-h-[250px] lg-desktop:max-h-[350px]">
        <Image
          src={product.image}
          alt="img"
          width={100}
          height={100}
          style={{ height: "100%", width: "80%", margin: "auto", objectFit:"contain" }}
        />
      </div>
      <div className="col-span-2">
        <p className="font-title mt-3">{product.title}</p>
        <p className="font-sub-title mt-3">Category: {product.category}</p>
        <p className="font-sub-title mt-3">
          Description: <span className="font-description"> {product.description}</span>
        </p>
        <p className="mt-3">Rating {product.rating.rate}</p>
        <p className="mt-3">$ {product.price}</p>
        <div className="mt-3"><BaseButton name="Buy" /></div> 
      </div>
    </div>
  );
}
