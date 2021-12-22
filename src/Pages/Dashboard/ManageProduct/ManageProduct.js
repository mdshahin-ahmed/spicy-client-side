import React from 'react';
import { Card } from 'react-bootstrap';

const ManageProduct = ({ product, handleDeleteProduct }) => {
    const { _id, image, name, price, description } = product;
 
    return (
        <div className="col-12 col-md-4 mb-5">
            <Card className='shadow'>
                <Card.Img variant="top" src={`data:image/png;base64,${image}`} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>Price ${price}</p>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    
                    <button onClick={() => handleDeleteProduct(_id)} className="btn btn-danger mb-3">Delete</button>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default ManageProduct;