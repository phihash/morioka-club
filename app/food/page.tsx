import React from "react";
import { fredoka } from "../fonts";
import FoodContentBox from "../components/foodContentBox";

const page = () => {
  return (
    <div className="bg-lime-50">
      <div className="w-9/12 mx-auto pt-12">
        <h2 className={`${fredoka.className} text-4xl font-semibold`}>Food</h2>
      </div>
      <FoodContentBox></FoodContentBox>
    </div>
  );
};

export default page;
