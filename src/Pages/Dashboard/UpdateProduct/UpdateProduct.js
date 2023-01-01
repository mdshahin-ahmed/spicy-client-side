import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    const url = `https://spicy-lntn.onrender.com/menus/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);

  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const updatedProduct = {
      name: updatedName,
      price: singleProduct.price,
      description: singleProduct.description,
    };
    setSingleProduct(updatedProduct);
  };

  const handlePriceChange = (e) => {
    const updatedPrice = e.target.value;
    const updatedProduct = {
      name: singleProduct.name,
      price: updatedPrice,
      description: singleProduct.description,
    };
    setSingleProduct(updatedProduct);
  };

  const handleDescriptionChange = (e) => {
    const updatedDescription = e.target.value;
    const updatedProduct = {
      name: singleProduct.name,
      price: singleProduct.price,
      description: updatedDescription,
    };
    setSingleProduct(updatedProduct);
  };

  const handleUpdate = (e) => {
    const url = `https://spicy-lntn.onrender.com/menus/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(singleProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("updated Successfully!");
          setSingleProduct({});
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <h2 className="mb-4">Edit Product</h2>
      <h3>{singleProduct.name}</h3>
      <h3>{singleProduct._id}</h3>
      <form className="mx-auto" onSubmit={handleUpdate}>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <input
            className="form-control mb-4"
            required
            placeholder="Menu name"
            type="text"
            value={singleProduct.name || ""}
            onChange={handleNameChange}
          />
          <input
            className="form-control mb-4"
            required
            placeholder="price"
            type="number"
            value={singleProduct.price || ""}
            onChange={handlePriceChange}
          />
          <textarea
            className="form-control mb-4"
            required
            placeholder="description"
            type="text"
            value={singleProduct.description || ""}
            onChange={handleDescriptionChange}
          />
          <input
            className="btn btn-primary mb-4"
            type="submit"
            value="Update"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
