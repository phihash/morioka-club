import React from "react";
import { noto_sans_jp } from "../fonts";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { memo } from "react";
import Image from "next/image";

// eslint-disable-next-line react/display-name
const foodItem: React.FC<FoodItemProps> = memo(
  ({
    dish,
    restaurant,
    url,
    contentUrl,
    instagram,
    link,
    price,
    twitter,
    openingHours,
  }) => {
    return (
      <div className={` lg:w-1/3 md:w-1/2 w-full p-6`}>
        <div className="p-2 rounded-lg">
          <Link
            href={`food/${contentUrl}`}
            className=" hover:opacity-85 cursor-pointer"
          >
            <Image
              className="h-64 rounded-xl w-full object-cover object-center mb-4"
              src={url}
              alt="写真"
              width={600}
              height={800}
            />
          </Link>

          <h3
            className={`${noto_sans_jp.className} tracking-widest text-green-600 text-sm font-semibold mb-2`}
          >
            {restaurant}
          </h3>

          <h2
            className={`${noto_sans_jp.className}  text-xl text-gray-900 font-semibold title-font mb-3`}
          >
            {dish}
          </h2>
          <div className="flex gap-6 mt-2">
            <p
              className={`${noto_sans_jp.className}  text-base text-yellow-900 font-bold title-font`}
            >
              {String(price)} 円
            </p>
            {openingHours[
              new Date().toLocaleString("ja-JP", { weekday: "long" })
            ] ? (
              <p
                className={`${noto_sans_jp.className}  text-base text-indigo-800 font-bold title-font`}
              >
                {new Date().toLocaleString("ja-JP", { weekday: "long" }) +
                  ": " +
                  openingHours[
                    new Date().toLocaleString("ja-JP", { weekday: "long" })
                  ]}
              </p>
            ) : (
              <p
                className={`${noto_sans_jp.className}  text-base text-indigo-800 font-bold title-font`}
              >
                定休日
              </p>
            )}
          </div>
          <div className="flex justify-end gap-4 mt-5">
            {link ? (
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={link}
                aria-label="このお店のWebサイトを開く"
              >
                {" "}
                <FaExternalLinkAlt size="30px" />{" "}
              </Link>
            ) : (
              ""
            )}
            {twitter ? (
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={twitter}
                aria-label="このお店の会社のXを開く"
              >
                {" "}
                <FaXTwitter size="30px" />{" "}
              </Link>
            ) : (
              ""
            )}
            {instagram ? (
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={instagram}
                aria-label="このお店のInstagramを開く"
              >
                {" "}
                <FaInstagram size="32px" />{" "}
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  },
);

interface FoodItemProps {
  dish: string;
  restaurant: string;
  url: string;
  contentUrl: string;
  instagram: string;
  link: string;
  price: Number;
  twitter: string;
  openingHours: {
    [day: string]: string;
  };
}

export default foodItem;
