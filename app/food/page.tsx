
"use client"
import React from "react";
import FoodItem from "../components/foodItem";
import { noto_sans_jp } from "../fonts";
import { useState } from "react";
import FoodButton from "../components/foodButton";


const FoodPage = () => {
  const [selectedFoodCategories, setSelectedFoodCategories] = useState<string[]>([
    "Wifi有",
    "充電有",
    "カフェ",
    "入りやすい"
  ]);
  const foodButtonNames = [
    "Wifi有",
    "充電有",
    "カフェ",
    "入りやすい"
  ];
  const clickSouvenirCategory = (categoryName: string) => {
    const index = selectedFoodCategories.indexOf(categoryName);

    if (index === -1) {
      setSelectedFoodCategories([...selectedFoodCategories, categoryName]);
    } else {
      const newCategories = [...selectedFoodCategories];
      newCategories.splice(index, 1);
      setSelectedFoodCategories(newCategories);
    }
  };
  return (
    <div className="w-11/12 mx-auto">
      <h3 className={`${noto_sans_jp.className} font-semibold mt-6 ml-1`}>
        カテゴリ
      </h3>
      <div className="flex flex-wrap gap-1.5 mt-6">
        {foodButtonNames.map((foodButtonName, index) => {
          return (
            <FoodButton
              key={index}
              onClick={() => clickSouvenirCategory(foodButtonName)}
              name={foodButtonName}
              selected={selectedFoodCategories.includes(foodButtonName)}
            />
          );
        })}
      </div>
      <FoodItem dish="パスタ" restaurant="レストラン"></FoodItem>
    </div>
  );
};

export default FoodPage;
