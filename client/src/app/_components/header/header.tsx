"use client";
import Image from "next/image";
import { Button } from "../button";
import { IconProfileCircle } from "../icons";
import { MobileMenu } from "./mobileMenu";
import { TopNavigation } from "./topNavigation";

export const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Menu */}
      <div className="header__wrapper">
        <div className="header__content">
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
