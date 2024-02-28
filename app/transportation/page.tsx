import React from "react";
import LinkPageCard from "../components/linkPageCard";

const page = () => {
  return (
    <div>
      <div>
        <LinkPageCard
          name="岩手県交通株式会社"
          url="http://www.iwatekenkotsu.co.jp/"
        ></LinkPageCard>
        <LinkPageCard
          name="バス予報"
          url="https://morioka-area.busyohou.jp/"
        ></LinkPageCard>
      </div>
    </div>
  );
};

export default page;
