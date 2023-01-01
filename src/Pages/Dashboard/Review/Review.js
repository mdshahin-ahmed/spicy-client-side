import axios from "axios";
import React from "react";
// import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    if (parseInt(data.ratting) > 5 || parseInt(data.ratting) <= 0) {
      alert("Please give a ratting value 1 to 5");
      return;
    }
    axios.post("https://spicy-lntn.onrender.com/reviews", data).then((res) => {
      if (res.data.insertedId) {
        alert("Added Successfully!");
        reset();
      }
    });
  };
  return (
    <div>
      <h2>Review</h2>
      <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <input
            className="form-control mb-4"
            defaultValue={user.displayName}
            type="text"
            {...register("userName", { required: true })}
          />
          <input
            className="form-control mb-4"
            defaultValue={user.email}
            type="email"
            {...register("email")}
          />
          <textarea
            className="form-control mb-4"
            required
            placeholder="Your Comment"
            type="text"
            {...register("comment")}
          />
          <input
            className="form-control mb-4"
            required
            placeholder="Ratting by number 1-5"
            type="number"
            {...register("ratting")}
          />
          <input
            className="btn btn-primary mb-4"
            type="submit"
            value="Review"
          />
        </div>
      </form>
    </div>
  );
};

export default Review;
