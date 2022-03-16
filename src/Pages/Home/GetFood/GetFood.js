import React from "react";
import "./GetFood.css";

const GetFood = () => {
  return (
    <div className="get-food-wrap">
      <div className="pt-5 get-food">
        <h3 className="text-uppercase mb-3">Get food fast — not fast food</h3>
        <hr />
        <p className="mb-0 mt-3 text-dark">
          Hello, we’re Spicy Food, your new premium food delivery service.
        </p>
        <p className=" text-dark">
          {" "}
          We know you’re always busy. No time for cooking. So let us take care
          of that, we’re really good at it, we promise!
        </p>
      </div>
      <div className="get-food-text-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <i className="fas fa-infinity fa-3x get-food-icon mb-3 mt-3"></i>
              <h5>UP TO 365 DAYS/YEAR</h5>
              <p className="text-start">
                Never cook again! We really mean that. Our subscription plans
                include up to 365 days/year coverage. You can also choose to
                order more flexibly if that's your style.
              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <i className="far fa-clock fa-3x get-food-icon mb-3 mt-3"></i>
              <h5>READY IN 20 MINUTES</h5>
              <p className="text-start">
                You're only twenty minutes away from your delicious and super
                healthy meals delivered right to your home. We work with the
                best chefs in each town to ensure that you're 100% happy.
              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <i className="fab fa-nutritionix fa-3x get-food-icon mb-3 mt-3"></i>
              <h5>100% ORGANIC</h5>
              <p className="text-start">
                All our vegetables are fresh, organic and local. Animals are
                raised without added hormones or antibiotics. Good for your
                health, the environment, and it also tastes better!
              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <i className="fas fa-shopping-cart fa-3x get-food-icon mb-3 mt-3"></i>
              <h5>ORDER ANYTHING</h5>
              <p className="text-start">
                We don't limit your creativity, which means you can order
                whatever you feel like. You can also choose from our menu
                containing over 100 delicious meals. It's up to you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetFood;
