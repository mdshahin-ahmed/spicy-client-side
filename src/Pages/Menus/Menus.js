
import React, { useState, useEffect } from 'react';
import Header from '../Home/Header/Header';
import Menu from '../Shared/Menu/Menu';



const Menus = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/menus')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, []);

    return (
        <div>
            <Header />
            <h2>Inside Menu</h2>

            <div className="container">
                <div className="row">
                    {
                        menus.map(menu => <Menu
                            key={menu._id}
                            menu={menu}
                        ></Menu>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Menus;