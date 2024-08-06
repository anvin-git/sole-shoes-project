import React from 'react';
import './Shop.css';

const products = [
    { id: 1, name: 'Adidas Stan Smith', description: 'Classic white sneakers with green accents', price: '99.99', imageUrl: '/assets/images/adidas_stan_smith.jpg' },
    { id: 2, name: 'Nike React Infinity Run Flyknit', description: 'Comfortable running shoes with Flyknit technology', price: '129.99', imageUrl: '/assets/images/nike_react_infinity_run_flyknit.jpg' },
    { id: 3, name: 'Saucony Triumph 18', description: 'High-performance running shoes for long distances', price: '149.99', imageUrl: '/assets/images/saucony_triumph_18.jpg' },
    { id: 4, name: 'Asics Gel-Nimbus 23', description: 'High-cushioning running shoes for a comfortable run', price: '159.99', imageUrl: '/assets/images/asics_gel_nimbus_23.jpg' },
    { id: 5, name: 'Brooks Adrenaline GTS 21', description: 'Stability running shoes designed for a smooth ride', price: '139.99', imageUrl: '/assets/images/brooks_adrenaline_gts_21.jpg' },
    { id: 6, name: 'Converse Chuck 70', description: 'Retro-inspired high-top sneakers with vintage details', price: '79.99', imageUrl: '/assets/images/converse_chuck_70.jpg' },
    { id: 7, name: 'New Balance Fresh Foam 1080v11', description: 'Running shoes with plush cushioning and smooth ride', price: '149.99', imageUrl: '/assets/images/new_balance_fresh_foam_1080v11.jpg' },
    { id: 8, name: 'Puma RS-X', description: 'Bold sneakers with retro-inspired design', price: '119.99', imageUrl: '/assets/images/puma_rs_x.jpg' },
    { id: 9, name: 'Reebok Nano X', description: 'Versatile training shoes designed for comfort and support', price: '129.99', imageUrl: '/assets/images/reebok_nano_x.jpg' },
    { id: 10, name: 'Vans Authentic', description: 'Classic canvas sneakers with a timeless design', price: '69.99', imageUrl: '/assets/images/vans_authentic.jpg' },
];

const Shop = () => {
  return (
    <div className="shop-container">
      {/* Shop Header */}
      <section className="shop-header text-center mb-5">
        <h1>Shop Our Collection</h1>
        <p className="lead">Explore our range of stylish and comfortable footwear.</p>
      </section>

      {/* Product Grid */}
      <section className="product-grid">
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="product-card">
                  <img src={product.imageUrl} alt={product.name} className="product-img" />
                  <div className="product-body">
                    <h5 className="product-title">{product.name}</h5>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">${product.price}</p>
                    <a href={`/product/${product.id}`} className="btn btn-primary">View Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
