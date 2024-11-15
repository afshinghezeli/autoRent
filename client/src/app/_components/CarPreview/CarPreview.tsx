import Link from "next/link";
import { CarCart } from "../CarCart";
import { IconArrowLeft } from "../icons";
import { Button } from "../button";

const carPic = [
  "/images/cars/benze350.webp",
  "/images/cars/bmw.webp",
  "/images/cars/genesis.webp",
  "/images/cars/hunda.webp",
  "/images/cars/landcruser.webp",
  "/images/cars/mazarati.webp",
];

export const CarsPreview: React.FC = () => {
  return (
    <div className="cars-preview">
      <div className="container mb-12">
        {/* Header, title & subtitle */}
        <div className="text-center">
          <span className="font-[200] text-2xl leading-180 mb-2">
            مشاهده موجودی خودروها
          </span>
          <h2 className="font-[800] text-[2rem] leading-180 text-neutral-g10 mb-4">
            رزرو خودرو در{" "}
            <span className="text-secondary-shade-1">اُتـــورِنت</span>
          </h2>
        </div>
        {/* Tabs & see more */}
        <div className="relative mb-6">
          {/* Tabs */}
          <div className="flex gap-2 items-center justify-center">
            <Button variant="primary" className="py-[11.5px] px-10 leading-140">
              پرطرفدار
            </Button>
            <Button variant="primary" isOutline={true} className="py-[11.5px] px-10 leading-140">
              لوکس
            </Button>
            <Button variant="primary" isOutline={true} className="py-[11.5px] px-10 leading-140">
              اقتصادی
            </Button>
          </div>
          {/* See more */}
          <div className="flex items-center gap-2 py-2 px-[27px] text-primary font-[600] text-lg leading-180 absolute left-0 top-0 bottom-0">
            <Link href="#">مشاهده همه</Link>
            <IconArrowLeft width={20} height={20} />
          </div>
        </div>
        {/* Cars Grid */}
        <div>
          {/* Grid cars */}
          <div className="grid grid-cols-12 gap-6">
            {/* Car Cart */}
            {carPic.map((image, index) => (
              <CarCart key={index} image={image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
