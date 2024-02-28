import React from "react";

const foodContentBox = () => {
  return (
    <div className="m-4 lg:w-1/2 md:w-full bg-red-50">
      <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 items-center gap-8">
        {/* スマホではcol それ以上では並べる、あとは角丸とかふちとか、パディング */}
        <div className="text-4xl bg-lime-400 p-4 rounded-lg">🏳️</div>
        <div>
          <h2>タイトル</h2>
          <p>説明等</p>
          <a>
            Learn More items-centerいるかも |SVG inline-flex SVGだからこそ？
          </a>
        </div>
      </div>
    </div>
  );
};

export default foodContentBox;
