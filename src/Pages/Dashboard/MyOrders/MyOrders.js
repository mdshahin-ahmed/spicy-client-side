import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import ManageOrder from "../ManageOrder/ManageOrder";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://spicy-server-side.vercel.app/userOrders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure, You Want to delete?");
    if (proceed) {
      const url = `https://spicy-server-side.vercel.app/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully!");
          }
        });
    }
  };

  return (
    <div>
      <div className="orders pb-5">
        <div className="container">
          {/* <!-- section title --> */}
          <div className="row mb-5">
            <div className="col d-flex flex-wrap text-uppercase justify-content-center">
              <h1 className="font-weight-bold align-self-center mx-1 mb-0">
                My
              </h1>
              <h1 className="section-title-special mx-1">Orders</h1>
            </div>
          </div>
          {/* <!-- section title end --> */}

          {/* <!-- cars --> */}
          <div className="row">
            {orders.length ? (
              orders.map((product) => (
                <ManageOrder
                  key={product._id}
                  product={product}
                  handleDeleteProduct={handleDeleteProduct}
                ></ManageOrder>
              ))
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
    </div>
  );
};

export default MyOrders;
