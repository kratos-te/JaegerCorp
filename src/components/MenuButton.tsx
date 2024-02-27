import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MeunProps {
    title: string
    link: string
    lightIcon: JSX.Element;
    darkIcon: JSX.Element
}

const MenuButton: FC<MeunProps> =({title, link, lightIcon, darkIcon}) => {

    const pathName = usePathname()
    return (
        <Link href={link} className="flex items-center gap-[16px]">
            {pathName === link ? lightIcon : darkIcon}
            <p className={`text-[20px] text-[#9B9C9E] hover:text-[#FFB547] ${pathName === link? "text-[#FFB547]" : ""}`}>{title}</p>
        </Link>
    )
}

export default MenuButton;