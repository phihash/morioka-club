import React from "react";
import { noto_sans_jp } from "../fonts";
import { memo } from "react";

// eslint-disable-next-line react/display-name
const foodRadioButton: React.FC<FoodRadioButtonProps> = memo(
  ({ name, onClick }) => {
    return (
      <div className="flex items-center cursor-pointer" onClick={onClick}>
        <input
          id={name}
          type="radio"
          value={name}
          name="food-sort"
          className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-emerald-500 checked:border-lime-500 focus:outline-none cursor-pointer"
        />
        <label
          htmlFor={name}
          className={`${noto_sans_jp.className} ml-2 text-base font-medium text-gray-900 cursor-pointer`}
        >
          {name}
        </label>
      </div>
    );
  },
);

interface FoodRadioButtonProps {
  name: string;
  onClick: () => void;
}

export default foodRadioButton;
