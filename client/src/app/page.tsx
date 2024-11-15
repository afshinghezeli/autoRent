import Image from "next/image";
import { AdvancedSearch } from "./_components/advancedSearch/advancedSearch";
import { Button } from "./_components/button";
import { IconCar } from "./_components/icons";
import { InfiniteScroll } from "./_components/InfiniteScroll";
import WhyUs from "./_components/whyUs/whyUs";
import { CarCategory } from "./_components/CarCategory";
import { CarsPreview } from "./_components/CarPreview";
import { HowReservation } from "./_components/HowReservation";

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
      <section className="hero">
        <div className="hero__wrapper">
          <div className="hero__content">
            <p className="hero__title">
              اُتـــو رِنت؛ سریع،
              <br />
              آسان و به صرفه
            </p>
            <p className="hero__text">
              سرویس دهنده رزرو خودرو در ایران در کمترین زمان ممکن!
            </p>
            <div className="hero__buttons">
              <Button variant="secondary">
                <IconCar className="text-neutral-9" />
                رزرو آسان خودرو
              </Button>
              <Button variant="ghost" isOutline={true}>
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
        <WhyUs />
      </section>
      <section className="car-category">
        <CarCategory/>
      </section>
      <section className="car-preview">
        <CarsPreview/>
      </section>
      <section className="how-reservation">
        <HowReservation/>
      </section>
    </>
  );
}
