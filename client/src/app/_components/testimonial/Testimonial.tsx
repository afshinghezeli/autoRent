"use client";

import { TestimonialData } from "@/constants/testimonial";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IconStar } from "../icons";

// Thumbnail component to handle active state
function ThumbnailSlide({ item, isActive }: { item: any; isActive: boolean }) {
  return (
    <div className={`cursor-pointer select-none thumbs__item--bg flex gap-4 items-center justify-center border border-neutral-2 rounded-2xl p-4 ${
      isActive ? 'bg-secondary' : 'bg-white'
    }`}>
      <div className="size-16 rounded-full overflow-hidden">
        <Image
          src={item.img}
          alt={`تصویر ${item.name}`}
          width={64}
          height={64}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex gap-2 flex-col justify-between">
        <span className="font-Estedad font-medium text-base text-black">
          {item.name}
        </span>
        <span className="font-Estedad font-regular text-sm leading-180 text-neutral-9">
          27 دی ماه 1380
        </span>
      </div>
    </div>
  );
}

function Testimonial() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="Testimonial">
      <div className="container mb-12">
      {/* Title & Subtitle */}
      <div className="text-center mb-6">
        {/* Subtitle */}
        <span className="font-Estedad font-regular text-neutral-8 text-2xl leading-180 mb-2">
          آنچه مشتریان ما درموردمان گفته‌اند.
        </span>
        {/* Title */}
        <h2 className="font-Estedad font-bold text-[2rem] leading-180 text-neutral-10 mb-4">
          نظرات
          <span className="text-secondary-shade-1"> مشتریان </span>
        </h2>
      </div>
      {/* Slider & Pagination */}
      <div>
        {/* Slider */}
        <div className=" w-full h-[391px] bg-white border border-neutral-2 rounded-2xl mb-6">
          <Swiper
            loop
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[FreeMode, Thumbs, Autoplay]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {TestimonialData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center ">
                  {/* Header */}
                  <div className="flex flex-col gap-1 items-center mt-8 mb-10 ">
                    <div className="h-[136px] w-[136px] overflow-hidden rounded-full border-[5px] border-primary">
                      <Image
                        src={item.img}
                        alt={`تصویر ${item.name}`}
                        width={136}
                        height={136}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <span className="font-Estedad font-medium text-base text-black">
                      {item.name}
                    </span>
                    {/* Rating */}
                    <div className="flex items-center gap-[6px]">
                      <IconStar className="w-6 h-6 fill-neutral-2 text-transparent" />
                      <IconStar className="w-6 h-6 fill-secondary text-transparent" />
                      <IconStar className="w-6 h-6 fill-secondary text-transparent" />
                      <IconStar className="w-6 h-6 fill-secondary text-transparent" />
                      <IconStar className="w-6 h-6 fill-secondary text-transparent" />
                    </div>
                  </div>
                  {/* Body */}
                  <div className="mb-4 text-center w-[581px]">
                    <p className="font-Estedad font-regular text-sm leading-180 text-neutral-7">
                      {item.comment}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Pagination */}
        <div className=" ">
          <Swiper
            modules={[FreeMode, Navigation, Thumbs]}
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            spaceBetween={24}
            watchSlidesProgress={true}
          >
            {TestimonialData.map((item, index) => (
              <SwiperSlide key={index}>
                <ThumbnailSlide item={item} isActive={index === activeIndex} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Testimonial;
