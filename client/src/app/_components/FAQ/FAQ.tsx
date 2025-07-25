"use client";
import Image from "next/image";
import { useState, useCallback, KeyboardEvent } from "react";
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

  const toggleItem = useCallback((id: number) => {
    if (openItem === id) {
      // Keep item open - don't allow closing the active accordion
    } else {
      setOpenItem(id); // Open new accordion
    }
  }, [openItem]);

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLButtonElement>, id: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleItem(id);
    }
  }, [toggleItem]);

  const faqClasses = className ? `faq ${className}` : "faq";

  return (
    <div className={faqClasses}>
      {/* Container */}
      <div className="faq__container">
        {/* Title & Subtitle */}
        <div className="faq__header">
          {/* Subtitle */}
          <span className="faq__subtitle">
            پر تکرارترین سؤالاتی که پرسیدید
          </span>
          {/* Title */}
          <h2 className="faq__title">
            سؤالات
            <span className="faq__title-highlight"> متداول </span>
          </h2>
        </div>

        {/* Accordion & Image */}
        <div className="faq__layout">
          {/* Image - Mobile First (Top on mobile/tablet) */}
          <div className="faq__image-section">
            <div className="faq__image-container">
              <Image 
                src="/images/faqPic.webp" 
                alt="مرد در حال فکر - بخش سؤالات متداول"
                width={392}
                height={459}
                className="object-cover w-full h-full"
                priority={true}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 392px"
              />
            </div>
          </div>
          {/* Accordion */}
          <div className="faq__accordion-section">
            <div className="faq__accordion-list" role="tablist" aria-label="سؤالات متداول">
              {items.map((item) => {
                const isActive = openItem === item.id;
                
                return (
                  <div
                    key={item.id}
                    className={`faq__item ${isActive ? "faq__item--active" : ""}`}
                  >
                    <div className="faq__item-container">
                      {/* Header */}
                      <button
                        onClick={() => toggleItem(item.id)}
                        onKeyDown={(e) => handleKeyDown(e, item.id)}
                        className="faq__question"
                        role="tab"
                        aria-expanded={isActive}
                        aria-controls={`faq-panel-${item.id}`}
                        id={`faq-tab-${item.id}`}
                        tabIndex={0}
                      >
                        {/* Icon */}
                        <div className="faq__icon-container" aria-hidden="true">
                          {isActive ? (
                            <IconMinusSquare width={20} height={20} className={`text-primary sm:w-6 sm:h-6 faq__icon faq__icon--rotated`} />
                          ) : (
                            <IconAddSquare width={20} height={20} className="text-primary sm:w-6 sm:h-6 faq__icon" />
                          )}
                        </div>
                        {/* Title */}
                        <h6 className="faq__question-title">
                          {item.question}
                        </h6>
                      </button>
                      {/* Body */}
                      <div
                        className={`faq__content ${isActive ? "faq__content--expanded" : ""}`}
                        role="tabpanel"
                        id={`faq-panel-${item.id}`}
                        aria-labelledby={`faq-tab-${item.id}`}
                        hidden={!isActive}
                      >
                        {/* Text */}
                        <div className="faq__answer">
                          <p className="faq__answer-text">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};