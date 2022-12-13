import React, { useEffect } from "react";

const CheckoutPage = () => {
  useEffect(() => {
    document.title = "Jurassic Store | Checkout";
  }, []);

  return <div>CheckoutPage</div>;
};

export default CheckoutPage;
