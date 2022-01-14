import React from 'react';
import { Card } from 'react-bootstrap';
import './ManageProduct.css';

const ManageProduct = ({ product, handleDeleteProduct }) => {
    const { _id, image, name, price, description } = product;

    return (
        <div className="col-12 col-md-4 mb-5 d-flex">
            <Card className='shadow'>
                <div className="overflow-hidden">
                    <Card.Img className='ManageProductImage' style={{ height: '14rem', width: '100%' }} variant="top" src={`data:image/png;base64,${image}`} />
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>Price ${price}</p>
                    <Card.Text>
                        {description}
                    </Card.Text>


                </Card.Body>
                <div className="mb-3">
                    <button className="mt-auto" onClick={() => handleDeleteProduct(_id)} className="btn btn-danger mb-3">Delete</button>
                </div>
            </Card>
        </div>
    );
};

export default ManageProduct;