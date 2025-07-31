import Image from "next/image";
import { Button } from "../button";
import { CarCartProps } from "./CarCart.types";

export const CarCart: React.FC<CarCartProps> = ({ image }: CarCartProps) => {
  return (
    <div className="car-cart bg-white col-span-4 border border-neutral-2 rounded-2xl p-4">
      {/* container */}
      <div>
        {/* Image */}
        <div className="relative overflow-hidden h-56 border border-neutral-1 rounded-xl mb-2">
          <span className="absolute left-2 top-2 z-10 text-white bg-primary-shade-3 py-0.5 px-1.5 inline-block rounded-lg font-medium text-base">
            ٪<span>20</span>
          </span>
          <Image
            className="object-contain w-full"
            src={image}
            alt="car pic"
            layout="fill"
          />
        </div>
        {/* Name & Model */}
        <div className="mb-2">
          <h6 className="font-bold text-base  mb-2">اجاره بنز E350 سدان</h6>
          <div className="flex items-center gap-1 font-regular text-xs ">
            <span className=" text-neutral-6">مدل:</span>
            <span className="text-neutral-9">2016</span>
          </div>
        </div>
        {/* Price Box */}
        <div className="flex flex-col gap-2 mb-3">
          {/* Box 1 */}
          <div className="flex items-center justify-between bg-neutral-1 rounded-lg p-2">
            <div className="flex items-center gap-2">
              <span className="font-medium text-xs  text-neutral-11">
                از ۱ تا 30 روز:
              </span>
              <span className="font-bold text-base text-primary">
                8,500,000
              </span>
            </div>
            <span className="font-medium text-xs  text-neutral-9">روزانه</span>
          </div>
          {/* Box 2 */}
          <div className="flex items-center justify-between bg-neutral-1 rounded-lg p-2">
            <div className="flex items-center gap-2">
              <span className="font-medium text-xs  text-neutral-11">
                از ۱ تا 30 روز:
              </span>
              <span className="font-bold text-base text-primary">
                8,500,000
              </span>
            </div>
            <span className="font-medium text-xs  text-neutral-9">ماهانه</span>
          </div>
        </div>
        {/* Guarantee Amount */}
        <div className="flex items-center justify-between border-t border-neutral-2 py-2  text-neutral-11">
          <span className="font-medium text-xs">مبلغ ضمانت:</span>
          <p className="font-bold text-xs ">
            <span>80</span> میلیون تومان
          </p>
        </div>
        {/* Reservation Btn */}
        <Button variant="primary" className="font-semibold text-sm w-full ">
          درخواست رزرو
        </Button>
      </div>
    </div>
  );
};
