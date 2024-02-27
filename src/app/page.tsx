"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter, redirect } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { AvatarIcon, TwitterIcon, WalletIcon } from "@/components/SvgIcon";
import { SignIn } from "@/components/SignIn";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

export default function Home(session: Session | null | undefined) {
  const { setVisible } = useWalletModal();
  const { publicKey, disconnect } = useWallet();
  const router = useRouter()



  return (
    <SessionProvider session={session}>
      <SignIn />
    </SessionProvider>
  );
}
