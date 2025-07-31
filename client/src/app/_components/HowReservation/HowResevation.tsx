import Image from "next/image";
import React from "react";
import { IconCalendarTick, IconCar, IconCards, IconKey } from "../icons";

export const HowReservation: React.FC = () => {
  return (
    <div className="container mb-[3.5rem]">
        {/* Title & Subtitle */}
        <div className="text-center mb-[89px]">
          <span className="font-regular text-neutral-8 text-2xl mb-2">
            چگونه در وبسایت
          </span>
          <h2 className="font-bold text-[2rem] text-neutral-10 mb-4">
            <span className="text-secondary-shade-1"> اُتـــورِنت، </span>
            خودرو رزرو کنیم؟{" "}
          </h2>
        </div>
        {/* Content */}
        <div className="grid grid-cols-3  ">
          {/* Feature One & Three */}
          <div className="col-span-1 flex justify-start">
            <div className="flex flex-col justify-between">
              {/* Box 1 */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-[52px] h-20 absolute -z-10 -left-[32%] -top-full">
                    <Image
                      src="/images/number/1.png"
                      alt=""
                      width={40}
                      height={109}
                    />
                  </div>
                  <div className="p-4 bg-white border border-neutral-g2 rounded-2xl">
                    <IconCar width={48} height={48} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-2xl mb-2">
                    <span className="text-secondary-shade-1">خودروی</span> خود را
                    انتخاب کنید.
                  </h4>
                  <p className="flex flex-col font-medium text-base text-neutral-8 w-[258px]">
                    خودروی مورد نظر خود را، متناسب با درخواست خود انتخاب کنید.
                  </p>
                </div>
              </div>
              {/* Box 3 */}
              <div className="flex items-center gap-4 mb-[254px]">
                <div className="relative">
                  <div className="absolute -z-10 -left-[20%] -top-[95%]">
                    <Image
                      src="/images/number/3.png"
                      alt=""
                      width={100}
                      height={110}
                    />
                  </div>
                  <div className="p-4 bg-white border border-neutral-g2 rounded-2xl">
                    <IconCards width={48} height={48} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-2xl leading-140 mb-2">
                    <span className="text-secondary-shade-1">هزینه</span> اجاره
                    را پرداخت کنید.
                  </h4>
                  <p className="flex flex-col font-medium text-base text-neutral-8 w-[258px]">
                    می توانید از طریق کیف پول آنلاین یا کارت های عضو شبکه شتاب
                    هزینه اجاره را پرداخت کنید.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="col-span-1">
            {" "}
            <Image
              className="w-[392px]"
              src="/images/howReserve.webp"
              alt="pic"
              width={392}
              height={893}
            />
          </div>
          {/* Feature Two & Four */}
          <div className="col-span-1 flex justify-end">
            <div className="flex flex-col justify-between">
              {/* Box 2 */}
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-bold text-2xl  mb-2">
                    <span className="text-secondary-shade-1">تاریخ</span> تحویل
                    را تعیین کنید.
                  </h4>
                  <p className="flex flex-col font-medium text-base text-neutral-8 w-[258px]">
                    تاریخ موردنظر خود را از تقویم، انتخاب و رزرو کنید
                  </p>
                </div>
                <div className="relative">
                  <div className="w-[90px] h-20 absolute -z-10 -left-[32%] -top-full">
                    <Image
                      src="/images/number/2.png"
                      alt=""
                      width={78}
                      height={109}
                    />
                  </div>
                  <div className="p-4 bg-white border border-neutral-g2 rounded-2xl">
                    <IconCalendarTick width={48} height={48} />
                  </div>
                </div>
              </div>
              {/* Box 4 */}
              <div className="flex items-center gap-4 mb-[254px]">
                <div>
                  <h4 className="font-bold text-2xl  mb-2">
                    <span className="text-secondary-shade-1">خودرو</span> را
                    دریافت کنید.
                  </h4>
                  <p className="flex flex-col font-medium text-base text-neutral-8 w-[259px]">
                    در زمان و مکان تعیین شده، خودروی خود را دریافت کنید.
                  </p>
                </div>
                <div className="relative">
                  <div className="w-[92px] h-20 absolute -z-10 -left-[32%] -top-full">
                    <Image
                      src="/images/number/4.png"
                      alt=""
                      width={82}
                      height={110}
                    />
                  </div>
                  <div className="p-4 bg-white border border-neutral-g2 rounded-2xl">
                    <IconKey width={48} height={48} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
