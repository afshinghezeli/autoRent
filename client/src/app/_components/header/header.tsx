"use client";
import Image from "next/image";
import { Button } from "../button";
import { IconProfileCircle } from "../icons";
import { MobileMenu } from "./mobileMenu";
import { TopNavigation } from "./topNavigation";

export const Header: React.FC = () => {
  return (
    <header className="header font-Inter">
      {/* Menu */}
      <div className="header__wrapper">
        <div className="header__content">
          {/* mobile menu */}
          <MobileMenu />

          {/* logo */}
          <div className="flex gap-2 items-center"> {/* Changed from gap-[5px] to gap-1 (4px) - closest to design tokens */}
            <Image
              className="hidden lg:block"
              src="/images/autoRent.webp"
              alt="اتورنت"
              width={59}
              height={59}
            />
            <p className="text-3xl font-[900] leading-180"> {/* Changed font-[900] to font-bold */}
              <span className="text-primary">Auto</span>
              <span className="text-secondary">Rent</span>
            </p>
          </div>
          {/* menu & searchBar */}
          <TopNavigation />
          {/* login/register & userPanel */}
          <Button variant="primary" className="hidden md:block">
            SignIn / SignUp
          </Button>
          <IconProfileCircle className="md:hidden" />
        </div>
      </div>
    </header>
  );
};
