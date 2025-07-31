"use client";
import Link from "next/link";
import { Dropdown } from "../dropdown";
import { Button } from "../button";
import {
  IconArrowCircleLeft,
  IconCalendar,
  IconClock,
  IconSearchNormal,
} from "../icons";

const locations = [
  "مشهد - فرودگاه هاشمی نژاد",
  "تهران - فرودگاه امام خمینی",
  "شیراز - فرودگاه امام خمینی",
  "کرج - فرودگاه امام خمینی",
  "رامسر - فرودگاه امام خمینی",
  "رشت - فرودگاه امام خمینی",
  "قزوین - فرودگاه امام خمینی",
  "خوزستان - فرودگاه امام خمینی",
  "ارومیه - فرودگاه امام خمینی",
  "تبریز - فرودگاه امام خمینی",
];
const date = ["1403/12/02"];
const time = ["7:00", "8:00", "9:00"];

export const AdvancedSearch: React.FC = () => {
  const handleItemSelected = (item: string) => {
    console.log(item);
  };
  return (
    <div className="container">
      <div className="p-2 xs:p-6 -mt-14 md:-mt-24 bg-white border border-neutral-2 rounded-2xl">
        <div className="flex items-center justify-between flex-wrap mb-4 md:mb-14">
          <div className="flex gap-2 items-center justify-around xs:justify-normal text-xs xs:text-sm">
            <button className="font-semibold leading-180 py-2 px-3 bg-primary rounded-full border border-neutral-2 text-white">
              خودرو با راننده
            </button>
            <button className="font-semibold leading-180 py-2 px-3 rounded-full border border-neutral-2">
              خودرو بی راننده
            </button>
            <button className="font-semibold leading-180 py-2 px-3 rounded-full border border-neutral-2">
              ماشین عروسی
            </button>
          </div>
          <div className="mt-2 pr-2 ">
            <Link href="#" className="font-medium text-sm text-primary ">
              اطلاعات بیشتر در مورد رزرو خودرو
            </Link>
          </div>
        </div>
        <div className="font-[400] text-base text-black border rounded-2xl pr-[14px] hidden lg:block">
          <div className="flex items-center font-[400] w-full">
            <div className="relative grow">
              <div className="flex gap-1 items-center absolute -top-12">
                <IconArrowCircleLeft width={16} color="black" />
                <p className="font-[400] text-sm leading-180">
                  محل تحویل خودرو
                </p>
              </div>
              <div className="relative transition-all cursor-pointer outline-none">
                <Dropdown
                  placeholder={locations[0]}
                  listItems={locations}
                  onItemSelected={handleItemSelected}
                  btnStyle={false}
                />
              </div>
            </div>

            <div className="w-[1px] h-6 bg-neutral-2 mx-3" />
            <div className="relative w-[111px]">
              <div className="flex gap-1 items-center absolute -top-12">
                <IconArrowCircleLeft width={16} color="black" />
                <p className="font-[400] text-sm leading-180">تاریخ تحویل</p>
              </div>
              <div className="flex items-center text-black">
                <Dropdown
                  btnIcon={
                    <IconCalendar
                      width={20}
                      height={20}
                      className="text-neutral-7"
                    />
                  }
                  placeholder="1403٫02٫10"
                  listItems={date}
                  onItemSelected={handleItemSelected}
                  btnStyle={false}
                />
              </div>
            </div>
            <div className="w-[1px] h-6 bg-neutral-2 mx-3" />
            <div className="relative w-[106px]">
              <div className="flex gap-1 items-center absolute -top-12">
                <IconArrowCircleLeft width={16} color="black" />
                <p className="font-[400] text-sm leading-180">ساعت تحویل</p>
              </div>
              <div className="flex items-center text-black">
                <Dropdown
                  btnIcon={
                    <IconClock
                      width={20}
                      height={20}
                      className="text-neutral-7"
                    />
                  }
                  placeholder="07:00"
                  listItems={time}
                  onItemSelected={handleItemSelected}
                  btnStyle={false}
                />
              </div>
            </div>
            <div className="w-[1px] h-6 bg-neutral-2 mx-3" />
            <div className="relative w-[111px]">
              <div className="flex gap-1 items-center absolute -top-12">
                <IconArrowCircleLeft width={16} color="black" />
                <p className="font-[400] text-sm leading-180">تاریخ تحویل</p>
              </div>
              <div className="flex items-center text-black">
                <Dropdown
                  btnIcon={
                    <IconCalendar
                      width={20}
                      height={20}
                      className="text-neutral-7"
                    />
                  }
                  placeholder="1403٫02٫10"
                  listItems={date}
                  onItemSelected={handleItemSelected}
                  btnStyle={false}
                />
              </div>
            </div>
            <div className="w-[1px] h-6 bg-neutral-2 mx-3" />
            <div className="relative w-[106px]">
              <div className="flex gap-1 items-center absolute -top-12">
                <IconArrowCircleLeft width={16} color="black" />
                <p className="font-[400] text-sm leading-180">ساعت تحویل</p>
              </div>
              <div className="flex items-center text-black">
                <Dropdown
                  btnIcon={
                    <IconClock
                      width={20}
                      height={20}
                      className="text-neutral-7"
                    />
                  }
                  placeholder="07:00"
                  listItems={time}
                  onItemSelected={handleItemSelected}
                  btnStyle={false}
                />
              </div>
            </div>
            <Button className="p-4 bg-secondary rounded-2xl mr-12">
              <IconSearchNormal width={24} color="#212121" />
            </Button>
          </div>
        </div>
        <div className="lg:hidden">
        <div className="hidden lg:grid grid-cols-12 gap-3 mb-4 ">
            <span className="col-span-4 flex items-center gap-1">
              <IconArrowCircleLeft width={16} color="black" />
              <p className="font-[400] text-sm leading-180">
                تاریخ و ساعت تحویل خودرو
              </p>
            </span>
            <span className="col-span-2 flex items-center gap-1">
            <IconArrowCircleLeft width={16} color="black" />
              <p className="font-[400] text-sm leading-180">
                تاریخ تحویل
              </p>
            </span>
            <span className="col-span-2 flex items-center gap-1">
            <IconArrowCircleLeft width={16} color="black" />
              <p className="font-[400] text-sm leading-180">
                ساعت تحویل
              </p>
            </span>
            <span className="col-span-2 flex items-center gap-1">
            <IconArrowCircleLeft width={16} color="black" />
              <p className="font-[400] text-sm leading-180">
                تاریخ بازگشت
              </p>
            </span>
            <span className="col-span-2 flex items-center gap-1">
            <IconArrowCircleLeft width={16} color="black" />
              <p className="font-[400] text-sm leading-180">
                ساعت بازگشت
              </p>
            </span>
          </div>
          <div className="grid grid-cols-12 gap-3">
            <Dropdown
              listItems={locations}
              onItemSelected={handleItemSelected}
              className="col-span-12 lg:col-span-4"
            />
            <div className="col-span-12 flex gap-1 items-center lg:hidden">
              <IconArrowCircleLeft width={16} color="black" />
              <p className="font-[400] text-sm leading-180">
                تاریخ و ساعت تحویل خودرو
              </p>
            </div>
            <Dropdown
              listItems={locations}
              placeholder="1403٫02٫10"
              onItemSelected={handleItemSelected}
              className="col-span-6 lg:col-span-2"
            />
            <Dropdown
              listItems={locations}
              placeholder="07:00"
              onItemSelected={handleItemSelected}
              className="col-span-6 lg:col-span-2"
            />
            <div className="col-span-12 flex gap-1 items-center lg:hidden">
              <IconArrowCircleLeft width={16} color="black" />
              <p className="font-[400] text-sm leading-180">
                تاریخ و ساعت بازگشت خودرو
              </p>
            </div>
            <Dropdown
              listItems={locations}
              placeholder="1403٫02٫10"
              onItemSelected={handleItemSelected}
              className="col-span-6 lg:col-span-2"
            />
            <Dropdown
              listItems={locations}
              placeholder="07:00"
              onItemSelected={handleItemSelected}
              className="col-span-6 lg:col-span-2"
            />
            <Button variant="secondary" className="col-span-12">
              جستجو
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
