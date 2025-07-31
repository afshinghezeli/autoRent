import { IconBox, IconSupport24, IconWalletMinus } from "../icons";

function WhyUs() {
  return (
    <div className="container mb-12">
      <div className="relative pb-[48px]">
        <div className="absolute -z-10 right-0 left-0 h-[292px] why-us-bg bg-no-repeat bg-cover rounded-2xl"></div>
        {/* Header */}
        <div className="why-us__header text-center w-[69%] mx-auto pt-6">
          <h2 className="font-bold leading-180 text-secondary text-2xl mb-2">
            چــــــرا اُتو رِنت؟
          </h2>
          <p className="font-regular text-lg leading-180 text-white text-justify text-align-end">
            اجاره خودرو از یک شرکت اجاره خودرو با سابقه به شما کمک می‌کند تا در
            مسافرت ها، قرار ملاقات‌ های مهم، مجالس و مراسم‌های خانوادگی ماشین
            مناسب خود را در اختیار داشته باشید. اگر شما اصلا خودرویی در اختیار
            ندارید یا خودروی شما مطمئن نیست، می‌توانید از سوییچ، خودروی مناسب
            خود را کرایه کرده و با آسودگی به سفر بروید.
          </p>
        </div>
        {/* Features */}
        <div className="why-us__features flex flex-wrap items-center gap-10 justify-center mt-[39px]">
          {/* Feature */}
          <div className="flex gap-2 flex-col items-center justify-center w-[312px] h-[186px] py-4 px-6 bg-white border border-neutral-g2 rounded-2xl">
            {/* Icon */}
            <div className="p-[15px] border border-secondary-shade3 rounded-xl">
              <IconBox color="#194BF0" width={43} height={43} />
            </div>
            {/* Title */}
            <h6 className="font-bold text-base leading-140 text-[#414141]">
              تحویل در محل
            </h6>
            {/* Subtitle */}
            <div className="font-regular text-xs leading-180 text-center">
              <p>تحویل خودرو در زمان و مکان تعیین شده توسط شما</p>
              <p>خواهد بود.</p>
            </div>
          </div>
          {/* Feature */}
          <div className="flex gap-2 flex-col items-center justify-center w-[312px] h-[186px] py-4 px-6 bg-white border border-neutral-g2 rounded-2xl">
            {/* Icon */}
            <div className="p-[15px] border border-secondary-shade3 rounded-xl">
              <IconSupport24 color="#194BF0" width={43} height={43} />
            </div>
            {/* Title */}
            <h6 className="font-bold text-base leading-140 text-[#414141]">
              پشتیبانی 24 ساعته
            </h6>
            {/* Subtitle */}
            <div className="font-regular text-xs leading-180 text-center">
              <p>کارشناسان ما در هر زمان و مکان، پاسخگوی سوالات</p>
              <p>شما خواهند بود.</p>
            </div>
          </div>
          {/* Feature */}
          <div className="flex gap-2 flex-col items-center justify-center w-[312px] h-[186px] py-4 px-6 bg-white border border-neutral-g2 rounded-2xl">
            {/* Icon */}
            <div className="p-[15px] border border-secondary-shade3 rounded-xl">
              <IconWalletMinus color="#194BF0" width={43} height={43} />
            </div>
            {/* Title */}
            <h6 className="font-bold text-base leading-140 text-[#414141]">
              قیمت مناسب
            </h6>
            {/* Subtitle */}
            <div className="font-regular text-xs leading-180 text-center">
              <p>هدف ما، ارائه بهترین خدمات با مناسب ترین قیمت</p>
              <p>ممکن است.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
