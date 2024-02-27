import { FC } from "react";
import { ArrowDown, SearchIcon } from "./SvgIcon";

const Filter: FC = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between py-[32px] max-lg:hidden">
        <div className="flex w-1/2 text-[32px] font-bold text-white max-xl:w-1/3">
          Raids
        </div>
        <div className="flex w-full gap-[16px] items-end  justify-end">
          <div className="flex w-1/2 gap-[10px] items-center rounded-[10px] px-[16px] py-[10px] bg-black max-xl:w-1/3">
            <SearchIcon />
            <input
              type="search"
              className="text-[14px] font-semibold text-[#9B9C9E] bg-transparent outline-none"
              placeholder="Search"
            ></input>
          </div>
          <div className="flex gap-[10px] items-center rounded-[10px] px-[16px] py-[10px] bg-[#13151D] border-[1px] border-[#23232C] cursor-pointer">
            <p className="text-[14px] font-semibold text-[#9B9C9E]">
              All Platform
            </p>
            <ArrowDown />
          </div>
          <div className="flex gap-[10px] items-center rounded-[10px] px-[16px] py-[10px] bg-[#13151D] border-[1px] border-[#23232C] cursor-pointer">
            <p className="text-[14px] font-semibold text-[#9B9C9E]">Newest</p>
            <ArrowDown />
          </div>
        </div>
      </div>
      <div className="py-[16px]">
        <div
          className="grid w-full gap-[16px] lg:hidden"
          style={{
            gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
          }}
        >
          {" "}
          <div className="flex text-[32px] font-bold text-white ">Raids</div>
          <div className="flex gap-[10px] items-center rounded-[10px] px-[16px] py-[10px] bg-[#13151D] border-[1px] border-[#23232C] cursor-pointer">
            <SearchIcon />
            <input
              type="search"
              className="text-[14px] w-full font-semibold text-[#9B9C9E] bg-transparent outline-none"
              placeholder="Search"
            ></input>
          </div>
          <div className="flex gap-[10px] items-center rounded-[10px] px-[16px] py-[10px] bg-[#13151D] border-[1px] border-[#23232C] cursor-pointer">
            <p className="text-[14px] font-semibold text-[#9B9C9E]">
              All Platform
            </p>
            <ArrowDown />
          </div>
          <div className="flex gap-[10px] items-center rounded-[10px] px-[16px] py-[10px] bg-[#13151D] border-[1px] border-[#23232C] cursor-pointer">
            <p className="text-[14px] font-semibold text-[#9B9C9E]">Newest</p>
            <ArrowDown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
