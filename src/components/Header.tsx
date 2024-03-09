/* eslint-disable @next/next/no-img-element */
"use client";
import { FC, useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useWallet } from "@solana/wallet-adapter-react";

import copy from "copy-to-clipboard";
import ConnectButton from "@/components/ConnectButton";
import Image from "next/image";
import { MENU_BAR } from "@/config";
import MenuButton from "./MenuButton";
import {
  AvatarIcon,
  AvatarMobileIcon,
  CloseIcon,
  CoinIcon,
  CopyIcon,
} from "./SvgIcon";
import { successAlert } from "./ToastGroup";
import ClickAwayComponent from "./ClickAwayComponent";
import { useSession } from "next-auth/react";
import { ProfileContext } from "@/contexts/ProfileContext";

const Header: FC = () => {
  // const { data: session } = useSession();
  // const { name, image } = useContext<any>(ProfileContext);
  const { publicKey, disconnect } = useWallet();
  const [copied, setCopied] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const handleCopy = () => {
    console.log("ok");
    if (publicKey) {
      const address = copy(publicKey.toBase58());
      console.log("address", address);
      setCopied(true);
    }
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  useEffect(() => {
    if (copied === true) {
      successAlert("Address copied successfully!");
    }
  }, [copied]);

  useEffect(() => {
    const getName = localStorage.getItem("name")
    const getImage = localStorage.getItem("image")
    if (getName) {
      setName(getName)
    }
    if (getImage) {
      setImage(getImage)
    }
  }, []);

  const handleShowMenu = () => {
    setIsShowMenu(true);
  };
  return (
    <>
      <header className=" w-full relative z-10 left-0 top-0 backdrop-blur-sm ">
        <div
          className={`flex items-center justify-between py-4 lg:py-7 px-4 bg-[#13151D] max-lg:px-[200px] max-md:px-[24px] `}
        >
          <Link
            href={"/"}
            className="flex items-center gap-[10px] max-xld:hidden"
          >
            <Image
              src={"/logo/logo.svg"}
              width={409}
              height={52}
              alt="header logo"
            />
          </Link>
          <Link href={"/"} className="flex items-center gap-[10px] xld:hidden">
            <Image
              src={"/logo/logo.png"}
              width={52}
              height={52}
              alt="header logo"
            />
          </Link>
          <div className="flex gap-[50px] max-xld:gap-[20px] max-lg:hidden">
            {MENU_BAR.map((item, key) => (
              <MenuButton
                key={key}
                lightIcon={<item.lightIcon />}
                darkIcon={<item.darkIcon />}
                title={item.title}
                link={item.link}
              />
            ))}
          </div>

          {publicKey && (
            <div className="flex items-center gap-[24px]">
              <div className="flex w-[180px] gap-[12px] items-center rounded-full bg-black p-[4px] cursor-pointer max-lg:w-[116px] max-lg:p-[2px]">
                <CoinIcon />
                <p className="text-[16px] font-semibold text-[#FFB547]">2500</p>
              </div>
              <div className="flex w-[200px] items-center gap-[12px] rounded-full border-[1px] border-[#23232C] bg-black p-[4px] cursor-pointer max-lg:hidden">
                {image ? (
                  <div className="w-[40px] h-[40px] rounded-full">
                    <img src={image} alt="avatar" className="w-[40px] h-[40px] rounded-full"/>
                  </div>
                ) : (
                  <AvatarIcon />
                )}
                <div className="flex flex-col gap-[]">
                  <p className="text-[16px] font-semibold text-white">
                    {name ? name : "Alan Kennedy"}
                  </p>
                  <div className="flex items-center gap-[6px]">
                    <p className="text-[14px] font-medium text-[#9B9C9E]">
                      {publicKey.toBase58().slice(0, 4)}....
                      {publicKey.toBase58().slice(-4)}
                    </p>
                    <div onClick={handleCopy}>
                      <CopyIcon />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex rounded-full border-[1px] border-[#23232C] bg-black p-[8px] lg:hidden"
                onClick={handleShowMenu}
              >
                {image ? (
                  <div className="w-[40px] h-[40px] rounded-full">
                    <img src={image} alt="avatar" className="w-[40px] h-[40px] rounded-full" />
                  </div>
                ) : (
                  <AvatarMobileIcon />
                )}
              </div>
            </div>
          )}
        </div>
      </header>
      {isShowMenu && (
        <div
          className={`fixed z-30 w-full h-full top-0 bg-black/50 backdrop-blur-xl`}
        >
          <ClickAwayComponent
            onClickAway={() => setIsShowMenu(false)}
            className="absolute top-0 z-40 w-[] h-full overflow-hidden right-0 bg-glass-modal bg-opacity-96 bg-[#13151D]"
          >
            <div className=" flex flex-col w-[280px] h-fit bg-[#13151D]">
              <div className="flex items-center justify-between p-[24px] border-b-[1px] border-[#23232C]">
                <Link href={"/"} className="flex items-center gap-[10px]">
                  <Image
                    src={"/logo/logo.png"}
                    width={40}
                    height={40}
                    alt="header logo"
                  />
                </Link>
                <div
                  className="rounded-[12px] bg-[#1A1D21] p-[8px]"
                  onClick={() => setIsShowMenu(false)}
                >
                  <CloseIcon />
                </div>
              </div>
              {publicKey && (
                <div className="flex flex-col p-[24px]">
                  <div className="flex w-[220px] items-center gap-[12px] rounded-full border-[1px] border-[#23232C] bg-black p-[4px] cursor-pointer">
                    {image ? (
                      <div className="w-[40px] h-[40px] rounded-full">
                        <img src={image} alt="avatar" className="w-[40px] h-[40px] rounded-full"/>
                      </div>
                    ) : (
                      <AvatarIcon />
                    )}
                    <div className="flex flex-col gap-[]">
                      <p className="text-[16px] font-semibold text-white">
                        {name ? name : "Alan Kennedy"}
                      </p>
                      <div className="flex items-center gap-[6px]">
                        <p className="text-[14px] font-medium text-[#9B9C9E]">
                          {publicKey.toBase58().slice(0, 4)}....
                          {publicKey.toBase58().slice(-4)}
                        </p>
                        <div onClick={handleCopy}>
                          <CopyIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex flex-col gap-[32px] mt-[48px] px-[24px]">
                {MENU_BAR.map((item, key) => (
                  <MenuButton
                    key={key}
                    lightIcon={<item.lightIcon />}
                    darkIcon={<item.darkIcon />}
                    title={item.title}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
          </ClickAwayComponent>
        </div>
      )}
    </>
  );
};

export default Header;
