import React from "react";

const BannerSlider: React.FC = () => {
  return (
    <section className="md:flex border md:h-96">
      <div className="md:w-6/12 p-5">
        <img
          src="https://a.storyblok.com/f/162306/6517x4345/79eb711de2/greggs-eco-shop-interior.jpg/m/1200x0/smart/filters:quality(95)"
          alt=""
          className="w-full h-full object-cover shadow-xl mx-auto rounded-lg"
        />
      </div>
      <div className="md:w-4/12 p-3 md:flex md:justify-center md:items-center mx-auto">
        <div>
          <h2 className="font-bold text-2xl">Banner Heading Text</h2>
          <p className="text-gray-400">
            Banner Description Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Inventore error illum laboriosam eos, unde alias
            facilis nisi a expedita quas, illo, laudantium libero consequuntur
            recusandae! Facilis fugit cumque aperiam laudantium!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
