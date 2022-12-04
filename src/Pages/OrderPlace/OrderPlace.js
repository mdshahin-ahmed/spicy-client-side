import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const OrderPlace = () => {
  const [product, setProduct] = useState({});
  const { user } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    const url = `https://spicy-server-side.vercel.app/menus/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((productData) => setProduct(productData));
  }, []);

  const { name, price, image, description } = product;
  // console.log(product);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const newData = { ...data, price, name, image, description };
    console.log(newData);
    newData.status = "Pending...";
    fetch("https://spicy-server-side.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Added Successfully!");
          reset();
        }
      });
  };

  return (
    <div>
      <h2 className="mt-5 mb-4">Order Place</h2>

      {/* <div className='mx-auto'  style={{ maxWidth: '500px', margin: '0 auto' }}>
                
            </div> */}

      <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <input
            className="form-control mb-4"
            defaultValue={user.displayName}
            type="text"
            readOnly
            {...register("userName", { required: true })}
          />
          <input
            className="form-control mb-4"
            defaultValue={user.email}
            type="email"
            readOnly
            {...register("email")}
          />
          <input
            className="form-control mb-4"
            placeholder="Your Address"
            type="text"
            {...register("address")}
          />
          <input className="btn btn-primary mb-4" type="submit" value="Order" />
        </div>
      </form>
    </div>
  );
};

export default OrderPlace;
