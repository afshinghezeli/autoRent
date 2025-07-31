import { navigationMenuItem } from "@/types/navigationMenuItem";
import {
  IconBriefcase,
  IconCallCalling,
  IconCar,
  IconDocumentText,
  IconService,
} from "../icons";

export const menuItems: navigationMenuItem[] = [
  {
    title: "Booking",
    href: "/cars",
    icon: <IconCar width={20} height={20}/>,
  },
  {
    title: "Services",
    href: "/",
    icon: <IconService fill="none" width={20} height={20}/>,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: <IconDocumentText fill="none" width={20} height={20}/>,
  },
  {
    title: "About Us",
    href: "/about",
    icon: <IconBriefcase fill="none" width={20} height={20}/>,
  },
  {
    title: "Contact Us",
    href: "/contact",
    icon: <IconCallCalling width={20} height={20}/>,
  },
];
