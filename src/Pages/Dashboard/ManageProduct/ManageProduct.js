import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ManageProduct.css";

const ManageProduct = ({ product, handleDeleteProduct, handleEditProduct }) => {
  const { _id, image, name, price, description } = product;

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-5 d-flex">
      <Card className="shadow">
        <div className="overflow-hidden">
          <Card.Img
            className="ManageProductImage"
            style={{ height: "14rem", width: "100%" }}
            variant="top"
            src={`data:image/png;base64,${image}`}
          />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>Price ${price}</p>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <div className="mb-3 d-flex justify-content-around">
          <button
            className="mt-auto btn btn-danger mb-3"
            onClick={() => handleDeleteProduct(_id)}
          >
            Delete
          </button>
          <Link to={`/dashboard/manageAllProducts/update/${_id}`}>
            <button
              className="mt-auto btn btn-info mb-3"
              onClick={() => handleEditProduct(_id)}
            >
              Edit
            </button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default ManageProduct;
