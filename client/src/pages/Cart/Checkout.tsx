import React from "react";
import { Link } from "react-router-dom";
import { useCartSelector } from "../../redux/hooks";

const CheckOutPage: React.FC = () => {
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
    <div className="px-5 my-5 grid grid-cols-12 gap-5">
      <div className="col-span-5">
        <h2 className="font-medium text-xl mb-4">Billing Details</h2>
        <form className="grid grid-cols-2 gap-5 border p-5">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              className="border p-2 rounded-lg w-full"
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              className="border p-2 rounded-lg w-full"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="border p-2 rounded-lg w-full"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              className="border p-2 rounded-lg w-full"
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              className="border p-2 rounded-lg w-full"
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              className="border p-2 rounded-lg w-full"
            />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              className="border p-2 rounded-lg w-full"
            />
          </div>
          <div>
            <label htmlFor="zip">Zip</label>
            <input
              type="text"
              id="zip"
              className="border p-2 rounded-lg w-full"
            />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              className="border p-2 rounded-lg w-full"
            />
          </div>
        </form>
        <h2 className="font-medium text-xl mb-4 mt-5">Payment Method</h2>
        <form className="border p-5">
          <label
            htmlFor="cashOnDelivery"
            className="flex items-center cursor-pointer"
          >
            Cash on Delivery
            <input
              type="checkbox"
              id="cashOnDelivery"
              name="paymentMethod"
              value="cashOnDelivery"
              className="border p-2 rounded-lg ml-3"
            />
          </label>
        </form>
      </div>
      <div className="col-span-4 col-start-9">
        <div className="border shadow-md p-5 mt-12">
          <h2 className="font-medium mb-3 text-xl text-center">
            Order Summary
          </h2>
          <p className="mb-1 text-lg">
            <span className="font-medium ">Subtotal:</span> ${cartSubtotal}
          </p>
          <p className="mb-1 text-lg">
            <span className="font-medium ">Delivery:</span> $50
          </p>
          <p className="mb-1 text-lg">
            <span className="font-medium ">Total:</span> ${Total}
          </p>
          <Link
            to="/confirmation"
            className="bg-yellow-500 py-3 px-5 rounded-lg text-white my-5 block text-center"
          >
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
