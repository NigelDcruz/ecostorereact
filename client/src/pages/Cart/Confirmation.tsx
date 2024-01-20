import React from "react";

const ConfirmationPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-green-100 p-5">
        <h1 className="text-center font-medium text-2xl">Thank You!</h1>
        <p className="text-lg text-center">Your order has been placed.</p>

        <h2 className="font-medium text-xl mt-3 mb-1">Order Details</h2>
        <div className="flex flex-wrap gap-5">
          <p><span className="font-medium">Order ID:</span> 123456789</p>
          <p><span className="font-medium">Order Date: </span> 12/12/2020</p>
          <p><span className="font-medium">Order Total: </span> $300</p>
          <p><span className="font-medium">Payment Method: </span> Cash on Delivery</p>
          <p><span className="font-medium">Delivery Address:  </span>123, Lorem Ipsum, Dolor Sit, Amet</p>
          <p><span className="font-medium">Delivery Date: </span> 12/12/2020</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
