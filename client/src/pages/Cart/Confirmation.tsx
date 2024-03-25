import React from "react";
import { useCartSelector } from "../../redux/hooks";

const ConfirmationPage: React.FC = () => {
  const cartItems = useCartSelector((state) => state.cart.items);
  const cartSubtotal = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  let Total = cartSubtotal;
  if (cartSubtotal > 1) {
    Total += 50;
  } else {
    Total = 0;
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-green-100 p-5">
        <h1 className="text-center font-medium text-2xl">Thank You!</h1>
        <p className="text-lg text-center">Your order has been placed.</p>

        <h2 className="font-medium text-xl mt-3 mb-1">Order Details</h2>
        <div className="flex flex-wrap gap-5">
          <p>
            <span className="font-medium">Order ID:</span> 123456789
          </p>
          <p>
            <span className="font-medium">Order Date: </span> 12/12/2020
          </p>
          <p>
            <span className="font-medium">Order Total: </span> ${Total}
          </p>
          <p>
            <span className="font-medium">Payment Method: </span> Cash on
            Delivery
          </p>
          <p>
            <span className="font-medium">Delivery Address: </span>123, Lorem
            Ipsum, Dolor Sit, Amet
          </p>
          <p>
            <span className="font-medium">Delivery Date: </span> 12/12/2020
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
