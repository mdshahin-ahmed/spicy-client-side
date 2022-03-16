import React from "react";
import { Card } from "react-bootstrap";

const ManageOrder = ({ product, handleDeleteProduct }) => {
  const { _id, image, name, price, description, status } = product;

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-5">
      <Card className="shadow">
        <Card.Img variant="top" src={`data:image/png;base64,${image}`} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>Price ${price}</p>
          <Card.Text>{description}</Card.Text>

          <div className="d-flex justify-content-around">
            <button className="btn btn-info text-black mb-3">{status}</button>
            <button
              onClick={() => handleDeleteProduct(_id)}
              className="btn btn-danger mb-3"
            >
              Delete
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ManageOrder;
