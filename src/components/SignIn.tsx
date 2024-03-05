"use client";
import Image from "next/image";
import { useRouter, redirect } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { AvatarIcon, TwitterIcon, WalletIcon } from "@/components/SvgIcon";
import { signIn, signOut, useSession } from "next-auth/react";
import { errorAlert, successAlert, warningAlert } from "./ToastGroup";
import { useContext } from "react";
import { ProfileContext } from "@/contexts/ProfileContext";

export const SignIn = () => {
  const { setVisible } = useWalletModal();
  const { publicKey, disconnect } = useWallet();
  const router = useRouter();
  const { data: session } = useSession();
  console.log("user name", session?.user?.name);
  const handleToHome = () => {
    router.push("/raids");
  };

  const connectTwitter = () => {
    signIn();
    if (session !== null) {
        // setName(session?.user?.name)
        // setImage(session?.user?.image)
        localStorage.setItem("name", session?.user?.name as string)
        localStorage.setItem("image", session?.user?.image as string)
      successAlert("Connected Twitter!");
    }
  };

  const connectWallet = () => {
    if (session !== null) {
      setVisible(true);
    } else {
      errorAlert("Please Sign Twitter!");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black max-sm:p-2">
      {!publicKey ? (
        <div className="flex flex-col w-[420px] items-center justify-center gap-[32px] rounded-[16px] p-8 bg-[#1A1D21F5] max-sm:w-full">
          <Image src="/logo/logo.png" alt="logo" width={150} height={150} />
          <div className="flex flex-col items-center justify-center gap-[16px]">
            <p className="flex text-[24px] font-semibold text-white">
              Welcome to Jaeger Corp
            </p>
            <p className="text-[16px] font-medium text-[#9B9C9E]">
              Login to Earn $Jaeger
            </p>
          </div>
          <div className="flex flex-col  w-full gap-[24px]">
            <div
              className="flex gap-[12px] items-center justify-center py-[8px] rounded-[12px] bg-[#FFB547] text-[#070A13] text-[16px] font-semibold cursor-pointer"
              onClick={() => connectTwitter()}
            >
              {session?.user?.name ? (
                `@${session?.user?.name} connected`
              ) : (
                <>
                  <TwitterIcon />
                  Connect to X
                </>
              )}
            </div>
            <div
              className="flex gap-[12px] items-center justify-center px-[24px] py-[8px] rounded-[12px] border-[2px] border-[#FFB547] bg-transparent text-[#FFB547] text-[16px] cursor-pointer"
              onClick={() => connectWallet()}
            >
              <WalletIcon />
              Connect Wallet
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-[420px] items-center justify-center gap-[32px] rounded-[16px] p-8 bg-[#1A1D21F5] max-sm:w-full">
          {/* <Image src="/logo/logo.png"  alt="logo" width={150} height={150}/> */}
          <div className="flex flex-col items-center justify-center gap-[16px]">
            <p className="flex text-[24px] font-semibold text-white">
              Create Profile
            </p>
            <p className="text-[16px] font-medium text-[#9B9C9E]">
              Your Wallet
            </p>
          </div>
          <div className="flex w-full justify-between  bg-black rounded-[10px] p-2">
            <div className="flex gap-[12px] items-center">
              <AvatarIcon />
              <p className="flex text-[#FFB547] text-[16px] font-medium">
                {publicKey.toBase58().slice(0, 4)}....
                {publicKey.toBase58().slice(-4)}
              </p>
            </div>
            <button
              className="flex gap-2 items-center px-[16px] py-[8px] rounded-[10px] bg-[#1A1D21] tracking-[-0.32px] text-[#9B9C9E]"
              onClick={() => setVisible(true)}
            >
              Change
            </button>
          </div>
          <div className="flex w-full">
            <div
              className="flex items-center justify-center w-1/2 text-[14px] font-semibold text-[#9B9C9E] py-[8px] cursor-pointer"
              onClick={disconnect}
            >
              Cancel
            </div>
            <div
              className="flex items-center justify-center w-1/2 text-[14px] font-semibold text-black bg-[#FFB547] rounded-[10px] py-[8px] cursor-pointer"
              onClick={handleToHome}
            >
              Confirm
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
