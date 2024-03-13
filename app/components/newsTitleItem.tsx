import React from "react";
import { noto_sans_jp, lexend } from "../fonts";

const NewsTitleItem = () => {
  return (
    <div>
      <div className="md:flex md:items-baseline">
        <div className="flex pr-12 md:text-lg text-base">
          <p className={`text-slate-500 md:pr-8 pr-3 ${lexend.className}`}>
            2024.04.01
          </p>
          <p className=" font-bold text-yellow-900"> 観光スポット</p>
        </div>
        <p
          className={`${noto_sans_jp.className}  md:text-lg text-base font-semibold pt-2`}
        >
          石割桜がもうすぐ見頃の時期です
        </p>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
};

export default NewsTitleItem;
