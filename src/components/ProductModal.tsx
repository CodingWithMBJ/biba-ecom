import type { Product } from "../types/products";
import useCart from "../hooks/useCart";

export type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
};

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const { addItem } = useCart();

  if (!product) return null;

  return (
    <aside className="product-modal product-modal-overlay" onClick={onClose}>
      <article className="product-modal-content">
        <button className="close-btn btn" onClick={onClose}>
          X
        </button>

        <figure className="product-card-header">
          <img
            src={product.image}
            alt={product.title}
            className="product-card-img"
          />
        </figure>

        <section className="product-card-body">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-rate">Rating: {product.rate}</p>
          <p className="product-category">Category: {product.category}</p>
        </section>

        <section className="product-card-footer">
          <button className="add-btn btn" onClick={() => addItem(product)}>
            Add to cart
          </button>
        </section>
      </article>
    </aside>
  );
};

export default ProductModal;
