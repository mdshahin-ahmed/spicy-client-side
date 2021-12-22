import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Menu = ({ menu }) => {
    const { _id, name, image, price, description } = menu;
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
                    <Link to={`/menus/orderPlace/${_id}`}>
                        <Button variant="primary">Order Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Menu;