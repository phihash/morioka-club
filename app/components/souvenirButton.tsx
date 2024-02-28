import React from "react";
import { noto_sans_jp } from "../fonts";

const souvenirButton: React.FC<SouvenirButtonProps> = ({ onClick, name ,selected }) => {
  return (
    <div
      className={`${noto_sans_jp.className} ${selected ? 'bg-emerald-500 text-white' : ''} tracking-widest font-semibold border-2 border-emerald-500  w-max border py-1 px-2 rounded-2xl text-xs text-emerald-500 hover:bg-emerald-100 cursor-pointer`}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

interface SouvenirButtonProps {
  name: string;
  onClick: () => void;
  selected: boolean;
}

export default souvenirButton;
