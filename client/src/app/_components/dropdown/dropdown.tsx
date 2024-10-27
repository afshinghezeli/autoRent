"use client";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { Button } from "../button";
import { IconArrowDown, IconTickCircle } from "../icons";
import { DropdownProps } from "./dropdown.interfaces";

export const Dropdown: React.FC<DropdownProps> = ({
  onItemSelected,
  btnStyle = true,
  listItems,
  placeholder = "یک گزینه را انتخاب کنید",
  btnIcon,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState<null | string>(null);
  const ref = useRef<HTMLDivElement>(null);
  const itemClasses = classNames("dropdown-item");
  const dropdownClasses = classNames(className, "dropdown");
  const buttonClasses = classNames(
    "dropdown-btn",
    { "dropdown-btn-style": btnStyle },
    { "dropdown-btn-noStyle": !btnStyle }
  );
  const listClasses = classNames(
    "dropdown-list",
    { "max-h-0 opacity-0": !isOpen },
    { "max-h-44 opacity-100": isOpen }
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={dropdownClasses} ref={ref}>
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        className={buttonClasses}
      >
        <span>{itemSelected ? itemSelected : placeholder}</span>
        <span>
          {btnIcon ? btnIcon : <IconArrowDown width={14} height={14} />}
        </span>
      </Button>
      <ul className={listClasses} role="listbox">
        {listItems.map((item, index) => (
          <li
            // TODO: add role:Option
            onClick={() => {
              setItemSelected(item);
              onItemSelected(item);
              setIsOpen(!isOpen);
            }}
            key={index}
            className={itemClasses}
          >
            <span>{item}</span>
            {itemSelected == item && (
              <IconTickCircle
                width={20}
                height={20}
                className="mr-auto"
                fill="none"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
