import React, { useEffect } from "react";
import Button from "../../components/ui/Button";
import { useParams } from "react-router-dom";
import { ProductCardProps } from "../../components/cards/ProductCard";
import { Products } from "../../DummyProducts";

const ProductDetail: React.FC = () => {
  const { id: prodId } = useParams();
  const prod = Products[0].find((x) => x.id === prodId);
  console.log(prod);

  // const [prod, setprod] = React.useState<ProductCardProps>();
  // const params= useParams();
  // useEffect(() => {
  //   const url = `http://localhost:5173/product-detail/${params.id}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setprod(data));
  //   console.log("params", params);
  // }, [params]);

  return (
    <div className="p-5 grid grid-cols-12">
      <div className="col-span-6">
        <img alt="Product " />
        {prod?.id}
        {prod?.title}
      </div>
      <div className="col-span-4 flex flex-col justify-center">
        <h1 className="font-medium text-xl">title</h1>
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
