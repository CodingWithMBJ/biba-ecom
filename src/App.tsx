import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import WelcomeScreen from "./pages/WelcomeScreen";
import PageLayout from "./layouts/PageLayout";
import Dashboard from "./pages/Dashboard";
import { useEffect, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "./services/firebaseConfig";
import CartProvider from "./context/CartContext";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubcribe();
  }, []);
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {!user ? (
            <Route index element={<WelcomeScreen />} />
          ) : (
            <Route element={<PageLayout user={user} />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};
export default App;
