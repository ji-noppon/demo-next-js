import { IProduct } from "@/app/interfaces/apis/IApiProduct"

import Card from "@/app/components/card";

export default function CardLists({ cardLists }: IProduct) {
  return (
    <div className="card-lists">
      {cardLists.map((card, index) => (
        <Card
          key={index}
          id={card.id}
          title={card.title}
          price={card.price}
          description={card.description}
          category={card.category}
          image={card.image}
          rating={card.rating}
        />
      ))}
    </div>
  );
}
