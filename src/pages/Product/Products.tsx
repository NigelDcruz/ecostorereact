import React from "react";
import SearchProducts from "../HomePage/sections/SearchProducts";
import FilterProducts from "../HomePage/sections/FilterProducts";
import ProductCard from "../../components/cards/ProductCard";

const ProductsPage: React.FC = () => {
    const dummyFoodImage = 'https://www.sowfresh.in/cdn/shop/products/coldpressedcoconutoil_1000ML_JAR_Front_1000x1000.jpg?v=1638624667';

    const dummyProductImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEzq5DzZOZjwX04OT32mWbUU9ESAcpPAVbXCRbdh8SOP1zEOzoH0f6Ol_1u4nBLcRoV7w&usqp=CAU';
  
  return (
    <div className="p-5">
      <h1 className="font-medium text-xl">
        List of All {"..Product Type.."} Products
      </h1>

      <section className="flex justify-between px-5 py-5">
        <SearchProducts />

        <FilterProducts />
      </section>
      <section className="mb-5 border-y py-5 shadow-lg">
        <div className="flex p-5 flex-wrap gap-6">
          <ProductCard productImage={dummyFoodImage} />
          <ProductCard productImage={dummyProductImage} />
          <ProductCard productImage={dummyFoodImage} />
          <ProductCard productImage={dummyProductImage} />
          <ProductCard productImage={dummyFoodImage} />
          <ProductCard productImage={dummyProductImage} />
          <ProductCard productImage={dummyFoodImage} />
          <ProductCard productImage={dummyProductImage} />
          <ProductCard productImage={dummyFoodImage} />
          <ProductCard productImage={dummyProductImage} />
          <ProductCard productImage={dummyFoodImage} />
          <ProductCard productImage={dummyProductImage} />
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
