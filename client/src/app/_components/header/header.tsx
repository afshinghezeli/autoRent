"use client";
import Image from "next/image";
import { Button } from "../button";
import { IconProfileCircle } from "../icons";
import { MobileMenu } from "./mobileMenu";
import { TopNavigation } from "./topNavigation";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-center lg:absolute lg:right-0 lg:left-0">
      {/* Menu */}
      <div className="w-full header">
        <div className="flex items-center justify-between py-2 md:py-[18.5px] px-5 lg:px-8 bg-white lg:rounded-b-2xl">
          {/* mobile menu */}
          <MobileMenu />

          {/* logo */}
          <div className="flex gap-[5px] items-center">
            <Image
              className="hidden lg:block"
              src="/images/autoRent.webp"
              alt="اتورنت"
              width={59}
              height={59}
            />
            <p className="text-2xl font-[900] leading-180">
              <span className="text-primary">اُتــو</span>
              <span className="text-secondary">رِنت</span>
            </p>
          </div>
          {/* menu & searchBar */}
          <TopNavigation />
          {/* login/register & userPanel */}
          <Button variant="primary" className="hidden md:block">
            ورود / ثبت‌نام
          </Button>
          <IconProfileCircle className="md:hidden" />
        </div>
      </div>
    </header>
  );
};
