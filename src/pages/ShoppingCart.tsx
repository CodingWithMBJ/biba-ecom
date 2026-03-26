import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

const ShoppingCart = () => {
  const { cartItems, addItem, removeItem, deleteItem, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <section className="section section-none">
        <h1>Your cart is empty</h1>
        <Link to="/" className="btn continue-shopping-btn">
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="section">
      <h1>Shopping Cart</h1>

      <div className="cart-list">
        {cartItems.map((item) => (
          <article key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-img" />

            <div className="cart-item-info">
              <h2>{item.title}</h2>
              <div className="cart-item-info-values">
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>

            <div className="cart-item-actions">
              <button type="button" onClick={() => addItem(item)}>
                +
              </button>
              <button type="button" onClick={() => removeItem(item.id)}>
                -
              </button>
              <button type="button" onClick={() => deleteItem(item.id)}>
                Remove
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>

        <div className="cart-summary-actions">
          <button type="button" onClick={clearCart}>
            Clear Cart
          </button>

          <Link to="/checkout" className="btn checkout-btn">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
