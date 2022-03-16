import React, { useEffect, useState } from "react";
import SingleHomeMenu from "./SingleHomeMenu";
import { Spinner } from "react-bootstrap";

const HomeMenu = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/homeProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <div>
      <div className="mb-5 pt-5 gallery">
        <h3 className="text-uppercase mb-3">Our Menus</h3>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          {products.length ? (
            products.map((product) => (
              <SingleHomeMenu
                key={product._id}
                product={product}
              ></SingleHomeMenu>
            ))
          ) : (
            <Spinner
              style={{ margin: "0 auto" }}
              animation="border"
              variant="primary"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
