import Image from "next/image";
import { AdvancedSearch } from "./_components/advancedSearch/advancedSearch";
import { Button } from "./_components/button";
import { IconCar } from "./_components/icons";
import { InfiniteScroll } from "./_components/InfiniteScroll";
import WhyUs from "./_components/whyUs/whyUs";

const brandsLogo = [
  { src: "/images/brands/landrover.png", alt: "Land Rover", height: 50 },
  { src: "/images/brands/jeep.png", alt: "Jeep", height: 50 },
  { src: "/images/brands/KIA.png", alt: "KIA", height: 50 },
  { src: "/images/brands/toyota.png", alt: "Toyota", height: 60 },
  { src: "/images/brands/nissan.png", alt: "Nissan", height: 60 },
  { src: "/images/brands/hunda.png", alt: "Hyundai", height: 60 },
  { src: "/images/brands/h.png", alt: "Honda", height: 60 },
  { src: "/images/brands/benz.png", alt: "Mercedes-Benz", height: 80 },
  { src: "/images/brands/lexus.png", alt: "Lexus", height: 70 },
  { src: "/images/brands/BMW.png", alt: "BMW", height: 80 },
];

export default function Home() {
  return (
    <>
      <section className="bg-primary-Tint-1 xs:bg-transparent xs:bg-hero-desktop h-[236px] bg-no-repeat bg-cover bg-[center_top] xs:aspect-[2/1] xs:h-auto flex justify-center 2xl:container 2xl:rounded-b-2xl lg:pt-24 xl:pt-0">
        <div className="container h-full flex mt-8 xs:mt-0 xs:items-center justify-center">
          <div className="w-full">
            <p className="font-[700] text-3.5xl  xs:text-4xl lg:text-[44px] text-white xs:text-secondary">
              اُتـــو رِنت؛ سریع،
              <br />
              آسان و به صرفه
            </p>
            <p className="font-[400] text-sm xs:text-base md:text-base lg:text-xl text-[#F9F9F9] xs:max-w-[250px] md:max-w-full mt-[7px]">
              سرویس دهنده رزرو خودرو در ایران در کمترین زمان ممکن!
            </p>
            <div className="hidden lg:flex gap-3">
              <Button
                variant="secondary"
                className="items-center text-black mt-6"
              >
                <IconCar className="text-neutral-9" />
                رزرو آسان خودرو
              </Button>
              <Button
                variant="ghost"
                isOutline={true}
                className="items-center text-black mt-6"
              >
                تماس با ما
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="advance-search">
        <AdvancedSearch />
      </section>
      <section className="brand">
        <InfiniteScroll
          repeatedText="سرویس دهنده رزرو خودرو در ایران در کمترین زمان ممکن"
          repeatCount={5}
          divider={true}
        />
        <InfiniteScroll
          dir="ltr"
          uniqueItems={brandsLogo.map((logo, index) => (
            <div key={index} className="mx-7">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={80}
                height={logo.height}
              />
            </div>
          ))}
        />
      </section>
      <section className="why-us">
        <WhyUs/>
      </section>
    </>
  );
}
