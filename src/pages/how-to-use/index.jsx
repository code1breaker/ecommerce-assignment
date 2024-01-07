import React from "react";

const HowToUse = () => {
  return (
    <div className="p-5">
      <h1 className="font-semibold text-center text-3xl">How To Use</h1>
      <p>Login Credentials</p>
      <p>Email: atuny0</p>
      <p>Password: 9uQFF1Lh</p>
      <ul className="list-disc px-5">
        <li>Home Page is protected route guest user can't access the page.</li>
        <li>Logout will navigate back to login page.</li>
        <li>Add To Cart functionality using context api.</li>
        <li>Searching and Filtering by category and price.</li>
      </ul>
    </div>
  );
};

export default HowToUse;
