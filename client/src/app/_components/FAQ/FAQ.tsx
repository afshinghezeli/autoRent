"use client";
import Image from "next/image";
import { useState } from "react";
import { IconAddSquare, IconMinusSquare } from "../icons";
import { FAQProps, FAQItem } from "./faq.types";

const defaultFAQItems: FAQItem[] = [
  {
    id: 1,
    question: "در صورت بروز نقص فنی برای خودرو چه اتفاقی می افتد؟",
    answer: "در صورت بروز هرگونه نقص فنی در خودرو، لطفاً با پشتیبانی ما تماس بگیرید. تیم فنی ما آماده ارائه خدمات و راهنمایی لازم می‌باشد."
  },
  {
    id: 2, 
    question: "هزینه بنزین و کارواش در خودروهای اجاره ای به عهده کیست؟",
    answer: "در زمان اجاره خودرو بدون راننده خودروها کارواش شده و با باک بنزین پر تحویل مشتریان عزیز می گردد. در زمان استرداد خودرو در صورتی که خودرو به کارواش نیاز داشته و یا خودرو دارای کسر سوخت باشد هزینه آن بر عهده مشتری می باشد."
  },
  {
    id: 3,
    question: "آیا ماشین های اتورنت دارای بیمه هستند؟",
    answer: "بله، تمامی خودروهای اتورنت دارای بیمه شخص ثالث و بدنه می‌باشند. جزئیات پوشش بیمه در قرارداد اجاره قید شده است."
  },
  {
    id: 4,
    question: "محدودیت کیلومتر در اجاره خودرو چقدر می باشد؟",
    answer: "محدودیت کیلومتر بسته به نوع قرارداد و مدت اجاره متفاوت است. جزئیات دقیق در هنگام رزرو اعلام خواهد شد."
  }
];

export const FAQ: React.FC<FAQProps> = ({
  items = defaultFAQItems,
  className
}) => {
  const [openItem, setOpenItem] = useState<number>(2); // Default to second item (fuel/washing question)

  const toggleItem = (id: number) => {
    if (openItem === id) {
      // Keep item open - don't allow closing the active accordion
    } else {
      setOpenItem(id); // Open new accordion
    }
  };

  const faqClasses = className ? `faq ${className}` : "faq";

  return (
    <div className={faqClasses}>
      {/* Container */}
      <div className="container mb-12">
        {/* Title & Subtitle */}
        <div className="text-center mb-6">
          {/* Subtitle */}
          <span className="font-medium text-neutral-8 text-2xl leading-180 mb-2 block">
            پر تکرارترین سؤالاتی که پرسیدید
          </span>
          {/* Title */}
          <h2 className="font-bold text-[2rem] leading-180 text-neutral-10 mb-4">
            سؤالات
            <span className="text-secondary-shade-1"> متداول </span>
          </h2>
        </div>

        {/* Accordion & Image */}
        <div className="grid grid-cols-12 gap-x-6">
          {/* Accordion */}
          <div className="col-span-8">
            <div className="flex flex-col gap-4 h-full">
              {items.map((item) => {
                const isActive = openItem === item.id;
                
                return (
                  <div
                    key={item.id}
                    className={`transition-all duration-300 ${isActive ? "grow" : "grow-0"}`}
                  >
                    <div className="px-4 rounded-xl bg-white border border-neutral-2 h-full">
                      {/* Header */}
                      <div
                        onClick={() => toggleItem(item.id)}
                        className="flex items-center gap-2 cursor-pointer select-none"
                      >
                        {/* Icon */}
                        <div>
                          {isActive ? (
                            <IconMinusSquare size={24} className="text-primary" />
                          ) : (
                            <IconAddSquare size={24} className="text-primary" />
                          )}
                        </div>
                        {/* Title */}
                        <h6 className="py-6 font-medium text-base text-neutral-10">
                          {item.question}
                        </h6>
                      </div>
                      {/* Body */}
                      <div className="transition-all">
                        {/* Text */}
                        <p
                          className={`font-normal text-sm leading-180 text-neutral-7 ${
                            isActive ? "block pb-4" : "hidden"
                          }`}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Image */}
          <div className="col-span-4 h-[459px] w-[392px] overflow-hidden rounded-2xl">
            <Image 
              src="/images/faqPic.webp" 
              alt="FAQ"
              width={392}
              height={459}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};