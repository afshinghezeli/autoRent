import Image from "next/image";
import { TopNavigation } from "./topNavigation";

export const Header: React.FC = () => {
  return (
    <header>
      {/* Menu */}
      <div className="container Menu absolute right-0 left-0">
        <div className="flex items-center justify-between py-[18.5px] px-8 bg-white rounded-b-2xl">
          {/* logo */}
          <div className="flex gap-[5px] items-center">
            <Image
              src="/images/logo.webp"
              alt="اتورنت"
              width={59}
              height={59}
              priority={true}
            />
            <p className="text-2xl font-EstedadBlack leading-180">
              <span className="text-primary">اُتــو</span>
              <span className="text-secondary">رِنت</span>
            </p>
          </div>
          {/* menu & searchBar */}
          <TopNavigation />
          {/* login/register & userPanel */}
          {/* <Link
            href="#"
            className="py-1.5 px-4 bg-primary font-EstedadMedium text-white text-base rounded-lg leading-180"
          >
            ورود / ثبت‌نام
          </Link> */}
        </div>
      </div>
    </header>
  );
};
