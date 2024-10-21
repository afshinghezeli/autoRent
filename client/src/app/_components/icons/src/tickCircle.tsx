import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon as SvgIconType } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props: SvgIconType) {
    return (
        <BaseIcon {...props}>
            <path d="M11 21c5.5 0 10-4.5 10-10S16.5 1 11 1 1 5.5 1 11s4.5 10 10 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="m6.75 11 2.83 2.83 5.67-5.66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </BaseIcon>
    )
}