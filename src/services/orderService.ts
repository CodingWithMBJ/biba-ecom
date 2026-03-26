import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "./firebaseConfig";
import type { CartItem } from "../types/products";

type CreateOrderParams = {
  userId: string;
  items: CartItem[];
};

export const createOrder = async ({ userId, items }: CreateOrderParams) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const orderPayload = {
    userId,
    items,
    total,
    createdAt: serverTimestamp(),
    status: "pending",
  };

  const docRef = await addDoc(collection(db, "orders"), orderPayload);
  return docRef.id;
};

export const getUserOrders = async (userId: string) => {
  const ordersRef = collection(db, "orders");
  const q = query(
    ordersRef,
    where("userId", "==", userId),
    orderBy("createdAt", "desc"),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
