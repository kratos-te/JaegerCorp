"use client";
/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Image from "next/image";
import { useModal } from "@/contexts/ModalContext";

const Projects: FC = () => {
  const { openRaidModal } = useModal();
  return (
    <>
      <div className="grid grid-cols-3 gap-[32px] pb-[32px] max-lg:hidden">
        <div className="grid grid-cols-1 grid-rows-3 gap-[32px]">
          <div
            className="row-span-2 rounded-[32px] cursor-pointer"
            onClick={openRaidModal}
          >
            <img
              src={"/img/avatar.png"}
              className="w-full h-fit"
              alt="project"
            />
          </div>
          <div className="grid row-span-1 grid-cols-2 gap-[32px]">
            <div className="col-span-1 rounded-[32px] cursor-pointer">
              {" "}
              <img
                src={"/img/Avatar (1).png"}
                className="w-full h-fit"
                alt="project"
              />
            </div>
            <div className="grid col-span-1 rounded-[32px] cursor-pointer">
              {" "}
              <img
                src={"/img/Avatar (2).png"}
                className="w-full h-fit"
                alt="project"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 gap-[32px]">
          <div className="grid row-span-1 grid-cols-2 gap-[32px]">
            <div className="col-span-1 rounded-[32px] cursor-pointer">
              {" "}
              <img
                src={"/img/Avatar (4).png"}
                className="w-full h-fit"
                alt="project"
              />
            </div>
            <div className="grid col-span-1 rounded-[32px] cursor-pointer">
              {" "}
              <img
                src={"/img/Avatar (5).png"}
                className="w-full h-fit"
                alt="project"
              />
            </div>
          </div>
          <div className="grid row-span-1 grid-cols-2 gap-[32px]">
            <div className="col-span-1 rounded-[32px] cursor-pointer">
              {" "}
              <img
                src={"/img/Avatar (6).png"}
                className="w-full h-fit"
                alt="project"
              />
            </div>
            <div className="grid col-span-1 rounded-[32px] cursor-pointer">
              {" "}
              <img
                src={"/img/Avatar (7).png"}
                className="w-full h-fit"
                alt="project"
              />
            </div>
          </div>
          <div className="grid row-span-1 grid-cols-2 gap-[32px]">
            <div className="col-span-1 rounded-[32px] cursor-pointer">
              {" "}
              <img
                src={"/img/Avatar (8).png"}
                className="w-full h-fit"
                alt="project"
              />
            </div>
            <div className="grid col-span-1 rounded-[32px] cursor-pointer">
              {" "}
              <img
                src={"/img/Avatar (9).png"}
                className="w-full h-fit"
                alt="project"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 gap-[32px]">
          <div className="grid row-span-1 grid-cols-2 gap-[32px]">
            <div className="col-span-1 rounded-[32px] cursor-pointer">
              {" "}
              <img
                src={"/img/Avatar (10).png"}
                className="w-full h-fit"
                alt="project"
              />
            </div>
            <div className="grid col-span-1 rounded-[32px] cursor-pointer">
              {" "}
              <img
                src={"/img/Avatar (11).png"}
                className="w-full h-fit"
                alt="project"
              />
            </div>
          </div>
          <div className="row-span-2 rounded-[32px] cursor-pointer">
            <img
              src={"/img/Avatar (12).png"}
              className="w-full h-fit"
              alt="project"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[32px] pb-[32px] lg:hidden">
        <div className="grid col-span-2" onClick={openRaidModal}>
          <img src={"/img/avatar.png"} className="w-full h-fit" alt="project" />
        </div>
        <div className="grid gird-cols-1 gap-[32px]">
          <div className="grid row-span-1">
            <img
              src={"/img/Avatar (1).png"}
              className="w-full h-fit"
              alt="project"
            />
          </div>
          <div className="grid row-span-1">
            <img
              src={"/img/Avatar (2).png"}
              className="w-full h-fit"
              alt="project"
            />
          </div>
        </div>
        <div className=" ">
          <img
            src={"/img/Avatar (4).png"}
            className="w-full h-fit"
            alt="project"
          />
        </div>
        <div className=" ">
          <img
            src={"/img/Avatar (5).png"}
            className="w-full h-fit"
            alt="project"
          />
        </div>
        <div className=" ">
          <img
            src={"/img/Avatar (6).png"}
            className="w-full h-fit"
            alt="project"
          />
        </div>
        <div className=" ">
          <img
            src={"/img/Avatar (7).png"}
            className="w-full h-fit"
            alt="project"
          />
        </div>
        <div className=" ">
          <img
            src={"/img/Avatar (8).png"}
            className="w-full h-fit"
            alt="project"
          />
        </div>
        <div className=" ">
          <img
            src={"/img/Avatar (9).png"}
            className="w-full h-fit"
            alt="project"
          />
        </div>
        <div className=" ">
          <img
            src={"/img/Avatar (10).png"}
            className="w-full h-fit"
            alt="project"
          />
        </div>
        <div className=" ">
          <img
            src={"/img/Avatar (11).png"}
            className="w-full h-fit"
            alt="project"
          />
        </div>
        <div className=" ">
          <img
            src={"/img/Avatar (12).png"}
            className="w-full h-fit"
            alt="project"
          />
        </div>
      
        <div className="grid col-span-1 gap-[32px]">
          <div className="grid row-span-1">
            <img
              src={"/img/Avatar (1).png"}
              className="w-full h-fit"
              alt="project"
            />
          </div>
          <div className="grid row-span-1">
            <img
              src={"/img/Avatar (2).png"}
              className="w-full h-fit"
              alt="project"
            />
          </div>
        </div>
        <div className="grid col-span-2 ">
          <img src={"/img/avatar.png"} className="w-full h-fit" alt="project" />
        </div>
      </div>
    </>
  );
};

export default Projects;
