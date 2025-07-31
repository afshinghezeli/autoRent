import Image from "next/image";

const carCategories = [
  { name: "کوپه", img: "/images/carCategory/kope.webp" },
  { name: "سدان", img: "/images/carCategory/sedan.webp" },
  { name: "کروک", img: "/images/carCategory/krock.webp" },
  { name: "شاسی بلند", img: "/images/carCategory/highShasi.webp" },
  { name: "اسپرت", img: "/images/carCategory/sport.webp" },
];

export const CarCategory: React.FC = () => {
  return (
    <div className="container mb-12">
      <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-5 gap-2">
            {carCategories.map((category, index) => (
              <div
                key={index}
                className="relative col-span-1 overflow-hidden border bg-white border-neutral-2 rounded-2xl cursor-pointer hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-col items-center">
                  <h4 className="mt-2 text-xl lg:text-2xl text-neutral-10 font-bold">
                    {category.name}
                  </h4>
                  <div className="w-full h-auto">
                    <Image
                      src={category.img}
                      alt="kope"
                      width={232}
                      height={101}
                      className="w-full object-contain"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-3 right-0 left-0"> {/* Changed from -bottom-[14px] to -bottom-3 (12px) */}
                  <div className="max-w-[87%] h-5 mx-auto bg-secondary rounded-t-full"></div> {/* Updated to use design token secondary color and h-5 (20px) */}
                </div>
              </div>
            ))}
        </div>
    </div>
  );
};
