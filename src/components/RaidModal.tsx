"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import {
  CloseIcon,
  CommectIcon,
  DollarIcon,
  FeelIcon,
  LikeIcon,
  ShareIcon,
  TwitterIcon,
} from "./SvgIcon";
import { useModal } from "@/contexts/ModalContext";
import ClickAwayComponent from "./ClickAwayComponent";

const RaidModal: FC = () => {
  const { isOpenedRaid, closeRaidModal } = useModal();

  if (!isOpenedRaid) return null;

  return (
    <div
      className={`fixed z-50 w-full h-full min-h-screen top-0  bg-black/50 backdrop-blur-xl `}
    >
      <div className="w-full h-full flex justify-center items-center overflow-auto pt-[200px] max-md:pt-[100px]">
        <ClickAwayComponent
          className="flex flex-col gap-[24px] w-1/3 rounded-[16px]  bg-glass-modal bg-opacity-96 bg-[#1A1D21] p-[32px] shadow-custom max-lg:w-2/3 max-md:gap-[16px] max-md:p-[16px] max-sm:w-full max-sm:mx-[16px]"
          onClickAway={closeRaidModal}
        >
          <div className="flex justify-between items-center">
            <p className="text-[24px] font-semibold text-white max-md:text-[16px]">Raids View</p>
            <div className=" cursor-pointer" onClick={closeRaidModal}>
              <CloseIcon />
            </div>
          </div>
          <div className="flex flex-col gap-[24px] p-[16px] justify-center rounded-[16px] bg-[#171F2A] border-[1px] border-[#30373F]">
            <div className="flex gap-[14px]">
              <div className="w-[60px] max-xl:w-[30px]">
                <img
                  src={"/avatar/pfp.png"}
                  className="rounded-full"
                  alt="personal avatar"
                />
              </div>
              <div className="flex flex-col gap-[16px] w-[calc(100%-100px)] max-xl:w-[calc(100%-70px)]">
                <div className="flex gap-[5px]">
                  <p className="text-[20px] font-bold text-white max-xl:text-[14px]">
                    Bobur
                  </p>
                  <p className="text-[18px] font-normal text-white/60 max-xl:text-[12px]">
                    @bobur_mavlonov · Apr 1
                  </p>
                </div>
                <p className="text-[18px] font-normal text-white max-xl:text-[12px]">
                  A bo'pti maskamasman
                </p>
                <div className="flex flex-col gap-[12px]">
                  <img
                    src={"/img/avatar.png"}
                    className="rounded-[12px] w-fit h-fit"
                    alt="project image"
                  />
                  <div className="flex justify-between items-center border-b-[1px] border-[#536471] text-[16px] max-xld:text-[12px]">
                    <p className=" font-normal text-[#536471]">
                      8:10 PM - Feb 15, 2024
                    </p>
                    <FeelIcon />
                  </div>
                  <div className="flex gap-[24px] text-[16px] max-xld:text-[12px]">
                    <div className="flex items-center gap-[10px] max-xld:gap-[4px]">
                      <LikeIcon className="max-xld:w-[16px]"/>
                      <p className=" font-normal text-[#536471]">
                        399
                      </p>
                    </div>
                    <div className="flex items-center gap-[10px] max-xld:gap-[4px]">
                      <CommectIcon className="max-xld:w-[16px]"/>
                      <p className=" font-normal text-[#536471]">
                        Reply
                      </p>
                    </div>
                    <div className="flex items-center gap-[10px] max-xld:gap-[4px]">
                      <ShareIcon className="max-xld:w-[16px]"/>
                      <p className=" font-normal text-[#536471]">
                        Share
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[20px]">
                <TwitterIcon className="white" />
              </div>
            </div>

            <div className="flex w-full justify-center py-[10px] rounded-[10px] border-[2px] border-[#FFB547] cursor-pointer">
              <p className="text-[14px] font-semibold text-[#FFB547]">
                Read more on X
              </p>
            </div>
          </div>
          <div className="flex p-[24px] bg-black rounded-[12px] max-xld:hidden">
            <div className="flex items-center justify-start w-1/2">
              <div className="flex items-center gap-[8px]">
                <DollarIcon />
                <p className="text-[16px] font-medium text-white">Earn</p>
              </div>
            </div>
            <div className="flex gap-[48px] items-center">
              <div className="flex gap-[8px]">
                <p className="text-[16px] font-semibold text-[#FFB547]">
                  30,900
                </p>
                <p className="text-[16px] font-semibold text-[#9B9C9E]">
                  $Keager
                </p>
              </div>
              <div className="flex rounded-[10px] text-[14px] font-semibold bg-[#FFB547] text-black py-[10px] px-[46px] cursor-pointer">
                Like
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] p-[24px] bg-black rounded-[12px] xld:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[8px]">
                <DollarIcon />
                <p className="text-[16px] font-medium text-white">Earn</p>
              </div>
              <div className="flex gap-[8px]">
                <p className="text-[16px] font-semibold text-[#FFB547]">
                  30,900
                </p>
                <p className="text-[16px] font-semibold text-[#9B9C9E]">
                  $Keager
                </p>
              </div>
            </div>
            <div className="flex rounded-[10px] text-[14px] font-semibold bg-[#FFB547] text-black mx-auto py-[10px] px-[46px] cursor-pointer">
              Like
            </div>
          </div>
        </ClickAwayComponent>
      </div>
    </div>
  );
};

export default RaidModal;
