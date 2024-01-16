import React from "react";
import Button from "../../components/ui/Button";

const ProductDetail: React.FC = () => {
  const dummyFoodImage =
    "https://www.sowfresh.in/cdn/shop/products/coldpressedcoconutoil_1000ML_JAR_Front_1000x1000.jpg?v=1638624667";

  return (
    <div className="p-5 grid grid-cols-12">
      <div className="col-span-6">
        <img src={dummyFoodImage} alt="Product " />
      </div>
      <div className="col-span-4 flex flex-col justify-center">
        <h1 className="font-medium text-xl">Product Title</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, maxime
          aperiam corporis necessitatibus magni architecto asperiores nulla aut
          ullam itaque!
        </p>
        <div className="flex items-center mb-2">
          <span className="text-yellow-400 mr-1">⭐</span>
          <span className="text-yellow-400 mr-1">⭐</span>
          <span className="text-yellow-400 mr-1">⭐</span>
          <span className="text-yellow-400 mr-1">⭐</span>
          <span className="text-yellow-400">⭐</span>
        </div>
        <p className="text-gray-600  text-2xl my-3">
          <span className="font-medium">Price:</span> $19.99{" "}
          <span className="text-lg text-gray-400">(18% off)</span>
        </p>
        <div className="flex">
          <div className="flex items-center mb-2 mr-4">
            <label className="mr-2">Quantity:</label>
            <select className="border border-gray-300 rounded-md p-1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
