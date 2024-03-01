import React from "react";
import { noto_sans_jp } from "../fonts";

const foodItem: React.FC<FoodItemProps> = ({ dish, restaurant }) => {
  return (
    <div className={`lg:w-1/3 md:w-1/2 w-full p-6`}>
      <div className="p-6 rounded-lg">
        <img
          className="h-48 rounded-xl w-full object-cover object-center mb-4"
          src="https://i.gyazo.com/922ce9c413bd81f9a5b152fa94e613fb.jpg"
          alt="写真"
        />
        <h3
          className={`${noto_sans_jp.className} tracking-widest text-green-600 text-sm font-semibold mb-1`}
        >
          {restaurant}
        </h3>
        <h2
          className={`${noto_sans_jp.className}  text-xl text-gray-900 font-semibold title-font mb-0.5`}
        >
          {dish}
        </h2>
        <p
          className={`${noto_sans_jp.className}  leading-relaxed text-gray-700 text-base`}
        >
          素朴な味で美味しい
        </p>
      </div>
    </div>
  );
};

interface FoodItemProps {
  dish: string;
  restaurant: string;
}

export default foodItem;
