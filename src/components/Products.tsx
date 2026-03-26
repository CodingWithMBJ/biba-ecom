import Product from "../data/product";

const Products = () => {
  return (
    <section className="products section product-list">
      {Product.map((item) => (
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
            <p className="product-price">${item.price}</p>
            <p className="product-rate">Rating: {item.rate}</p>
          </section>

          <section className="product-card-footer">
            <button type="button" className="add-btn btn">
              Add to cart
            </button>

            <button type="button" className="view-product-btn btn">
              View product
            </button>
          </section>
        </article>
      ))}
    </section>
  );
};

export default Products;
