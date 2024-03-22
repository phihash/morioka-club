"use client";
import Image from "next/legacy/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TopSlider() {
  const images = [
    "/images/spot1.jpg",
    "/images/food4.jpg",
    "https://i.gyazo.com/58b6479503844803e0ec81adf8d7a64a.jpg",
    "/images/spot4.jpg",
    "/images/food7.jpg",
    "/images/spot2.jpg",
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
            src={images[index]}
            width={1920}
            height={1038}
            alt="Slider Image"
            sizes="(min-width: 1024px) 100vw, 60vw"
            className="object-cover object-center"
          />
        </div>
      </SwiperSlide>
      ))}
    </Swiper>
  );
}
