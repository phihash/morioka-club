"use client";
import React from "react";
import FoodItem from "../components/foodItem";
import { noto_sans_jp } from "../fonts";
import { useState, memo } from "react";
import FoodButton from "../components/foodButton";
import FoodRadioButton from "../components/foodRadioButton";

// eslint-disable-next-line react/display-name
const FoodClientPage = memo(() => {
  const [selectedFoodCategories, setSelectedFoodCategories] = useState<
    string[]
  >([
    "Wifi有",
    "充電有",
    "カフェ",
    "入りやすい",
    "和食",
    "洋食",
    "海鮮",
    "スイーツ",
    "麺類",
  ]);
  const foodButtonNames = [
    "Wifi有",
    "充電有",
    "カフェ",
    "入りやすい",
    "和食",
    "洋食",
    "海鮮",
    "スイーツ",
    "麺類",
  ];
  const handleAllFoodCategory = () => {
    if (!selectedFoodCategories.length) {
      setSelectedFoodCategories(foodButtonNames);
    } else {
      setSelectedFoodCategories([]);
    }
  };
  const [foodItems, setFoodItems] = useState([
    {
      dish: "京抹茶プリン (1個)",
      categories: ["スイーツ", "入りやすい"],
      restaurant: "私のプリン 桜",
      url: "https://i.gyazo.com/e7d416b9ecf5c1071425aa290e353c18.jpg",
      comment:
        "大阪発のプリン専門店、盛岡は東北第一号店！一般的なプリンと異なりムースのような食感でした。",
      instagram: "https://www.instagram.com/watashinopurin/",
      link: "https://watashinopurin.com/",
      price: 660,
      recommendation: 5,
      twitter: "https://twitter.com/watashinopurin",
    },
    {
      dish: "牡蠣ときのこのバター醤油パスタ",
      categories: ["洋食"],
      restaurant: "TRENTA",
      url: "https://i.gyazo.com/922ce9c413bd81f9a5b152fa94e613fb.jpg",
      comment: "東北を拠点とするイタリアンのお店。牡蠣フェアの期間限定のパスタ",
      instagram: "https://www.instagram.com/trentahonbu/",
      link: "https://www.trenta.co.jp/",
      price: 1380,
      recommendation: 3,
      twitter: "https://twitter.com/TREnTA2021",
    },
    {
      dish: "じゃじゃ麺(小盛)",
      categories: ["和食", "麺類"],
      restaurant: "白龍",
      url: "https://i.gyazo.com/6e32e23b4bc04dca2033a206ab879941.jpg",
      comment:
        "味付け自体は薄いため、肉みそ・酢・にんにく・ラー油を用いて自分好みの味を見つけましょう。",
      instagram: "",
      link: "https://www.pairon.iwate.jp/",
      price: 450,
      recommendation: 2,
      twitter: "https://twitter.com/officialpairong",
    },
    {
      dish: "ランチセットパスタ",
      categories: ["洋食", "麺類"],
      restaurant: "銀河堂1890 Sweets&Bakery",
      url: "https://i.gyazo.com/b1ca1eab3ffc293ead654c89f01879b7.jpg",
      comment: "コメント",
      instagram: "https://www.instagram.com/gingado1890/",
      link: "",
      price: 1450,
      recommendation: 4,
      twitter: "",
    },
    {
      dish: "わらじかつ定食",
      categories: ["和食", "入りやすい"],
      restaurant: "むら八",
      url: "https://i.gyazo.com/d15ae02a8a3efed7e565a7e51ee7f501.jpg",
      comment:
        "1頭の豚から2枚しか取れない岩手県産の厳選された肉を使用した「とんかつ定食」",
      instagram: "https://www.instagram.com/mura_hachi/",
      link: "https://murahachi.co.jp/",
      price: 2068,
      recommendation: 6,
      twitter: "https://twitter.com/katu_murahachi",
    },
    {
      dish: "スティックチーズケーキ,ホットチョコ",
      categories: ["スイーツ", "カフェ"],
      restaurant: "４番目の珈琲店",
      url: "https://i.gyazo.com/340c39c5dee850b2991b18ecd5f9248f.png",
      comment: "スティックチーズケーキとホットチョコレート",
      instagram: "",
      link: "https://hatayacoffee.com/information/#hataya4nd",
      price: 900,
      recommendation: 5,
      twitter: "",
    },
    {
      dish: "よくばり天ざる",
      categories: ["和食", "入りやすい", "麺類"],
      restaurant: "えびすそば",
      url: "https://i.gyazo.com/9778bd2ed3c174561e895152047a979d.jpg",
      comment: "気軽に入店できる蕎麦屋さん",
      instagram: "https://www.instagram.com/yebisu_soba/",
      link: "https://yebisu-soba.com/",
      price: 1580,
      recommendation: 6,
      twitter: "https://twitter.com/yebisu_soba",
    },

    {
      dish: "紅茶",
      categories: ["カフェ", "Wifi有", "充電有"],
      restaurant: "NAGAHAMA COFFEE",
      url: " https://i.gyazo.com/17b6a27d4f51706f62dda218c5e90260.jpg",
      comment: "コメント",
      instagram: "https://www.instagram.com/nagahamacoffee_moriokanishi/",
      link: "http://www.ncafe.co.jp/",
      price: 900,
      recommendation: 4,
      twitter: "https://twitter.com/NagahamaCoffee",
    },
    {
      dish: "季節のタルト",
      categories: ["カフェ", "充電有"],
      restaurant: "Cafe Bar West38",
      url: "https://i.gyazo.com/dc9ac3e7d893ebc32f1a5cdc033fbdec.jpg",
      comment:
        "さつまいもを使用した季節のタルトとアイスティーのセット。季節のタルト定期的に変わります。",
      instagram: "https://www.instagram.com/p/CjQX4wMNd3w/",
      link: "https://akiyoshi-jazz.com/west38/",
      price: 1100,
      recommendation: 3,
      twitter: "",
    },
    {
      dish: "寿司",
      categories: ["和食", "海鮮"],
      restaurant: "清次郎",
      url: "https://i.gyazo.com/cd22300a3db30a141b2ba1e80c6294ef.jpg",
      comment: "フェザン店のランチメニュー「日替わり 大漁12貫ランチ」",
      instagram: "",
      link: "http://seijiro.jp/",
      price: 2178,
      recommendation: 6,
      twitter: "https://twitter.com/seijiro1101",
    },
    {
      dish: "つけ麺 並盛",
      categories: ["麺類"],
      restaurant: "つけ麺 和",
      url: "https://i.gyazo.com/95a1b976ee6f8adf1d0387a625567388.jpg",
      comment: "麺は2種類の小麦粉を使用し、濃厚なスープと絡んで美味!",
      instagram: "https://www.instagram.com/kazu_morioka.fezan/",
      link: "",
      price: 1200,
      recommendation: 5,
      twitter: "https://twitter.com/kazu_morioka",
    },
    {
      dish: "ミルクコーヒー バニラと黒ごまアイス",
      categories: ["カフェ", "スイーツ"],
      restaurant: "茶廊 車門",
      url: "https://i.gyazo.com/439357c263e9b2668ee33f0ac3b8fe5f.jpg",
      comment: "レトロな雰囲気のカフェ",
      instagram: "",
      link: "",
      price: 1010,
      recommendation: 3,
      twitter: "",
    },
    {
      dish: "わらびもち(5個)",
      categories: ["スイーツ", "入りやすい"],
      restaurant: "甘味処鎌倉",
      url: "https://i.gyazo.com/bf6a42b53622fff047431bceb90e50ae.jpg",
      comment: "わらびドリンクも美味しい。黒蜜は別売り(120円)でした",
      instagram: "https://www.instagram.com/kamakura.cafe/",
      link: "https://www.warabimochi-kamakura.com/",
      price: 820,
      recommendation: 4,
      twitter:
        "https://twitter.com/kamakura_warabi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    },
    {
      dish: "海鮮ちらし",
      categories: ["和食", "海鮮"],
      restaurant: "磯乃",
      url: "https://i.gyazo.com/29463dd3092c3858e4aa56c9549b4305.jpg",
      comment:
        "新鮮な魚介が美味しい海鮮ちらし、とびっこのぷちぷちした食感がたまりません。",
      instagram: "",
      link: "https://hideyoshi-inc.com/isono/",
      price: 1298,
      recommendation: 4,
      twitter: "",
    },
  ]);
  const [sortBy, setSortBy] = useState("");
  const handleSortByLowPrice = () => {
    setSortBy("Low");
    const sortedItems = [...foodItems].sort((a, b) =>
      sortBy == "Low" ? a.price - b.price : b.price - a.price,
    );
    setFoodItems(sortedItems);
  };
  const handleSortByHighPrice = () => {
    setSortBy("High");
    const sortedItems = [...foodItems].sort((a, b) =>
      sortBy == "High" ? b.price - a.price : a.price - b.price,
    );
    setFoodItems(sortedItems);
  };
  const handleSortByRecommendation = () => {
    setSortBy("Recommendation");
    const sortedItems = [...foodItems].sort((a, b) =>
      sortBy == "Recommendation"
        ? b.recommendation - a.recommendation
        : a.recommendation - b.recommendation,
    );
    setFoodItems(sortedItems);
  };
  const clickFoodCategory = (categoryName: string) => {
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
    <div className="bg-green-700 ">
      <div className="bg-white rounded-b-3xl">
        <div className="w-11/12 mx-auto pb-8">
          <h3 className={`${noto_sans_jp.className} px-3 font-semibold mt-6`}>
            カテゴリ
          </h3>
          <div className="px-3 flex flex-wrap gap-1.5 mt-6">
            <FoodButton
              onClick={handleAllFoodCategory}
              name="All"
              selected={Boolean(
                selectedFoodCategories.length == foodButtonNames.length,
              )} // カテゴリ全選択じゃないと色つけさせないようにするため
            />
            {foodButtonNames.map((foodButtonName, index) => {
              return (
                <FoodButton
                  key={index}
                  onClick={() => clickFoodCategory(foodButtonName)}
                  name={foodButtonName}
                  selected={selectedFoodCategories.includes(foodButtonName)}
                />
              );
            })}
          </div>

          <h3 className={`${noto_sans_jp.className} px-3 font-semibold mt-6 `}>
            ソート
          </h3>
          <div className=" px-3 flex flex-wrap gap-4 mt-6">
            <FoodRadioButton
              onClick={() => handleSortByHighPrice()}
              name="高い順"
            />
            <FoodRadioButton
              onClick={() => handleSortByLowPrice()}
              name="安い順"
            />
            <FoodRadioButton
              onClick={() => handleSortByRecommendation()}
              name="おすすめ順"
            />
          </div>

          <div className="flex flex-wrap mt-4">
            {/* アイテムエリア */}
            {foodItems.map((item, index) => {
              if (
                selectedFoodCategories.some((category) =>
                  item.categories.includes(category),
                )
              ) {
                return (
                  <FoodItem
                    key={index}
                    dish={item.dish}
                    restaurant={item.restaurant}
                    comment={item.comment}
                    url={item.url}
                    instagram={item.instagram}
                    link={item.link}
                    price={item.price}
                    twitter={item.twitter}
                  ></FoodItem>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

export default FoodClientPage;
