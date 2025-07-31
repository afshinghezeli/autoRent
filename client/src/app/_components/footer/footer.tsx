import { footerLogoPic } from "@/constants/FooterPics";
import {
  IconCallCalling,
  IconCreativeCommons,
  IconMap,
  IconSms,
} from "../icons";
import Image from "next/image";
import React from "react";

/**
 * The Site Footer
 *
 * @returns {JSX.Element} The Rendered Footer
 */
export const Footer: React.FC = (): React.ReactNode => {
  return (
    <div className="footer">
      <div className="container ">
        <div className="flex flex-col gap-4 bg-[#1E1E1E] rounded-2xl py-[41px] px-[52px] mb-16">
          {/* Information */}
          <div className="border border-neutral-7 rounded-2xl p-4  flex items-center justify-between">
            {/* Contact Us */}
            <div className="flex items-center gap-4 px-[39px] ">
              {/* Icon */}
              <div className="p-3 border border-white rounded-xl">
                <IconCallCalling className="w-6 h-6 text-white" />
              </div>
              {/* Title & Phone */}
              <div className="font-Estedad font-regular text-base leading-180 text-white flex gap-3 flex-col items-center">
                <span>ارتباط با ما</span>
                <span className="ltr-text block">0912-21326545</span>
              </div>
            </div>
            {/* Divide */}
            <div className="h-8 w-[1px] bg-neutral-6"></div>
            {/* Email */}
            <div className="flex items-center gap-4 px-[39px] ">
              {/* Icon */}
              <div className="p-3 border border-white rounded-xl">
                <IconSms className="w-6 h-6 text-white" />
              </div>
              {/* Title & Phone */}
              <div className="font-Estedad font-regular text-base leading-180 text-white flex gap-3 flex-col items-center">
                <span>ایمیل</span>
                <span className=" block">AfshinProfile@gmail.com</span>
              </div>
            </div>
            {/* Divide */}
            <div className="h-8 w-[1px] bg-neutral-6"></div>
            {/* Address */}
            <div className="flex items-center gap-4 px-[39px] ">
              {/* Icon */}
              <div className="p-3 border border-white rounded-xl">
                <IconMap className="w-6 h-6 text-white" />
              </div>
              {/* Title & Phone */}
              <div className="font-Estedad font-regular text-base leading-180 text-white flex gap-3 flex-col items-center">
                <span>آدرس </span>
                <span className=" ">تهران- خ شادمان</span>
              </div>
            </div>
          </div>
          {/* About Us & Links & GetEmail */}
          <div className="flex items-center justify-between px-[67.5px]">
            {/* About us */}
            <div className="">
              <div className="flex items-center gap-[5px] mb-6">
                {/* Logo */}
                <Image
                  src={footerLogoPic.footerLogo}
                  alt="لوگو اتورنت"
                  width={59}
                  height={59}
                />
                <p className="text-2xl font-Estedad font-black leading-180">
                  <span className="text-white">اُتــو</span>
                  <span className="text-secondary">رِنت</span>
                </p>
              </div>
              <p className="text-white font-Estedad font-regular text-sm leading-180 w-[407px]">
                اتورنت با رویکرد اعتماد به مشتری، با در اختیار داشتن بزرگترین
                ناوگان خودرویی متشکل از انواع خودروهای صفر کیلومتر، اقتصادی تا
                تجاری در سراسر کشور ایران آماده خدمت‌رسانی به مشتریان است.
              </p>
            </div>
            {/* Links*/}
            <div className="text-white font-Estedad font-medium text-sm ">
              <h6 className="mb-6">دسترسی آسان</h6>
              <ul className="flex flex-col gap-4">
                <li>سئوالات متداول</li>
                <li>تماس با ما</li>
                <li>درباره ما</li>
              </ul>
            </div>
            {/* GetEmail */}
            <div className="max-w-[320px] w-[320px]">
              <h6 className="mb-3 text-white font-Estedad font-semibold text-base">
                خبرنامه
              </h6>
              <div className="border border-neutral-4 rounded-lg px-1 py-[6px] flex items-center justify-between">
                <input
                  className="bg-transparent text-neutral-3 font-Estedad font-regular text-xs"
                  type="text"
                  placeholder="ایمیل خود را وارد کنید"
                />
                <button className="py-[3.5px] px-4 bg-secondary font-Estedad font-semibold text-sm leading-180 text-neutral-11 rounded-[6px]">
                  ارسال
                </button>
              </div>
            </div>
          </div>
          {/* CopyRight */}
          <div className="pt-6 border-t border-neutral-6 text-neutral-5 flex items-center justify-center gap-2">
            <IconCreativeCommons className="w-6 h-6" />
            <p className="font-Estedad font-medium text-xs leading-180">
              تمامی حقوق این وبسایت متعلق به اتورنت می‌باشد
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
