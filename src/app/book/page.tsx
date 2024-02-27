"use client";
import InputBox from "@/components/InputBox";
import SelectBox from "@/components/SelectBox";
import SetRaiders from "@/components/SetRaiders";
import { FeelIcon } from "@/components/SvgIcon";
import { SELECT_LIST } from "@/config";
import MainLayout from "@/layouts/mainLayout";

export default function Book() {
  return (
    <MainLayout>
      <main className="flex justify-center w-full min-h-screen  bg-black px-[200px] py-8 max-lg:px-[24px] max-sm:px-[0px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[8px] max-sm:px-[24px]">
              <p
                className="text-[32px] font-bold
                              text-white"
              >
                Book A Raid
              </p>
              <p className="text-[16px] font-medium text-[#9B9C9E]">
                Submit the information below to create a new raid
              </p>
            </div>
            <div className="flex items-center justify-center rounded-[12px] bg-[#FFB547] text-[16px] font-semibold px-[48px] py-[16px] cursor-pointer max-xs:hidden">
              Book Raids
            </div>
          </div>
          <div className="flex flex-col gap-[24px] p-[24px] bg-glass-modal bg-opacity-96 bg-[#1A1D21] rounded-[12px] max-xs:hidden">
            <InputBox title="Project Name" content="Alpha project" />
            <div className="flex gap-[24px]">
              <InputBox title="Your Discord ID" content="sample#1239" />
              <SetRaiders title="Number of Raiders" raiders={25} />
            </div>
          </div>
          <div className="flex flex-col gap-[24px] p-[24px] bg-glass-modal bg-opacity-96 bg-[#1A1D21] rounded-[12px] xs:hidden">
            <InputBox title="Project Name" content="Alpha project" />
            <InputBox title="Your Discord ID" content="sample#1239" />
              <SetRaiders title="Number of Raiders" raiders={25} />
          </div>
          <div className="flex flex-col gap-[16px] p-[24px] bg-glass-modal bg-opacity-96 bg-[#1A1D21] rounded-[12px]">
            <div className="text-[16px] font-medium text-white">
              Raid Requirements
            </div>
            <div
              className="grid w-full gap-[12px] max-xs:hidden"
              style={{
                gridTemplateColumns: `repeat(4, minmax(0, 1fr))`,
              }}
            >
              {SELECT_LIST.map((item, key) => (
                <SelectBox key={key} title={item.title} select={item.select} />
              ))}
            </div>
            <div className="flex flex-col gap-[8px] xs:hidden">
            {SELECT_LIST.map((item, key) => (
                <SelectBox key={key} title={item.title} select={item.select} />
              ))}
            </div>
            <p className="text-[12px] font-semibold text-[#686B6E]">
              Have your X post raided. Get likes, reposts, comments and more.
            </p>
          </div>
          <div className="flex flex-col gap-[16px] p-[24px] bg-glass-modal bg-opacity-96 bg-[#1A1D21] rounded-[12px]">
            <InputBox
              title="Raid URL"
              content="https://twitter.com/alphaproject/status/1092308y1232198"
            />
            <div className="flex gap-[12px]">
              <FeelIcon />
              <p className="text-[12px] font-semibold text-[#686B6E]">
                For custom raids specify your profile url or a relevant post
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-[12px] bg-[#FFB547] text-[16px] font-semibold mx-auto px-[48px] py-[16px] cursor-pointer xs:hidden">
              Book Raids
            </div>
        </div>
      </main>
    </MainLayout>
  );
}
