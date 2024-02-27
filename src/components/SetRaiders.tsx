import { FC, useState } from "react";
import { MinusIcon, PlusIcon } from "./SvgIcon";

interface RaidersType {
  title: string;
  raiders: number;
}

const SetRaiders: FC<RaidersType> = ({title, raiders}) => {
    const [raider, setRaider] = useState<number>(raiders)

    const handleMinus = () => {
        setRaider(raider - 1)
    }

    const handlePlus = () => {
        setRaider(raider + 1)
    }
  return (
    <div className="flex flex-col w-full gap-[16px]">
      <p className="text-[16px] font-medium text-white">{title}</p>
      <div className="flex justify-between rounded-[12px] px-[16px] py-[10px] bg-black border-[1px] border-[#363A3D]">
        <div className="cursor-pointer" onClick={handleMinus}>
        <MinusIcon />
        </div>
        <div className="flex text-[16px] font-medium text-white">{raider}</div>
        <div className="cursor-pointer" onClick={handlePlus}>
        <PlusIcon />
        </div>
        </div>
    </div>
  );
};

export default SetRaiders
