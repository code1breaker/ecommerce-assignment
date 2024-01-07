import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (productId) => {
    const itemInCart = cartProducts.find((product) => product.id == productId);

    const product = products.find((product) => product.id == productId);
    if (!itemInCart) {
      setCartProducts((prev) => [...prev, { ...product, quantity: 1 }]);
    } else {
      setCartProducts((prev) =>
        prev.map((item) =>
          item.id == productId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  };

  const deleteFromCart = (productId) => {
    const product = cartProducts.filter(
      (cartProduct) => cartProduct.id != productId
    );
    setCartProducts(product);
  };

  const decrementQuantity = (productId) => {
    setCartProducts((prev) =>
      prev.map((item) =>
        item.id == productId
          ? item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
          : item
      )
    );
  };

  console.log(cartProducts);

  const value = {
    products,
    setProducts,
    allProducts,
    setAllProducts,
    cartProducts,
    addToCart,
    deleteFromCart,
    decrementQuantity,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
