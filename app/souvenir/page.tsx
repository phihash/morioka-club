"use client";
import React from "react";
import SouvenirButton from "../components/souvenirButton";
import { useState } from "react";
import { noto_sans_jp } from "../fonts";

const SouvenirPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["甘い","スナック系","個包装","あんこ","日持ちする","職場用","自分用","家族・友人用"]);
  const souvenirButtonNames = ["甘い","スナック系","個包装","あんこ","日持ちする","職場用","自分用","家族・友人用"]
  const clickSouvenirCategory = (categoryName: string) => {
    const index = selectedCategories.indexOf(categoryName);
    if (index === -1) {
      setSelectedCategories([...selectedCategories, categoryName]);
    } else {
      const newCategories = [...selectedCategories];
      newCategories.splice(index, 1);
      setSelectedCategories(newCategories);
    }
    console.log(selectedCategories);
  };
  return (
    <div className="w-11/12 mx-auto">
      <h3 className={`${noto_sans_jp.className} font-semibold mt-6 ml-1`}>カテゴリ</h3>
      <div className="flex flex-wrap gap-1.5 mt-6">
        {souvenirButtonNames.map((souvenirButtonName,index) => {
          return <SouvenirButton key={index} onClick={() => clickSouvenirCategory(souvenirButtonName)} name={souvenirButtonName} selected={selectedCategories.includes(souvenirButtonName)} />
        })}
      </div>

    </div>
  );
};

export default SouvenirPage;
