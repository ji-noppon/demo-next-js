'use client'
import { IProductDetail } from "@/app/interfaces/apis/IApiProduct";
import { useRouter } from 'next/navigation'
import Image from "next/image";

export default function Card( props: IProductDetail) {
  const { id,category,description,image,price,rating,title } = props
  const router = useRouter()

  return (
    <div className="card cursor-pointer" onClick={() => router.push(`/products/detail/${id}`)}>
      <Image src={image} alt="img" width={100} height={100} style={{ height: '100px', width:'auto', margin:'auto' }} />
      <p className="text-two-line h-[48px] font-medium">{title}</p>
      <p className="mb-2 text-sky-600">
        <span>rating:</span> {rating.rate}
      </p>
      <div className="flex-center">
        <label className="bg-blue-200 py-1 px-2 rounded">$ {price}</label> 
        <div>cart</div>
      </div>

    </div>
  );
}
