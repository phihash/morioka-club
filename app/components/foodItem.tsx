import React from "react";
import { noto_sans_jp, zen_maru_gothic } from "../fonts";
import { FaInstagram } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import memo from "react"

const foodItem: React.FC<FoodItemProps> = ({
  dish,
  restaurant,
  url,
  comment,
  instagram,
  link,
  price
}) => {
  return (
    <div className={`lg:w-1/3 md:w-1/2 w-full p-6`}>
      <div className="p-2 rounded-lg">
        <img
          className="h-64 rounded-xl w-full object-cover object-center mb-4"
          src={url}
          alt="写真"
        />
        <h3
          className={`${noto_sans_jp.className} tracking-widest text-green-600 text-sm font-semibold mb-1`}
        >
          {restaurant}
        </h3>

        <h2
          className={`${noto_sans_jp.className}  text-xl text-gray-900 font-semibold title-font mb-1`}
        >
          {dish}
        </h2>

        <p
          className={`${zen_maru_gothic.className}  leading-relaxed text-gray-600 text-base mb-1`}
        >
          {comment}
        </p>
        <h2
          className={`${noto_sans_jp.className}  text-base text-yellow-900 font-bold title-font`}
        >
          {String(price)} 円
        </h2>
        <div className="flex justify-end gap-4 mt-5">
          {link ? <Link rel="noopener noreferrer" target="_blank" href={link}> <FaExternalLinkAlt size="30px" /> </Link>: ""}
          {instagram ?<Link rel="noopener noreferrer" target="_blank" href={instagram}>  <FaInstagram size="32px" /> </Link> : ""}
        </div>
      </div>
    </div>
  );
};

interface FoodItemProps {
  dish: string;
  restaurant: string;
  url: string;
  comment: string;
  instagram: string;
  link: string;
  price:Number
}

export default foodItem;
