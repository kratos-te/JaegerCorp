"use client"
import { FC, useState } from "react";
import { SelectIcon, UnselectIcon } from "./SvgIcon";
import { SELECT_LIST } from "@/config";

interface SelectType {
    title: string;
    select: boolean;
    changeCheckBox : any;
}

const SelectBox:FC<SelectType> = ({title, select, changeCheckBox}) => {

    const [isSelect, setIsSelect] = useState<boolean>(select)

    const handleSelect = () => {
        let index = 0;
        for(let i = 0; i < SELECT_LIST.length;i++) {
            if(SELECT_LIST[i].title == title) {
                index = i; break;
            }
        }
        changeCheckBox(index);
        setIsSelect(!isSelect)
    }
    return (
        <div className={`flex items-center justify-between px-[16px] py-[8px] rounded-[12px] border-[1px]  ${isSelect ? "border-[#FFB547]": "border-[#363A3D]"}`}  onClick={handleSelect}>
            <div className="flex flex-col ">
                <p className="text-[16px] font-semibold text-white">{title}</p>
                <p className="text-[12px] font-semibold text-[#686B6E]">+0.17 SOL</p>
            </div>
            {isSelect ? <SelectIcon />  : <UnselectIcon />}
        </div>
    )
}

export default SelectBox 