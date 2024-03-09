"use client";
/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useModal } from "@/contexts/ModalContext";
import { getOneRaid, getRaids, updateRaid } from "@/action/raid";
import { getUserInfo } from "@/action/user";
import { RaidType } from "@/type";
import { NextIcon, PrevIcon } from "./SvgIcon";

const Projects: FC = () => {
  const { openRaidModal, setWallet } = useModal();
  const [raids, setRaids] = useState<RaidType[]>([]);
  const [item, setItem] = useState<number>(0);
  const [pages, setPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleToPrev = () => {
    if (currentPage === 1) {
      setCurrentPage(1);
      console.log(raids);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const hanleToNext = () => {
    if (currentPage === pages) {
      setCurrentPage(pages);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    const loadRaid = async () => {
      const res = await getRaids();
      console.log("data", res);
      setRaids(res);
      setPages(res.length + 1);
      setItem(12 * (currentPage - 1));
    };
    loadRaid();
  }, [currentPage]);

  const handleOpen = (id: string) => {
    openRaidModal();
    setWallet(id);
  };

  return (
    <>
      {raids && (
        <div className="grid grid-cols-3 gap-[32px] pb-[32px] max-lg:hidden">
          <div className="grid grid-cols-1 grid-rows-3 gap-[32px]">
            {raids[item] ? (
              <div
                className="row-span-2 rounded-3xl cursor-pointer relative"
                onClick={() => handleOpen(raids[item]?._id as string)}
              >
                <img
                  src={"/img/avatar.png"}
                  className="w-full h-fit"
                  alt="project"
                />
                <div className="w-full absolute bottom-10 max-xl:bottom-4">
                  <p className="text-center text-[36px] text-white font-bold">
                    {raids[item]?.name}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center row-span-2 rounded-[32px] bg-[#13151D] w-full h-full text-white text-[30px]">
                {" "}
                No Data
              </div>
            )}

            <div className="grid row-span-1 grid-cols-2 gap-[32px]">
              {raids[item + 1] ? (
                <div
                  className="col-span-1 rounded-[32px] cursor-pointer relative"
                  onClick={() => handleOpen(raids[item + 1]?._id as string)}
                >
                  {" "}
                  <img
                    src={"/img/Avatar (1).png"}
                    className="w-full h-fit"
                    alt="project"
                  />
                  <div className="w-full absolute bottom-6 max-xl:bottom-3 ">
                    <p className="text-center text-[24px] text-white font-bold">
                      {raids[item + 1]?.name}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center col-span-1 rounded-[32px] bg-[#13151D] w-full h-full text-white text-[20px]">
                  No Data
                </div>
              )}

              {raids[item + 2] ? (
                <div
                  className="col-span-1 rounded-[32px] cursor-pointer relative "
                  onClick={() => handleOpen(raids[item + 2]?._id as string)}
                >
                  {" "}
                  <img
                    src={"/img/Avatar (1).png"}
                    className="w-full h-fit"
                    alt="project"
                  />
                  <div className="w-full absolute bottom-6 max-xl:bottom-3 ">
                    <p className="text-center text-[24px] text-white font-bold">
                      {raids[item + 2]?.name}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center col-span-1 rounded-[32px] bg-[#13151D] w-full h-full text-white text-[20px]">
                  No Data
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-3 gap-[32px]">
            <div className="grid row-span-1 grid-cols-2 gap-[32px]">
              {raids[item + 3] ? (
                <div
                  className="col-span-1 rounded-[32px] cursor-pointer relative"
                  onClick={() => handleOpen(raids[item + 3]?._id as string)}
                >
                  {" "}
                  <img
                    src={"/img/Avatar (1).png"}
                    className="w-full h-fit"
                    alt="project"
                  />
                  <div className="w-full absolute bottom-6 max-xl:bottom-3 ">
                    <p className="text-center text-[24px] text-white font-bold">
                      {raids[item + 3]?.name}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center col-span-1 rounded-[32px] bg-[#13151D] w-full h-full text-white text-[20px]">
                  No Data
                </div>
              )}{" "}
              {raids[item + 4] ? (
                <div
                  className="col-span-1 rounded-[32px] cursor-pointer relative"
                  onClick={() => handleOpen(raids[item + 4]?._id as string)}
                >
                  {" "}
                  <img
                    src={"/img/Avatar (1).png"}
                    className="w-full h-fit"
                    alt="project"
                  />
                  <div className="w-full absolute bottom-6 max-xl:bottom-3 ">
                    <p className="text-center text-[24px] text-white font-bold">
                      {raids[item + 4]?.name}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center col-span-1 rounded-[32px] bg-[#13151D] w-full h-full text-white text-[20px]">
                  No Data
                </div>
              )}
            </div>
            <div className="grid row-span-1 grid-cols-2 gap-[32px]">
              {raids[item + 5] ? (
                <div
                  className="col-span-1 rounded-[32px] cursor-pointer relative"
                  onClick={() => handleOpen(raids[item + 5]?._id as string)}
                >
                  {" "}
                  <img
                    src={"/img/Avatar (1).png"}
                    className="w-full h-fit"
                    alt="project"
                  />
                  <div className="w-full absolute bottom-6 max-xl:bottom-3 ">
                    <p className="text-center text-[24px] text-white font-bold">
                      {raids[item + 5]?.name}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center col-span-1 rounded-[32px] bg-[#13151D] w-full h-full text-white text-[20px]">
                  No Data
                </div>
              )}
              {raids[item + 6] ? (
                <div
                  className="col-span-1 rounded-[32px] cursor-pointer relative"
                  onClick={() => handleOpen(raids[item + 6]?._id as string)}
                >
                  {" "}
                  <img
                    src={"/img/Avatar (1).png"}
                    className="w-full h-fit"
                    alt="project"
                  />
                  <div className="w-full absolute bottom-6 max-xl:bottom-3 ">
                    <p className="text-center text-[24px] text-white font-bold">
                      {raids[item + 6]?.name}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center col-span-1 rounded-[32px] bg-[#13151D] w-full h-full text-white text-[20px]">
                  No Data
                </div>
              )}
            </div>
            <div className="grid row-span-1 grid-cols-2 gap-[32px]">
              {raids[item + 7] ? (
                <div
                  className="col-span-1 rounded-[32px] cursor-pointer relative"
                  onClick={() => handleOpen(raids[item + 7]?._id as string)}
                >
                  {" "}
                  <img
                    src={"/img/Avatar (1).png"}
                    className="w-full h-fit"
                    alt="project"
                  />
                  <div className="w-full absolute bottom-6 max-xl:bottom-3 ">
                    <p className="text-center text-[24px] text-white font-bold">
                      {raids[item + 7]?.name}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center col-span-1 rounded-[32px] bg-[#13151D] w-full h-full text-white text-[20px]">
                  No Data
                </div>
              )}{" "}
              {raids[item + 8] ? (
                <div
                  className="col-span-1 rounded-[32px] cursor-pointer relative"
                  onClick={() => handleOpen(raids[item + 8]?._id as string)}
                >
                  {" "}
                  <img
                    src={"/img/Avatar (1).png"}
                    className="w-full h-fit"
                    alt="project"
                  />
                  <div className="w-full absolute bottom-6 max-xl:bottom-3 ">
                    <p className="text-center text-[24px] text-white font-bold">
                      {raids[item + 8]?.name}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center col-span-1 rounded-[32px] bg-[#13151D] w-full h-full text-white text-[20px]">
                  No Data
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-3 gap-[32px]">
            <div className="grid row-span-1 grid-cols-2 gap-[32px]">
              {raids[item + 9] ? (
                <div
                  className="col-span-1 rounded-[32px] cursor-pointer relative"
                  onClick={() => handleOpen(raids[item + 9]?._id as string)}
                >
                  {" "}
                  <img
                    src={"/img/Avatar (1).png"}
                    className="w-full h-fit"
                    alt="project"
                  />
                  <div className="w-full absolute bottom-6 max-xl:bottom-3 ">
                    <p className="text-center text-[24px] text-white font-bold">
                      {raids[item + 9]?.name}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center col-span-1 rounded-[32px] bg-[#13151D] w-full h-full text-white text-[20px]">
                  No Data
                </div>
              )}{" "}
              {raids[item + 10] ? (
                <div
                  className="col-span-1 rounded-[32px] cursor-pointer relative"
                  onClick={() => handleOpen(raids[item + 10]?._id as string)}
                >
                  {" "}
                  <img
                    src={"/img/Avatar (1).png"}
                    className="w-full h-fit"
                    alt="project"
                  />
                  <div className="w-full absolute bottom-6 max-xl:bottom-3 ">
                    <p className="text-center text-[24px] text-white font-bold">
                      {raids[item + 10]?.name}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center col-span-1 rounded-[32px] bg-[#13151D] w-full h-full text-white text-[20px]">
                  No Data
                </div>
              )}
            </div>
            {raids[item + 11] ? (
              <div
                className="row-span-2 rounded-[32px] cursor-pointer relative"
                onClick={() => handleOpen(raids[item + 11]?._id as string)}
              >
                <img
                  src={"/img/avatar.png"}
                  className="w-full h-fit"
                  alt="project"
                />
                <div className="w-full absolute bottom-10 max-xl:bottom-4">
                  <p className="text-center text-[36px] text-white font-bold">
                    {raids[item + 11]?.name}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center row-span-2 rounded-[32px] bg-[#13151D] w-full h-full text-white text-[30px]">
                {" "}
                No Data
              </div>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-[16px] pb-[32px] lg:hidden">
        {raids[item] ? (
          <div
            className="grid col-span-2 relative"
            onClick={() => handleOpen(raids[item]?._id as string)}
          >
            <img
              src={"/img/avatar.png"}
              className="w-full h-fit"
              alt="project"
            />
            <div className="w-full absolute bottom-10 max-xl:bottom-4">
              <p className="text-center text-[36px] text-white font-bold">
                {raids[item]?.name}
              </p>
            </div>
          </div>
        ) : (
          <div className="grid items-center justify-center col-span-2 rounded-[32px] bg-[#13151D] w-full h-full text-white text-[30px]">
            {" "}
            No Data
          </div>
        )}

        <div className="grid grid-cols-1 row-span-1 gap-[16px]">
          {raids[item + 1] ? (
            <div
              className=" col-span-1 cursor-pointer relative"
              onClick={() => handleOpen(raids[item + 1]?._id as string)}
            >
              {" "}
              <img
                src={"/img/Avatar (1).png"}
                className="w-full h-fit"
                alt="project"
              />
              <div className="w-full absolute bottom-6 max-xl:bottom-3 ">
                <p className="text-center text-[24px] text-white font-bold">
                  {raids[item + 1]?.name}
                </p>
              </div>
            </div>
          ) : (
            <div className="grid row-span-1 items-center justify-center rounded-[32px] bg-[#13151D] w-full h-full text-white text-[20px]">
              No Data
            </div>
          )}
          {/* <div className="grid row-span-1">
            <img
              src={"/img/Avatar (1).png"}
              className="w-full h-fit"
              alt="project"
            />
          </div> */}
          {raids[item + 2] ? (
            <div
              className=" col-span-1 cursor-pointer relative"
              onClick={() => handleOpen(raids[item + 2]?._id as string)}
            >
              {" "}
              <img
                src={"/img/Avatar (1).png"}
                className="w-full h-full"
                alt="project"
              />
              <div className="w-full absolute bottom-6 max-xl:bottom-3 ">
                <p className="text-center text-[24px] text-white font-bold">
                  {raids[item + 2]?.name}
                </p>
              </div>
            </div>
          ) : (
            <div className="grid row-span-1 items-center justify-center rounded-[32px] bg-[#13151D] w-full h-full text-white text-[20px]">
              No Data
            </div>
          )}
        </div>

        {raids[item + 3] && (
          <div
            className="col-span-1 cursor-pointer relative"
            onClick={() => handleOpen(raids[item + 3]?._id as string)}
          >
            {" "}
            <img
              src={"/img/Avatar (1).png"}
              className="w-full h-fit"
              alt="project"
            />
            <div className="w-full absolute bottom-6 max-xl:bottom-3 ">
              <p className="text-center text-[24px] text-white font-bold">
                {raids[item + 3]?.name}
              </p>
            </div>
          </div>
        )}
        {raids[item + 4] && (
          <div className="col-span-1 cursor-pointer relative"   onClick={() => handleOpen(raids[item + 4]?._id as string)}>
            {" "}
            <img
              src={"/img/Avatar (1).png"}
              className="w-full h-fit"
              alt="project"
            />
            <div className="w-full absolute bottom-6 max-xl:bottom-3 ">
              <p className="text-center text-[24px] text-white font-bold">
                {raids[item + 4]?.name}
              </p>
            </div>
          </div>
        )}
        {raids[item + 5] && (
          <div className="col-span-1 cursor-pointer relative"   onClick={() => handleOpen(raids[item + 5]?._id as string)}>
            {" "}
            <img
              src={"/img/Avatar (1).png"}
              className="w-full h-fit"
              alt="project"
            />
            <div className="w-full absolute bottom-6 max-xl:bottom-3 ">
              <p className="text-center text-[24px] text-white font-bold">
                {raids[item + 5]?.name}
              </p>
            </div>
          </div>
        )}
        {raids[item + 6] && (
          <div className=" cursor-pointer relative"   onClick={() => handleOpen(raids[item + 6]?._id as string)}>
            {" "}
            <img
              src={"/img/Avatar (1).png"}
              className="w-full h-fit"
              alt="project"
            />
            <div className="w-full absolute bottom-6 max-xl:bottom-3 ">
              <p className="text-center text-[24px] text-white font-bold">
                {raids[item + 6]?.name}
              </p>
            </div>
          </div>
        )}
        {raids[item + 7] && (
          <div className=" cursor-pointer relative"   onClick={() => handleOpen(raids[item + 7]?._id as string)}>
            {" "}
            <img
              src={"/img/Avatar (1).png"}
              className="w-full h-fit"
              alt="project"
            />
            <div className="w-full absolute bottom-6 max-xl:bottom-3 ">
              <p className="text-center text-[24px] text-white font-bold">
                {raids[item + 7]?.name}
              </p>
            </div>
          </div>
        )}
        {raids[item + 8] && (
          <div className=" cursor-pointer relative"   onClick={() => handleOpen(raids[item+ 8]?._id as string)}>
            {" "}
            <img
              src={"/img/Avatar (1).png"}
              className="w-full h-fit"
              alt="project"
            />
            <div className="w-full h-full absolute bottom-6 max-xl:bottom-3 ">
              <p className="text-center text-[24px] text-white font-bold">
                {raids[item + 8]?.name}
              </p>
            </div>
          </div>
        )}

        {/* <div className=" ">
          <img
            src={"/img/Avatar (4).png"}
            className="w-full h-fit"
            alt="project"
          />
        </div> */}

        <div className="grid col-span-1 gap-[32px]">
          {raids[item + 9] && (
            <div className="grid row-span-1 cursor-pointer relative"   onClick={() => handleOpen(raids[item + 9]?._id as string)}>
              {" "}
              <img
                src={"/img/Avatar (1).png"}
                className="w-full h-fit"
                alt="project"
              />
              <div className="w-full absolute bottom-6 max-xl:bottom-3 ">
                <p className="text-center text-[24px] text-white font-bold">
                  {raids[item + 9]?.name}
                </p>
              </div>
            </div>
          )}
          {/* <div className="grid row-span-1">
            <img
              src={"/img/Avatar (1).png"}
              className="w-full h-fit"
              alt="project"
            />
          </div> */}
          {raids[item + 10] && (
            <div className="grid row-span-1 cursor-pointer relative"   onClick={() => handleOpen(raids[item+ 10]?._id as string)}>
              {" "}
              <img
                src={"/img/Avatar (1).png"}
                className="w-full h-fit"
                alt="project"
              />
              <div className="w-full absolute bottom-6 max-xl:bottom-3 ">
                <p className="text-center text-[24px] text-white font-bold">
                  {raids[item + 10]?.name}
                </p>
              </div>
            </div>
          )}
        </div>
        {raids[item + 11] && (
          <div
            className="grid col-span-2 relative"
            onClick={() => handleOpen(raids[item + 11]?._id as string)}
          >
            <img
              src={"/img/avatar.png"}
              className="w-full h-fit"
              alt="project"
            />
            <div className="absolute bottom-10 left-1/2  text-[36px] text-white font-bold">
              {raids[item + 11]?.name}
            </div>
          </div>
        )}
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="flex w-[200px] items-center justify-between">
          <div
            className="flex text-white text-[20px] cursor-pointer"
            onClick={handleToPrev}
          >
            <PrevIcon />
          </div>
          <div className="flex text-[14px] text-white">{currentPage}</div>
          <div
            className="flex text-white text-[20px] cursor-pointer"
            onClick={hanleToNext}
          >
            <NextIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
