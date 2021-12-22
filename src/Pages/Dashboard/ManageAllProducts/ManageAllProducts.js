import React, { useEffect, useState } from 'react';
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
        <div className="inventory py-5">
            <div className="container">
                {/* <!-- section title --> */}
                <div className="row mb-5">
                    <div className="col d-flex flex-wrap text-uppercase justify-content-center">
                        
                    </div>
                </div>
                {/* <!-- section title end --> */}

                {/* <!-- cars --> */}
                <div className="row">
                    {
                        menus.map(product => <ManageProduct
                            key={product._id}
                            product={product}
                            handleDeleteProduct={handleDeleteProduct}
                        ></ManageProduct>)
                    }

                </div>
            </div>
        </div>
    );
};

export default ManageAllProducts;