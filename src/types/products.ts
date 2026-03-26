export type Product = {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  rate: number;
  category: string;
};

export type CartItem = Product & {
  quantity: number;
};

export type CartContextType = {
  cartItems: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  deleteItem: (id: string) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
};
