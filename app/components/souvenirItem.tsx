import React from "react";
import { noto_sans_jp, zen_maru_gothic } from "../fonts";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const souvenirItem: React.FC<SouvenirItemProps> = ({
  name,
  company,
  comment,
  price,
  url,
  link,
  kcal
}) => {
  return (
    <div className={`lg:w-1/3 md:w-1/2 w-full p-6`}>
      <div className="p-2 rounded-lg">
        <Image
          className="h-64 rounded-xl w-full object-cover object-center mb-4"
          src={url}
          alt="写真"
          width={600}
          height={800}
          loading="lazy"
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
        <div className="flex gap-2 mt-2">
        <p
          className={`${noto_sans_jp.className}  text-base text-yellow-900 font-bold title-font`}
        >
          {String(price)} 円
        </p>
        <p
          className={`${noto_sans_jp.className}  text-base text-yellow-900 font-bold title-font`}
        >
          {String(kcal)} kcal
        </p>
        </div>

        <div className="flex justify-end gap-4 mt-5">
        {link ? (
              <Link rel="noopener noreferrer" target="_blank" href={link} aria-label="このおみやげを製造している会社のWebサイトを開く">
                {" "}
                <FaExternalLinkAlt size="30px" />{" "}
              </Link>
            ) : (
              ""
            )}
</div>
      </div>
    </div>
  );
};

interface SouvenirItemProps {
  name: string;
  company: string;
  comment: string;
  price: Number;
  kcal: Number;
  url: string;
  link:string;
}

export default souvenirItem;
