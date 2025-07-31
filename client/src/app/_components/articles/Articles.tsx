import { IconArrowLeft, IconClock, IconEye } from "../icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { articlesPic } from "@/constants/articles";

function Articles() {
  return (
    <div className="container mb-20">
        {/* Title & Subtitle */}
        <div className="text-center mb-6 relative">
          {/* Subtitle */}
          <span className="font-Estedad font-regular text-neutral-8 text-2xl leading-180 mb-2">
            مقالات ما
          </span>
          {/* Title */}
          <h2 className="font-Estedad font-bold text-[2rem] leading-180 text-neutral-10 mb-4">
            مجله
            <span className="text-secondary-shade-1"> خودرو </span>
          </h2>
          <div className="flex items-center gap-2 py-2 px-[27px] text-primary font-Estedad font-semibold text-lg leading-180 absolute left-0 bottom-0">
            <Link href="#">مشاهده همه</Link>
            <IconArrowLeft className="w-5 h-5" />
          </div>
        </div>
        {/* Articles */}
        <div className="grid grid-cols-12 gap-6">
          {articlesPic.map((item, index) => (
            //Article
            <div key={index} className="col-span-4 bg-white border border-neutral-2 rounded-2xl p-4">
              {/* Thumbnail */}
              <div className="h-[195px] rounded-xl overflow-hidden mb-4">
                <Image 
                  src={item.img} 
                  alt="تصویر مقاله"
                  width={400}
                  height={195}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Body */}
              <div className="flex flex-col gap-4">
                {/* Title */}
                <h5 className="font-Estedad font-medium text-base text-neutral-9">روش های مختلف برای اجاره خودرو </h5>
                {/* Text */}
                <p className="font-Estedad font-regular text-xs text-neutral-6 leading-180">
                   امروزه با تغییراتی که در سبک زندگی مردم و شرایط اقتصادی جوامع
                  به وجود آمده است نیازهای افراد و نحوه دسترسی به آنها نیز دچار
                  تحولاتی شده است.
                </p>
                {/* Information */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <IconClock className="w-4 h-4 text-neutral-7" />
                    <span className="font-Estedad font-regular text-sm text-neutral-6">3 دقیقه</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconEye className="w-4 h-4 text-neutral-7" />
                    <span className="font-Estedad font-regular text-sm text-neutral-6">1,213</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Articles;