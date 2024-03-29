import React, { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { BasketContext } from "../context/BasketContext";
const BasketItem = ({ product }) => {
  const { addToBasket, removeToBasket, decreaseToBasket } =
    useContext(BasketContext);
  return (
    <>
      <div className="row d-flex border border-2 border-success-subtle rounded mt-1 align-items-center p-1  ">
        <div className="col-2">
          {" "}
          <img
            className="object-fit-contain col-sm w-75"
            height={100}
            width={100}
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="col-4 mt-2">
          <p className=" fw-bold small text-truncate">
            {product.title.length > 14
              ? product.title.slice(0, 14) + "..."
              : product.title}{" "}
          </p>
          <p className="small"> Category:{product.category} </p>
        </div>
        <div className="col-2 d-flex gap-2 align-items-center overflow-hidden flex-column flex-sm-row flex-column-reverse">
          <button
            onClick={() => decreaseToBasket(product.id)}
            className="p-2 py-0 bg-transparent rounded-5 border-warning"
          >
            -
          </button>
          <span>{product.amount} </span>
          <button
            className="p-2 py-0 bg-transparent rounded-5 border-success"
            onClick={() => addToBasket(product)}
          >
            +
          </button>
        </div>

        <div className="col-2 ">
          {" "}
          <h5 className="mt-3 col-sm small">
            {" "}
            {(product.price * product.amount).toFixed(2)}$
          </h5>
        </div>

        <div className="col-1">
          {" "}
          <button
            className="text-danger bg-transparent border-0"
            onClick={() => removeToBasket(product.id)}
          >
            <FaRegTrashAlt />
          </button>
        </div>
      </div>
    </>
  );
};

export default BasketItem;
