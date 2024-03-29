import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Loader from "../components/Loader";
import Card from "../components/Card";

const MainPage = () => {
  const { products, selectedCategory } = useContext(ProductContext);

  // Category
  const filteredProducts =
    selectedCategory !== "All"
      ? products.filter((product) => product.category === selectedCategory)
      : products;

  return (
    <>
      <div className="container mt-5 pt-5">
        {" "}
        <h5
          className="text-center rounded mb-3 p-1
        "
        >
          <span className="small"> products shown:</span> {selectedCategory}{" "}
        </h5>
      </div>
      <div className=" d-flex flex-wrap justify-content-center gap-3 gap-md-4">
        {!products ? (
          <Loader />
        ) : (
          filteredProducts.map((item) => <Card product={item} key={item.id} />)
        )}
      </div>
    </>
  );
};

export default MainPage;
