import Image from "next/image";

const carCategories = [
  { name: "کوپه", img: "/images/carCategory/kope.webp" },
  { name: "سدان", img: "/images/carCategory/kope.webp" },
  { name: "کروک", img: "/images/carCategory/kope.webp" },
  { name: "شاسی بلند", img: "/images/carCategory/kope.webp" },
  { name: "اسپرت", img: "/images/carCategory/kope.webp" },
];

export const CarCategory: React.FC = () => {
  return (
    <>
      <div className="car-category">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-5 gap-2 mb-12">
            {carCategories.map((category, index) => (
              <div
                key={index}
                className="relative col-span-1 overflow-hidden border bg-white border-gray-300 rounded-2xl cursor-pointer
                "
              >
                <div className="flex flex-col items-center">
                  <h4 className="mt-2 text-xl lg:text-2xl text-[#353535] font-[700]">
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
                <div className="absolute -bottom-[14px] right-0 left-0">
                  <div className=" max-w-[87%] h-[19px] mx-auto bg-[#FDB713] rounded-t-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
