import { JSX } from "react";
import { componentBase } from "../types/component-base.type";

export type DropdownProps = componentBase & {
  btnIcon?: JSX.Element;
  placeholder?: string;
  listItems: string[];
  btnStyle?: boolean;
  onItemSelected: (selectedItem: string) => void;
}
