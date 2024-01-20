import React from "react";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

const CartPage: React.FC = () => {
  const dummyFoodImage =
    "https://www.sowfresh.in/cdn/shop/products/coldpressedcoconutoil_1000ML_JAR_Front_1000x1000.jpg?v=1638624667";
  return (
    <div className="px-5 my-5 grid grid-cols-12 gap-5">
      <div className="col-span-8">
        <h1 className="text-2xl font-bold mb-5">Cart</h1>
        <ul>
          <li className="flex items-center justify-between border-b p-3 shadow mb-2">
            <div>
              <div className="flex">
                <img
                  src={dummyFoodImage}
                  alt="food"
                  className="w-16 h-16 rounded-lg mr-3"
                />
                <div className="flex flex-col justify-center">
                  <p className="font-bold">Food Name</p>
                  <p className="text-sm">Food Description</p>
                </div>
              </div>
              <div className="flex items-center justify-center mt-3">
                <button className="font-bold mr-1 text-2xl border py-1 px-3 leading-none block">
                  -
                </button>
                <span className="font-bold mx-3 text-lg">1</span>
                <button className="font-bold ml-1 text-2xl border py-1 px-3 leading-none block">
                  +
                </button>
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">Seller: </p>
              <p className="">Eco Store Goa</p>
            </div>
            <div>
              <p className="font-bold mb-2">Delivery by: </p>
              <p className="">Tue Jan 23</p>
            </div>

            <div>
              <p className="font-bold mb-2">Price: </p>
              <p className="">$300</p>
            </div>

            <div>
              <Button>Remove</Button>
            </div>
          </li>
          <li className="flex items-center justify-between border-b p-3 shadow mb-2">
            <div>
              <div className="flex">
                <img
                  src={dummyFoodImage}
                  alt="food"
                  className="w-16 h-16 rounded-lg mr-3"
                />
                <div className="flex flex-col justify-center">
                  <p className="font-bold">Food Name</p>
                  <p className="text-sm">Food Description</p>
                </div>
              </div>
              <div className="flex items-center justify-center mt-3">
                <button className="font-bold mr-1 text-2xl border py-1 px-3 leading-none block">
                  -
                </button>
                <span className="font-bold mx-3 text-lg">1</span>
                <button className="font-bold ml-1 text-2xl border py-1 px-3 leading-none block">
                  +
                </button>
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">Seller: </p>
              <p className="">Eco Store Goa</p>
            </div>
            <div>
              <p className="font-bold mb-2">Delivery by: </p>
              <p className="">Tue Jan 23</p>
            </div>

            <div>
              <p className="font-bold mb-2">Price: </p>
              <p className="">$300</p>
            </div>

            <div>
              <Button>Remove</Button>
            </div>
          </li>
          <li className="flex items-center justify-between border-b p-3 shadow mb-2">
            <div>
              <div className="flex">
                <img
                  src={dummyFoodImage}
                  alt="food"
                  className="w-16 h-16 rounded-lg mr-3"
                />
                <div className="flex flex-col justify-center">
                  <p className="font-bold">Food Name</p>
                  <p className="text-sm">Food Description</p>
                </div>
              </div>
              <div className="flex items-center justify-center mt-3">
                <button className="font-bold mr-1 text-2xl border py-1 px-3 leading-none block">
                  -
                </button>
                <span className="font-bold mx-3 text-lg">1</span>
                <button className="font-bold ml-1 text-2xl border py-1 px-3 leading-none block">
                  +
                </button>
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">Seller: </p>
              <p className="">Eco Store Goa</p>
            </div>
            <div>
              <p className="font-bold mb-2">Delivery by: </p>
              <p className="">Tue Jan 23</p>
            </div>

            <div>
              <p className="font-bold mb-2">Price: </p>
              <p className="">$300</p>
            </div>

            <div>
              <Button>Remove</Button>
            </div>
          </li>
          <li className="flex items-center justify-between border-b p-3 shadow mb-2">
            <div>
              <div className="flex">
                <img
                  src={dummyFoodImage}
                  alt="food"
                  className="w-16 h-16 rounded-lg mr-3"
                />
                <div className="flex flex-col justify-center">
                  <p className="font-bold">Food Name</p>
                  <p className="text-sm">Food Description</p>
                </div>
              </div>
              <div className="flex items-center justify-center mt-3">
                <button className="font-bold mr-1 text-2xl border py-1 px-3 leading-none block">
                  -
                </button>
                <span className="font-bold mx-3 text-lg">1</span>
                <button className="font-bold ml-1 text-2xl border py-1 px-3 leading-none block">
                  +
                </button>
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">Seller: </p>
              <p className="">Eco Store Goa</p>
            </div>
            <div>
              <p className="font-bold mb-2">Delivery by: </p>
              <p className="">Tue Jan 23</p>
            </div>

            <div>
              <p className="font-bold mb-2">Price: </p>
              <p className="">$300</p>
            </div>

            <div>
              <Button>Remove</Button>
            </div>
          </li>
          <li className="flex items-center justify-between border-b p-3 shadow mb-2">
            <div>
              <div className="flex">
                <img
                  src={dummyFoodImage}
                  alt="food"
                  className="w-16 h-16 rounded-lg mr-3"
                />
                <div className="flex flex-col justify-center">
                  <p className="font-bold">Food Name</p>
                  <p className="text-sm">Food Description</p>
                </div>
              </div>
              <div className="flex items-center justify-center mt-3">
                <button className="font-bold mr-1 text-2xl border py-1 px-3 leading-none block">
                  -
                </button>
                <span className="font-bold mx-3 text-lg">1</span>
                <button className="font-bold ml-1 text-2xl border py-1 px-3 leading-none block">
                  +
                </button>
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">Seller: </p>
              <p className="">Eco Store Goa</p>
            </div>
            <div>
              <p className="font-bold mb-2">Delivery by: </p>
              <p className="">Tue Jan 23</p>
            </div>

            <div>
              <p className="font-bold mb-2">Price: </p>
              <p className="">$300</p>
            </div>

            <div>
              <Button>Remove</Button>
            </div>
          </li>
     
        </ul>
      </div>
      <div className="col-span-4">
        <div className="border shadow-md p-5 mt-12">
          <h2 className="font-medium mb-3 text-xl text-center">Price Details</h2>
          <p className="mb-1 text-lg">
            <span className="font-medium ">Total:</span> $300
          </p>
          <p className="mb-1 text-lg">
            <span className="font-medium ">Delivery:</span> $50
          </p>
          <p className="mb-1 text-lg">
            <span className="font-medium ">Subtotal:</span> $250
          </p>
          <Link to="/checkout" className="bg-yellow-500 py-3 px-5 rounded-lg text-white my-5 block text-center">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
