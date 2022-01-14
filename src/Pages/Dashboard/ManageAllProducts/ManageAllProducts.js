import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageAllProducts = () => {

    const [menus, setMenus] = useState([]);
    useEffect(() => {
        fetch('https://secret-basin-80045.herokuapp.com/menus')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [menus]);

    const handleDeleteProduct = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure, You Want to delete?');
        if (proceed) {
            const url = `https://secret-basin-80045.herokuapp.com/menus/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully!');
                    }
                })  
        }
    }

    return (
        <div className="inventory pb-5">
            <div className="container">
                {/* <!-- section title --> */}
                <div className="row mb-5">
                    <div className="">
                        <h2>Manage Menus</h2>
                    </div>
                </div>
                {/* <!-- section title end --> */}

                {/* <!-- cars --> */}
                <div className="row">
                    {
                        menus.length ?
                        menus.map(product => <ManageProduct
                            key={product._id}
                            product={product}
                            handleDeleteProduct={handleDeleteProduct}
                        ></ManageProduct>)
                        :
                        <Spinner style={{margin:'0 auto'}} animation="border" variant="primary" />
                    }

                </div>
            </div>
        </div>
    );
};

export default ManageAllProducts;