import { useState } from "react";
import JSONdown from "./dataJSON/down.json";

const Cart = () => {
  const [products, setProducts] = useState([JSONdown]);

  const formatPrice = (value) => {
    const valor = value !== 0 ? value / 100 : "";

    return valor.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className="cart">
      <div className="content-title">
        <h1>Meu Carrinho</h1>
      </div>
      {products.map((product) =>
        product.items.map((item, index) => (
          <div className="content-product" key={index}>
            <div className="product-image">
              <img src={item.imageUrl} alt=""></img>
            </div>

            <div className="product-info">
              <h2 className="product-name">{item.name}</h2>
              <p className="product-price">{formatPrice(item.price)}</p>
            </div>
          </div>
        ))
      )}

      {products.map((item) => (
        <div className="checking">
          <div className="content-check">
            <div className="content-total">
              <h2>total</h2>
              <h2 className="value-total">{formatPrice(item.value)}</h2>
            </div>

            {item.value >= 1000 ? (
              <div className="content-message">
                <h2 className="message">
                  Parabéns, sua compra tem frete grátis !
                </h2>
              </div>
            ) : null}
          </div>

          <div className="content-button">
            <div>
              <button>finalizar compra</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
