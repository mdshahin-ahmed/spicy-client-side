import React from "react";
import Rating from "react-rating";
import "./SingleReview.css";

const SingleReview = ({ review }) => {
  const { userName, email, comment, ratting } = review;
  // console.log(review);
  return (
    <div className="col-12 my-3 col-md-6 col-lg-4 d-flex">
      <div className="card text-center py-4 px-3 shadow review-card-wrap">
        <h5 className=" customer-name text-capitalize">{userName}</h5>

        <Rating
          readonly
          initialRating={ratting}
          emptySymbol="far fa-star empty-star"
          fullSymbol="fas fa-star fill-star"
        />

        <h6 className=" pt-3">{email}</h6>

        <p className="text-muted text-left mx-auto">{comment}</p>

        <div className="customer-icon">
          <i className="fas fa-quote-left"></i>
        </div>
        {/* <!-- card body end --> */}
      </div>
    </div>
  );
};

export default SingleReview;
