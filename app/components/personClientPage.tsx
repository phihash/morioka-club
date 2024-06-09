"use client";
import React from "react";
import {  zen_maru_gothic } from "../fonts";
import PersonItem from "./personItem";

const PersonClientPage = () => {
  return (

<div className="bg-green-700">
<div className="bg-white rounded-b-3xl pb-32">
  <div className="pt-20">
      <h1
        className={`text-2xl md:text-3xl font-semibold ${zen_maru_gothic.className} text-green-700 w-max mx-auto`}
      >
        盛岡に所縁のある人物
      </h1>
    </div>
    <div className="w-11/12 mx-auto pt-16">
      <div className="flex flex-wrap mt-4">
      <PersonItem name="石川啄木" src={"/images/person1.png"} />
      <PersonItem name="原敬" src={"/images/person2.png"} />
      </div>
  </div>
</div>
</div>
  );
};

export default PersonClientPage;
