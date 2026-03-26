import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import { auth } from "../services/firebaseConfig";
import { createOrder } from "../services/orderService";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handlePlaceOrder = async () => {
    const user = auth.currentUser;

    if (!user) {
      alert("You must be logged in to place an order.");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    try {
      setIsSubmitting(true);

      const orderId = await createOrder({
        userId: user.uid,
        items: cartItems,
      });

      clearCart();
      alert(`Order placed successfully. Order ID: ${orderId}`);
      navigate("/");
    } catch (error) {
      console.error("Failed to place order:", error);
      alert("Something went wrong while placing your order.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section">
      <h1>Checkout</h1>
      <p>Items: {cartItems.length}</p>
      <p>Total: ${totalPrice.toFixed(2)}</p>

      <button
        type="button"
        className="btn"
        onClick={handlePlaceOrder}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Placing Order..." : "Place Order"}
      </button>
    </section>
  );
};

export default Checkout;
