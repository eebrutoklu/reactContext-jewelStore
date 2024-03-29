import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import api from "../utils/api";
import { SiShopify } from "react-icons/si";
import { ProductContext } from "../context/ProductContext";
import { BasketContext } from "../context/BasketContext";

const Header = () => {
  const { setSelectedCategory } = useContext(ProductContext);
  const { basket } = useContext(BasketContext);
  const [categories, setCategories] = useState([]);
  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);

  useEffect(() => {
    api.get("/categories").then((res) => setCategories(res.data));
  }, []);

  return (
    <nav className="navbar bg-body-tertiary fixed-top navbar-expand-md">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <SiShopify className="text-success mb-2 fs-2" /> ContextJewel
          <span className="text-success">Store</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              ContextStore
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => {
                          setSelectedCategory(category);
                        }}
                        className="dropdown-item dp-cate bg-transparent text-dark"
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item d-flex">
                <NavLink className="nav-link" to="/Basket">
                  Basket
                  <span className="small px-1 text-center bg-success text-white rounded ">
                    {totalAmount}{" "}
                  </span>
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
