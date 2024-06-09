import React from "react";
import { zen_maru_gothic } from "../fonts";
import Image from "next/image";


const PersonItem : React.FC<PersonItemProps> = ({name,src}) => {
  return (
      <div className="lg:w-1/3 md:w-1/2 w-full  p-4 cursor-pointer hover:opacity-60">
          <Image alt="content" className="object-cover object-center w-fit mx-auto rounded-xl"  width={300}  height={300} src={src} />
          <h2
            className={`${zen_maru_gothic.className} text-2xl text-yellow-900 mx-auto w-fit mt-10`}
          >
            {name}
          </h2>
      </div>
  );
};

interface PersonItemProps {
  name: string;
  src: string;
}

export default PersonItem;
