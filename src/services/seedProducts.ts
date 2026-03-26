import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";
import products from "../data/product";

export const seedProducts = async () => {
  try {
    console.log("Starting seed...");

    for (const product of products) {
      const { id, ...productData } = product;

      const docRef = await addDoc(collection(db, "products"), productData);
      console.log("Added product:", docRef.id, productData);
    }

    console.log("Products uploaded successfully");
  } catch (error) {
    console.error("Error seeding products:", error);
  }
};
