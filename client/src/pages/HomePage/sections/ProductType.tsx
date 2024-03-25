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
        {/* {Products[0].map((x) => (
          <div>{x.price}</div>
        ))} */}
        {productType === "EcoFood"
          ? Products[0].map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            ))
          : Products[1].map((item) => (
              <ProductCard
                key={item.id}
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
