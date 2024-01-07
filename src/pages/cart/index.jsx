import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductProvider";

const Cart = () => {
  const { cartProducts, addToCart, deleteFromCart, decrementQuantity } =
    useContext(ProductContext);
    
  const total = cartProducts.reduce((ac, cv) => ac + cv.quantity * cv.price, 0);

  return (
    <>
      {cartProducts?.length ? (
        <div className="flex gap-10 p-10">
          <div className="w-[70vw] flex flex-col gap-5">
            <div className="flex justify-between font-bold text-2xl">
              <h1>Shopping Cart</h1>
              <p>{cartProducts.length} Items</p>
            </div>

            <div className="flex justify-between px-3">
              <p className="w-[50%]">Product Details</p>
              <p className="w-[25%]">Quantity</p>
              <p className="w-[12.5%]">Price</p>
              <p className="w-[12.5%]">Total</p>
            </div>
            {cartProducts.map((cartProduct) => {
              return (
                <div className="bg-white p-3 relative flex justify-between items-center">
                  <button
                    onClick={() => deleteFromCart(cartProduct.id)}
                    className="absolute top-1 right-2 text-lg"
                  >
                    X
                  </button>
                  <div className="w-[50%] flex gap-5">
                    <div className="w-[8rem] h-[5rem]">
                      <img
                        src={cartProduct.thumbnail}
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      <h1 className="text-xl">{cartProduct.title}</h1>
                      <p>{cartProduct.category}</p>
                    </div>
                  </div>

                  <div className="w-[25%]">
                    <button
                      onClick={() => decrementQuantity(cartProduct.id)}
                      className="text-2xl"
                    >
                      -
                    </button>
                    <input
                      className="outline-none w-10 text-center border-2 mx-2"
                      type="text"
                      value={cartProduct.quantity}
                    />
                    <button
                      onClick={() => addToCart(cartProduct.id)}
                      className="text-2xl"
                    >
                      +
                    </button>
                  </div>
                  <div className="w-[12.5%]">Rs. {cartProduct.price}</div>
                  <div className="w-[12.5%]">
                    Rs. {cartProduct.price * cartProduct.quantity}
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <h1 className="font-bold text-2xl w-[20vw]">Order Summary</h1>
            <div className="flex justify-between py-5">
              <p className="font-semibold">ITEMS {cartProducts?.length}</p>
              <p>{total}</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery</p>
              <p>50</p>
            </div>
            <div className="flex justify-between">
              <p>Total</p>
              <p>{total-50}</p>
            </div>

            <button className="bg-blue-500 text-white w-full mt-4 py-2">Checkout to Proceed</button>
          </div>
        </div>
      ) : (
        <p>Empty cart</p>
      )}
    </>
  );
};

export default Cart;
