"use client";
import Image from "next/image";
import { useRouter, redirect } from "next/navigation";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { AvatarIcon, TwitterIcon, WalletIcon } from "@/components/SvgIcon";

import { signIn, useSession, signOut, SessionProvider } from "next-auth/react";
import { SignIn } from "@/components/SignIn";

export default function Home(session: any) {
  // const {data : session} = useSession()
  const { setVisible } = useWalletModal();
  const { publicKey, disconnect } = useWallet();
  const router = useRouter();

  const handleToHome = () => {
    router.push("/raids");
  };
  return (
    <SessionProvider session={session}>
      <SignIn />
    </SessionProvider>
  );
}
