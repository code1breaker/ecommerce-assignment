import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";

const Header = () => {
  const { cartProducts } = useContext(ProductContext);
  const navigate = useNavigate();
  const auth = localStorage.getItem("auth");

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <header className="p-2 bg-blue-200 sticky top-0 z-10">
      <div className="w-[80%] mx-auto flex justify-between items-center">
        <h1 className="">Products</h1>
        <nav className="flex gap-5">
          <p>
            <Link to={"/"}>Home</Link>
          </p>
          <p>
            <Link to={"/cart"}>Cart {cartProducts.length}</Link>
          </p>
          {auth ? (
            <p className="cursor-pointer" onClick={() => handleLogout()}>
              Logout
            </p>
          ) : (
            <p className="cursor-pointer" onClick={() => navigate("/login")}>Login</p>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
