import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product/Product";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchp = async () => {
      let r = await fetch("http://localhost:8080/products");
      let d = await r.json();
      console.log(d);
      setData(d);
    };
    fetchp();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div>
        {data.map((el) => (
          <div
            key={el.id}
            style={{
              display: "flex",
              width: "300px",
              flexWrap: "wrap",
              height: "300px",
              gap: "30px",
              border: "1px solid black",
              justifyContent: "center",
            }}
          >
            <h2>{el.name}</h2>
            <h4>{el.description}</h4>
            <Link to={`/Products/${el.id}`}>
              <Product />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
