import React from "react";
import { noto_sans_jp } from "../fonts";


const DiaryPage = () => {
  return (
    <div className="bg-green-50 pb-24">
      {/* pb-24でした */}
      <div className="py-24">
        <p
          className={`text-6xl font-semibold ${noto_sans_jp.className} w-max mx-auto mb-6`}
        >
          📔
        </p>
        <h1
          className={`md:text-4xl text-3xl font-semibold ${noto_sans_jp.className} w-max mx-auto `}
        >
          体験記
        </h1>
      </div>

      <div
        className={`md:w-3/4 w-10/12 mx-auto ${noto_sans_jp.className} bg-white rounded-xl`}
      >

      </div>
    </div>
  );
};

export default DiaryPage;
