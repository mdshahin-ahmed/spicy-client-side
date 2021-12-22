
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import SingleHomeMenu from './SingleHomeMenu';

const HomeMenu = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://secret-basin-80045.herokuapp.com/homeProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return (
        <div>
            <div className='mb-5 pt-5 gallery'>
                <h3 className='text-uppercase mb-3'>Out Menu</h3>
                <hr />
            </div>
            <div className="row">

                {
                    products.map(product => <SingleHomeMenu
                        key={product._id}
                        product={product}
                    ></SingleHomeMenu>)
                }

            </div>

        </div>
    );
};

export default HomeMenu;