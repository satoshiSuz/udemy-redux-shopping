export type cartItem = {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
};

export type cartType = {
  cartItems: cartItem[];
  amount: number;
  total: number;
};

export type modalType = {
  isOpen: boolean;
};
