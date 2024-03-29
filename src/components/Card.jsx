import React, { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

const Card = ({ product }) => {
  const { addToBasket } = useContext(BasketContext);
  // console.log(product);
  return (
    <>
      <div className="card py-2 border-2" style={{ width: "250px" }}>
        <div className="d-flex justify-content-center">
          <img
            src={product.image}
            height={120}
            className="object-fit-contain rounded-start-2"
            alt={product.title}
          />
        </div>
        <div className="card-body">
          <h6 className=" text-truncate">{product.title} </h6>
          <p className=" fw-bold">{product.price} $</p>
          <p className=" small">{product.category} </p>
          <button
            onClick={() => addToBasket(product)}
            className="w-100 rounded btn btn-success"
          >
            add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
