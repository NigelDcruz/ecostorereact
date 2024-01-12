import React from "react";
import Button from "../../../components/ui/Button";
import ProductCard from "../../../components/cards/ProductCard";

interface ProductTypeProps {
  name: string;
  description: string;
}

const ProductType: React.FC<ProductTypeProps> = ({ name, description }) => {
  return (
    <>
      <div className="md:flex md:justify-between px-5">
        <div>
          <h2 className="font-medium text-xl">{name}</h2>
          <p>{description}</p>
        </div>
        <Button buttonType="primary">View All</Button>
      </div>
      <div className="flex p-5 flex-wrap gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};

export default ProductType;
