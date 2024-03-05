import React from "react";
import { zen_maru_gothic, noto_sans_jp } from "../fonts";

const FacilityPage = () => {
  return (
    <div className="w-11/12 mx-auto">
      {/* 大枠 */}
      <div className="mt-10 md:flex">
        {/* でかいサイズは写真半分に */}
        <div className="md:w-1/2">
          <img
            className="rounded-xl w-full  mb-4"
            src="https://i.gyazo.com/ceb5ba182e14462acd5c0b2fae1a9a35.jpg"
            alt="写真"
          />
        </div>
        <div className="md:ml-12 mt-10 md:mt-0 md:w-1/2">
          <h2
            className={`font-bold lg:text-3xl text-2xl  ${zen_maru_gothic.className} text-yellow-900`}
          >
            盛岡駅ビル フェザン
          </h2>
          <p
            className={`mt-6 leading-loose ${noto_sans_jp.className} font-semibold text-gray-700 tracking-wide`}
          >
            ファッション、雑貨、サービスはもちろん、岩手の魅力がたくさん詰まった食料品、お土産、レストランなど、160の専門店が一堂に集結した盛岡駅直結の商業施設です。
            <br />
          </p>
        </div>
      </div>
      {/* くぎり */}
      <div className="mt-20 flex flex-col-reverse md:flex-row">
        <div className="md:mr-12 mt-10 md:mt-0 md:w-1/2">
          <h2
            className={`font-bold lg:text-3xl text-2xl  ${zen_maru_gothic.className} text-yellow-900`}
          >
            クロステラス盛岡
          </h2>
          <p
            className={`mt-6 leading-loose ${noto_sans_jp.className} font-semibold text-gray-700 tracking-wide`}
          >
            北上川にかかる橋。
            <br />
            別名は二度泣き橋と呼ばれている。
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            className="rounded-xl w-full  mb-4"
            src="https://i.gyazo.com/58b6479503844803e0ec81adf8d7a64a.jpg"
            alt="写真"
            width="2663"
          />
        </div>
      </div>
      {/* くぎり */}
      <div className="mt-10 md:flex">
        <div className="md:w-1/2">
          <img
            className="rounded-xl w-full  mb-4"
            src="https://i.gyazo.com/ceb5ba182e14462acd5c0b2fae1a9a35.jpg"
            alt="写真"
          />
        </div>
        <div className="md:ml-12 mt-10 md:mt-0 md:w-1/2">
          <h2
            className={`font-bold lg:text-3xl text-2xl  ${zen_maru_gothic.className} text-yellow-900`}
          >
            盛岡バスセンター
          </h2>
          <p
            className={`mt-6 leading-loose ${noto_sans_jp.className} font-semibold text-gray-700 tracking-wide`}
          >
            ファッション、雑貨、サービスはもちろん、岩手の魅力がたくさん詰まった食料品、お土産、レストランなど、160の専門店が一堂に集結した盛岡駅直結の商業施設です。
            <br />
          </p>
        </div>
      </div>
      {/* くぎり */}
      <div className="mt-20 flex flex-col-reverse md:flex-row">
        <div className="md:mr-12 mt-10 md:mt-0 md:w-1/2">
          <h2
            className={`font-bold lg:text-3xl text-2xl  ${zen_maru_gothic.className} text-yellow-900`}
          >
            monaka
          </h2>
          <p
            className={`mt-6 leading-loose ${noto_sans_jp.className} font-semibold text-gray-700 tracking-wide`}
          >
            北上川にかかる橋。
            <br />
            別名は二度泣き橋と呼ばれている。
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            className="rounded-xl w-full  mb-4"
            src="https://i.gyazo.com/58b6479503844803e0ec81adf8d7a64a.jpg"
            alt="写真"
            width="2663"
          />
        </div>
      </div>
            {/* くぎり */}
            <div className="mt-10 md:flex">
        <div className="md:w-1/2">
          <img
            className="rounded-xl w-full  mb-4"
            src="https://i.gyazo.com/ceb5ba182e14462acd5c0b2fae1a9a35.jpg"
            alt="写真"
          />
        </div>
        <div className="md:ml-12 mt-10 md:mt-0 md:w-1/2">
          <h2
            className={`font-bold lg:text-3xl text-2xl  ${zen_maru_gothic.className} text-yellow-900`}
          >
            川徳百貨店
          </h2>
          <p
            className={`mt-6 leading-loose ${noto_sans_jp.className} font-semibold text-gray-700 tracking-wide`}
          >
            ファッション、雑貨、サービスはもちろん、岩手の魅力がたくさん詰まった食料品、お土産、レストランなど、160の専門店が一堂に集結した盛岡駅直結の商業施設です。
            <br />
          </p>
        </div>
      </div>

    </div>
  );
};

export default FacilityPage;
