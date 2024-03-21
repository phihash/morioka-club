"use client";
import React from "react";
import SouvenirButton from "../components/souvenirButton";
import { useState } from "react";
import { noto_sans_jp } from "../fonts";
import SouvenirItem from "../components/souvenirItem";
import SouvenirRadioButton from "../components/souvenirRadioButton";

const SouvenirPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "甘い",
    "スナック系",
    "個包装",
    "あんこ",
    "日持ちする",
    "職場用",
  ]);
  const souvenirButtonNames = [
    "甘い",
    "スナック系",
    "個包装",
    "あんこ",
    "日持ちする",
    "職場用",
  ];
  const [souvenirItems, setSouvenirItems] = useState([

    {
      name: "三陸えびせんべい",
      categories: ["スナック系","職場用","個包装","日持ちする"],
      company: "五篤丸水産",
      comment: "ちょうどいい塩味だけど、高血圧の人は注意。",
      price: 648,
      recommendation: 7,
      kcal: 22,
      url: "https://i.gyazo.com/57a03ddef15d662a15225e80c4bc3638.jpg",
      link:"https://gotokumaru.jp/"
    },
    {
      name: "はちみつバウムクーヘン",
      categories: ["甘い","職場用","個包装","日持ちする"],
      comment: "バウムクーヘンだが、1口サイズに個包装されており、職場用にもむく",
      company: "山本養蜂場",
      price: 831,
      recommendation: 5,
      kcal: 499,
      url: "/images/souvenir4.jpg",
      link:"https://gotokumaru.jp/"
    },
    {
      name: "アーモンドビスコッティ",
      categories: ["甘い","日持ちする"],
      company: "五篤丸水産",
      comment: "たまごボーロみたいな味。1袋あたりのカロリー、硬いし、おみやげむきではない",
      price: 540,
      recommendation: 2,
      kcal: 337,
      url: "/images/souvenir3.jpg",
      link:"https://gotokumaru.jp/"
    },
    {
      name: "ミルクまんじゅう",
      categories: ["甘い","職場用","個包装","日持ちする","あんこ"],
      company: "タルトタタン",
      comment: "5個入り",
      price: 864,
      recommendation: 5,
      kcal: 125,
      url: "/images/souvenir1.jpg",

      link:"https://gotokumaru.jp/"
    },
    {
      name: "濃厚チョコレートまんじゅう",
      categories: ["個包装","あんこ","職場用","日持ちする","あまい"],
      company: "タルトタタン",
      comment: "5個入り、カントリーマアムみたいなしっとり感があるが、あんことチョコが喧嘩している",
      price: 864,
      recommendation: 3,
      kcal: 119,
      url: "/images/souvenir2.jpg",

      link:"https://gotokumaru.jp/"
    },

  ]);
  const handleAllSouvenirCategory = () => {
    if (!selectedCategories.length) {
      setSelectedCategories(souvenirButtonNames);
    } else {
      setSelectedCategories([]);
    }
  };
  const [sortBy, setSortBy] = useState("");
  const handleSortByLowPrice = () => {
    setSortBy("Low");
    const sortedItems = [...souvenirItems].sort((a, b) =>
      sortBy == "Low" ? a.price - b.price : b.price - a.price,
    );
    setSouvenirItems(sortedItems);
  };
  const handleSortByHighPrice = () => {
    setSortBy("High");
    const sortedItems = [...souvenirItems].sort((a, b) =>
      sortBy == "High" ? b.price - a.price : a.price - b.price,
    );
    setSouvenirItems(sortedItems);
  };
  const handleSortByRecommendation = () => {
    setSortBy("Recommendation");
    const sortedItems = [...souvenirItems].sort((a, b) =>
      sortBy == "Recommendation"
        ? b.recommendation - a.recommendation
        : a.recommendation - b.recommendation,
    );
    setSouvenirItems(sortedItems);
  };
  const handleSortByKcal = () => {
    setSortBy("Kcal");
    const sortedItems = [...souvenirItems].sort((a, b) =>
      sortBy == "Kcal"
        ? b.kcal - a.kcal
        : a.kcal - b.kcal,
    );
    setSouvenirItems(sortedItems);
  };
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
    <div className="bg-green-700 ">
      <div className="bg-white rounded-b-3xl">
        <div className="w-11/12 mx-auto pb-8">
          <h3 className={`${noto_sans_jp.className} px-3 font-semibold mt-6 `}>
            カテゴリ
          </h3>
          <div className="px-3 flex flex-wrap gap-1.5 mt-6">
            <SouvenirButton
              onClick={handleAllSouvenirCategory}
              name="All"
              selected={Boolean(
                selectedCategories.length == souvenirButtonNames.length,
              )} // カテゴリ全選択じゃないと色つけさせないようにするため
            />
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

          <h3 className={`${noto_sans_jp.className} px-3 font-semibold mt-6 `}>
            ソート
          </h3>
          <div className="px-3 flex flex-wrap gap-4 mt-6">
            <SouvenirRadioButton
              name="高い順"
              onClick={handleSortByHighPrice}
            ></SouvenirRadioButton>
            <SouvenirRadioButton
              name="安い順"
              onClick={handleSortByLowPrice}
            ></SouvenirRadioButton>
            <SouvenirRadioButton
              name="おすすめ順"
              onClick={handleSortByRecommendation}
            ></SouvenirRadioButton>
            <SouvenirRadioButton
              name="カロリー順"
              onClick={handleSortByKcal}
            ></SouvenirRadioButton>
          </div>
          <div className="px-3 flex flex-wrap mt-4">
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
                    comment={item.comment}
                    price={item.price}
                    kcal={item.kcal}
                    url={item.url}
                    link={item.link}
                  ></SouvenirItem>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SouvenirPage;
