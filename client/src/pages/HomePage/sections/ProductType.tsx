import React from "react";
import ProductCard from "../../../components/cards/ProductCard";
import { Link } from "react-router-dom";
import { Products } from "../../../DummyProducts";

export interface ProductTypeProps {
  name: string;
  description: string;
  productType: string;
}

const ProductType: React.FC<ProductTypeProps> = ({
  name,
  description,
  productType,
}) => {
  // const dummyFoodImage =
  //  "https://www.sowfresh.in/cdn/shop/products/coldpressedcoconutoil_1000ML_JAR_Front_1000x1000.jpg?v=1638624667";
  // const dummyProductImage =
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEzq5DzZOZjwX04OT32mWbUU9ESAcpPAVbXCRbdh8SOP1zEOzoH0f6Ol_1u4nBLcRoV7w&usqp=CAU";
  return (
    <>
      <div className="md:flex md:justify-between px-5">
        <div>
          <h2 className="font-medium text-xl">{name}</h2>
          <p>{description}</p>
        </div>
        <div>
          <Link
            className="shadow-md block py-1 px-3 bg-[var(--primary-color)] text-white"
            to={`/products/${productType}`}
          >
            View All
          </Link>
        </div>
      </div>
      <div className="flex p-5 flex-wrap gap-6">
        {productType === "EcoFood"
          ? Products.Food.map((item) => (
              <ProductCard
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            ))
          : Products.Goods.map((item) => (
              <ProductCard
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            ))}
      </div>
    </>
  );
};

export default ProductType;
