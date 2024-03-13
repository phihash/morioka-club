"use client";
import Image from "next/legacy/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TopSlider() {
  const images = [
    "https://i.gyazo.com/1289e174dc6da810734d8ab12281f1d3.jpg",
    "https://i.gyazo.com/58b6479503844803e0ec81adf8d7a64a.jpg",
    "https://i.gyazo.com/cd22300a3db30a141b2ba1e80c6294ef.jpg",
    "https://i.gyazo.com/1ed22f890de885b247c062d240494bec.jpg",
    "https://i.gyazo.com/6e32e23b4bc04dca2033a206ab879941.jpg",
    "https://i.gyazo.com/a689a9fef3a11a2ed417f9eecbff6a73.jpg",
  ];

  const slideSettings = {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1.8,
      spaceBetween: 6,
    },
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      breakpoints={slideSettings}
      slidesPerView={"auto"}
      centeredSlides={true}
      loop={true}
      speed={800}
      autoplay={{
        delay: 2400,
        disableOnInteraction: false,
      }}
      // navigation
      pagination={{
        clickable: true,
      }}
      className=""
    >
      {images.map((src: string, index: number) => (
        <SwiperSlide key={index}>
          <div className="aspect-ratio aspect-ratio-16/9">
            <Image
              src={src}
              width={1920}
              height={1038}
              alt="Slider Image"
              sizes="(min-width: 1024px) 100vw, 60vw"
              className=" object-cover object-center "
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
