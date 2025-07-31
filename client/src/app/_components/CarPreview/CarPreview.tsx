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
    <div className="container mb-12">
        {/* Header, title & subtitle */}
        <div className="text-center">
          <span className="font-light text-2xl leading-180 mb-2 block"> {/* Changed font-[200] to font-light, added block */}
            مشاهده موجودی خودروها
          </span>
          <h2 className="font-bold text-3.5xl leading-180 text-neutral-10 mb-4"> {/* Updated font weight and text size, fixed color */}
            رزرو خودرو در{" "}
            <span className="text-secondary-shade-1">اُتـــورِنت</span>
          </h2>
        </div>
        {/* Tabs & see more */}
        <div className="relative mb-6">
          {/* Tabs */}
          <div className="flex gap-2 items-center justify-center">
            <Button variant="primary" className="py-3 px-10 leading-140"> {/* Changed py-[11.5px] to py-3 (12px) */}
              پرطرفدار
            </Button>
            <Button variant="primary" isOutline={true} className="py-3 px-10 leading-140"> {/* Changed py-[11.5px] to py-3 (12px) */}
              لوکس
            </Button>
            <Button variant="primary" isOutline={true} className="py-3 px-10 leading-140"> {/* Changed py-[11.5px] to py-3 (12px) */}
              اقتصادی
            </Button>
          </div>
          {/* See more */}
          <div className="flex items-center gap-2 py-2 px-6 text-primary font-semibold text-lg leading-180 absolute left-0 top-0 bottom-0"> {/* Changed px-[27px] to px-6 (24px) and font-[600] to font-semibold */}
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
  );
};
