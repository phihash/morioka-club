import React from "react";
import { noto_sans_jp, zen_maru_gothic } from "../fonts";

const souvenirItem: React.FC<SouvenirItemProps> = ({
  name,
  company,
  comment,
}) => {
  return (
    <div className={`lg:w-1/3 md:w-1/2 w-full p-6`}>
      <div className="p-2 rounded-lg">
        <img
          className="rounded-xl w-full object-cover object-center mb-4"
          src="https://i.gyazo.com/29463dd3092c3858e4aa56c9549b4305.jpg"
          alt="写真"
        />
        <h3
          className={`${noto_sans_jp.className} tracking-widest text-green-600 text-sm font-semibold mb-1`}
        >
          {company}
        </h3>
        <h2
          className={`${noto_sans_jp.className}  text-xl text-gray-900 font-semibold title-font mb-0.5`}
        >
          {name}
        </h2>
        <p
          className={`${zen_maru_gothic.className}  leading-relaxed text-gray-700 text-base`}
        >
          {comment}
        </p>
      </div>
    </div>
  );
};

interface SouvenirItemProps {
  name: string;
  company: string;
  comment: string;
}

export default souvenirItem;
