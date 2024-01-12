import React from "react";
import MainHeader from "../../components/MainHeader";
import BannerSlider from "./sections/BannerSlider";
import SearchProducts from "./sections/SearchProducts";
import FilterProducts from "./sections/FilterProducts";
import ProductType from "./sections/ProductType";
import MainFooter from "../../components/MainFooter";

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
        <section className="mb-5 border-y py-5 shadow-lg">
          <ProductType name={"Eco Food"} description={"All types of Eco Food"} productType="Eco Food"/>
        </section>
        <section className=" border-b py-5 shadow-lg mb-2">
          <ProductType name={"Eco Products"} description={"All types of Eco Products"} productType="Eco Product" />
        </section>
      </main>
      <MainFooter />
    </>
  );
};

export default HomePage;
