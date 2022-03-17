import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import SingleReview from "../../Home/SingleReview/SingleReview";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://secret-basin-80045.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);
  return (
    <div className="gallery-wrap">
      <div className="mb-5 pt-5 gallery">
        <h3 className="text-uppercase mb-3">What they say</h3>
        <hr />
      </div>
      <div className="reviews-wrap py-5">
        <div className="container">
          <div className="row">
            {reviews.length ? (
              reviews.map((review) => (
                <SingleReview key={review._id} review={review}></SingleReview>
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

export default Reviews;
