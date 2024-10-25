import classNames from "classnames";

export type Props = {
  className?: string;
  repeatedText?: string;
  repeatCount?: number;
  uniqueItems?: React.ReactNode[];
  divider?: boolean;
  dir?: "rtl" | "ltr";
};

export const InfiniteScroll: React.FC<Props> = ({
  className = "",
  repeatedText = "repeated text",
  repeatCount = 0,
  uniqueItems = [],
  divider = false,
  dir = "rtl",
}: Props) => {
  const classes = classNames({
    "animate-infinite-scroll": dir == "ltr",
    "animate-infinite-scroll-reverse": dir == "rtl",
  });
  const direction = classNames({
    "direction-ltr": dir == "ltr",
  });
  const dividerClasses = classNames({
    "infinite-Scroll__item--divider": divider,
  });
  const repeatedItems = Array(repeatCount).fill(repeatedText);
  const allItems = [...repeatedItems, ...uniqueItems];

  return (
    <div className={`infinite-Scroll ${className} ${direction}`}>
      <ul className={`infinite-Scroll__list ${classes}`}>
        {allItems.map((item, index) => (
          <li key={index} className={`infinite-Scroll__item ${dividerClasses}`}>
            {item}
          </li>
        ))}
      </ul>
      <ul className={`infinite-Scroll__list ${classes}`} aria-hidden="true">
        {allItems.map((item, index) => (
          <li key={index} className={`infinite-Scroll__item ${dividerClasses}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
