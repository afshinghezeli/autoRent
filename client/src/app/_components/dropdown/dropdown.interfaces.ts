import { JSX } from "react";
import { ComponentBase } from "../types/component-base.type";

export type DropdownProps = ComponentBase & {
  btnIcon?: JSX.Element;
  placeholder?: string;
  listItems: string[];
  btnStyle?: boolean;
  onItemSelected: (selectedItem: string) => void;
};
