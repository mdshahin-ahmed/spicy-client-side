import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageAllProducts = () => {

    const [menus, setMenus] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/menus')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [menus]);

    const handleDeleteProduct = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure, You Want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/menus/${id}`;
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