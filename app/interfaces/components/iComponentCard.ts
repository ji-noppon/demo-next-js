export interface IProduct {
  cardLists: IProductDetail[];
}
export interface IProductDetail {
  id: number;
  title: string;
  price: number;
  description: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
