export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: number;
  qty: number;
  subTotal: number;
  status: 'INSTOCK';
}

interface Rating {
  rate: number;
  count: number;
}
