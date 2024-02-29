import React from "react";
import { noto_sans_jp } from "../fonts";

const foodButton: React.FC<FoodButtonProps> = ({
  onClick,
  name,
  selected,
}) => {
  return (
    <div
      className={`${noto_sans_jp.className} ${selected ? "bg-emerald-500 text-white" : ""} tracking-widest font-semibold border-2 border-emerald-500  w-max border py-1 px-2 rounded-2xl text-xs text-emerald-500 md:hover:bg-emerald-100 md:hover:text-emerald-500  active:bg-emerald-100 cursor-pointer`}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

interface FoodButtonProps {
  name: string;
  onClick: () => void;
  selected: boolean;
}

export default foodButton;
