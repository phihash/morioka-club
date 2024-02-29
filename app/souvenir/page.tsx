"use client";
import React from "react";
import SouvenirButton from "../components/souvenirButton";
import { useState } from "react";
import { noto_sans_jp } from "../fonts";
import SouvenirItem from "../components/souvenirItem";

const SouvenirPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "甘い",
    "スナック系",
    "個包装",
    "あんこ",
    "日持ちする",
    "職場用",
    "自分用",
    "家族・友人用",
  ]);
  const souvenirButtonNames = [
    "甘い",
    "スナック系",
    "個包装",
    "あんこ",
    "日持ちする",
    "職場用",
    "自分用",
    "家族・友人用",
  ];
  const [souvenirItems, setSouvenirItems] = useState([
    { name: "南部せんべい", categories: ["個包装", "日持ちする"], company: "" },
    { name: "盛岡冷麺", categories: [ "日持ちする"], company: "ぴょんぴょん舎" },
    {
      name: "岩手のはちみつ ラングドシャ",
      categories: ["甘い"],
      company: "山本養蜂場",
    },
    { name: "三陸えびせんべい", categories: ["スナック系"], company: "" },
    { name: "かもめのたまご", categories: ["あんこ","甘い"], company: "さいとう製菓" },
    { name: "ごま摺り団子", categories: ["あんこ"], company: "" },
    { name: "Cava（サヴァ）缶", categories: ["日持ちする"], company: "" },
    {
      name: "Cava（サヴァ）缶",
      categories: ["日持ちする"],
      company: "小山製麺",
    },
  ]);
  const clickSouvenirCategory = (categoryName: string) => {
    const index = selectedCategories.indexOf(categoryName);

    if (index === -1) {
      setSelectedCategories([...selectedCategories, categoryName]);
    } else {
      const newCategories = [...selectedCategories];
      newCategories.splice(index, 1);
      setSelectedCategories(newCategories);
    }
  };
  return (
    <div className="w-11/12 mx-auto">
      <h3 className={`${noto_sans_jp.className} font-semibold mt-6 ml-1`}>
        カテゴリ
      </h3>
      <div className="flex flex-wrap gap-1.5 mt-6">
        {souvenirButtonNames.map((souvenirButtonName, index) => {
          return (
            <SouvenirButton
              key={index}
              onClick={() => clickSouvenirCategory(souvenirButtonName)}
              name={souvenirButtonName}
              selected={selectedCategories.includes(souvenirButtonName)}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap mt-4">
        {/* アイテムエリア */}
        {souvenirItems.map((item, index) => {
          if (
            selectedCategories.some((category) =>
              item.categories.includes(category),
            )
          ) {
            return (
              <SouvenirItem
                key={index}
                name={item.name}
                company={item.company}
              ></SouvenirItem>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default SouvenirPage;
