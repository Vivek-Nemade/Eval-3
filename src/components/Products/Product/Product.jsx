import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  // Note: this id should come from api
  const [count, setCount] = useState(0);
  const [item, setitem] = useState({});
  const { id } = useParams();
  // const product = { id: 1 };

  // const deleteitem=(id)=>{
  //   let A = data
  // }

  useEffect(() => {
    fetch(`http://localhost:8080/products/${id}`)
      .then((r) => r.json())
      .then((d) => {
        setitem(d);
      });
  }, [id]);
  return (
    <div data-cy={`product-${item.id}`}>
      <h3 data-cy="product-name">{item.name}</h3>
      <h6 data-cy="product-description">{item.description}</h6>
      <button data-cy="product-add-item-to-cart-button">ADD to cart</button>
      <div>
        <button
          data-cy="product-increment-cart-item-count-button"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <span data-cy="product-count">{count}</span>
        <button
          data-cy="product-decrement-cart-item-count-button"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button data-cy="product-remove-cart-item-button">
          Remove From cart
        </button>
      </div>
    </div>
  );
};

export default Product;
