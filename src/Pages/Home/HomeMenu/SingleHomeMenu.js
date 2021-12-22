import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleHomeMenu = ({ product }) => {
    const { _id, name, image, price, description } = product;
    return (
        <div className="col-12 col-md-4 mb-5 d-flex">
            <Card className='shadow'>
                <Card.Img style={{ height: '14rem', width: '100%' }} variant="top" src={`data:image/png;base64,${image}`} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>Price ${price}</p>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Link className='mb-3' to={`/menus/orderPlace/${_id}`}>
                    <Button className="mt-auto" variant="primary">Order Now</Button>
                </Link>
            </Card>
        </div>
    );
};

export default SingleHomeMenu;