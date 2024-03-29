import React, { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { Link } from "react-router-dom";
import BasketItem from "../components/BasketItem";

const BasketPage = () => {
  const { basket } = useContext(BasketContext);
  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);
  const totalPrice = basket.reduce((total, i) => total + i.amount * i.price, 0);
  return (
    <>
      <div className="mt-5 pt-5 container ">
        <h1>BASKET</h1>
        <div>
          {basket.length === 0 ? (
            <div className=" text-center ">
              <p className=" fs-3">basket is empty!</p>
              <Link className="btn btn-success" to="/">
                Go to Products.
              </Link>
            </div>
          ) : (
            basket.map((product) => (
              <BasketItem key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
      <div className="mx-2 p-2 mt-2 d-flex flex-column justify-content-end m-md-5 ">
        <div className="text-end mb-2">
          <span>
            {" "}
            Total Product:
            <span className="fw-bolder">{totalAmount}</span>
          </span>
        </div>
        <div className="text-end mb-2">
          <span>
            Total Price:
            <span className="fw-bolder">{totalPrice.toFixed(2)} $</span>
          </span>
        </div>
        <div className="text-end mb-2">
          <form className="d-flex justify-content-end ">
            <input
              type="text"
              className="shadow form-control w-25 w-sm-50 me-2"
            />
            <button className="btn btn-warning text-white">Apply</button>
          </form>
        </div>
        <div className="text-end ">
          <button className="btn btn-success text-white fw-bolder">
            Proceed to Payment.
          </button>
        </div>
      </div>
    </>
  );
};

export default BasketPage;
