import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import type { Product } from "../types/products";
import ProductModal from "./ProductModal";
import useCart from "../hooks/useCart";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <section className="products section product-list">
        {products.map((item) => (
          <article className="product-card" key={item.id}>
            <figure className="product-card-header">
              <img
                src={item.image}
                alt={item.title}
                className="product-card-img"
              />
            </figure>

            <section className="product-card-body">
              <h1 className="product-title">{item.title}</h1>
              <p className="product-price">${Number(item.price).toFixed(2)}</p>
              <p className="product-rate">Rating: {Number(item.rate)}</p>
            </section>

            <section className="product-card-footer">
              <button
                type="button"
                className="add-btn btn"
                onClick={() => addItem(item)}
              >
                Add to cart
              </button>

              <button
                type="button"
                className="view-product-btn btn"
                onClick={() => setSelectedProduct(item)}
              >
                View product
              </button>
            </section>
          </article>
        ))}
      </section>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};

export default Products;
