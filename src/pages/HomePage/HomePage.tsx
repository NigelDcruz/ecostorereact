import React from "react";
import MainHeader from "../../components/MainHeader";
import BannerSlider from "./sections/BannerSlider";
import SearchProducts from "./sections/SearchProducts";
import FilterProducts from "./sections/FilterProducts";
import ProductType from "./sections/ProductType";

const HomePage: React.FC = () => {
  return (
    <>
      <MainHeader />
      <main>
        <BannerSlider />
        <section className="flex justify-between px-5 py-5">
          <SearchProducts />

          <FilterProducts />
        </section>
        <section>
          <ProductType name={"Eco Products"} description={"All types of Eco Products"} />
        </section>
      </main>
    </>
  );
};

export default HomePage;
