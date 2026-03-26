import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import type { Product } from "../types/products";

export const getProducts = async (): Promise<Product[]> => {
  const snapshot = await getDocs(collection(db, "products"));

  const products = snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      title: data.title ?? "",
      image: data.image ?? "",
      description: data.description ?? "",
      price: Number(data.price ?? 0),
      rate: Number(data.rate ?? 0),
      category: data.category ?? "",
    };
  });

  console.log("products from firestore:", products);

  return products;
};
