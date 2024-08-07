import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Header from "../Home/Header/Header";
import Menu from "../Shared/Menu/Menu";

const Menus = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("https://spicy-server-side.vercel.app/menus")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  return (
    <div>
      <Header />

      <div className="container">
        <div className="row">
          {menus.length ? (
            menus.map((menu) => <Menu key={menu._id} menu={menu}></Menu>)
          ) : (
            <Spinner
              style={{ margin: "0 auto" }}
              animation="border"
              variant="primary"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Menus;
