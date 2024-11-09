import Image from "next/image";
import { Button } from "../button";
import { CarCartProps } from "./CarCart.types";

export const CarCart: React.FC<CarCartProps> = ({ image }: CarCartProps) => {
  return (
    <div className="car-cart bg-white col-span-4 border border-neutral-g2 rounded-2xl p-4">
      {/* container */}
      <div>
        {/* Image */}
        <div className="relative overflow-hidden h-[14.0625rem] border border-neutral-g1 rounded-xl mb-2">
          <span className="absolute left-2 top-2 z-10 text-white bg-primary-shade-3 py-0.5 px-1.5 inline-block rounded-lg font-[500] text-base">
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
          <h6 className="font-[700] text-base  mb-2">اجاره بنز E350 سدان</h6>
          <div className="flex items-center gap-[3px] font-[400] text-xs ">
            <span className=" text-neutral-g6">مدل:</span>
            <span className="text-neutral-g9">2016</span>
          </div>
        </div>
        {/* Price Box */}
        <div className="flex flex-col gap-2 mb-3">
          {/* Box 1 */}
          <div className="flex items-center justify-between bg-neutral-1 rounded-lg p-2">
            <div className="flex items-center gap-2">
              <span className="font-[500] text-xs  text-neutral-11">
                از ۱ تا 30 روز:
              </span>
              <span className="font-[700] text-base text-primary">
                8,500,000
              </span>
            </div>
            <span className="font-[500] text-xs  text-neutral-g9">روزانه</span>
          </div>
          {/* Box 2 */}
          <div className="flex items-center justify-between bg-neutral-1 rounded-lg p-2">
            <div className="flex items-center gap-2">
              <span className="font-[500] text-xs  text-neutral-11">
                از ۱ تا 30 روز:
              </span>
              <span className="font-[700] text-base text-primary">
                8,500,000
              </span>
            </div>
            <span className="font-[500] text-xs  text-neutral-g9">ماهانه</span>
          </div>
        </div>
        {/* Guarantee Amount */}
        <div className="flex items-center justify-between border-t border-neutral-g2 py-2  text-neutral-g11">
          <span className="font-[500] text-xs">مبلغ ضمانت:</span>
          <p className="font-[700] text-xs ">
            <span>80</span> میلیون تومان
          </p>
        </div>
        {/* Reservation Btn */}
        <Button variant="primary" className="font-[600] text-sm w-full ">
          درخواست رزرو
        </Button>
      </div>
    </div>
  );
};
