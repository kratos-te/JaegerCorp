"use client";
import { getOneRaid } from "@/action/raid";
import { RaidType } from "@/type";
import { createContext, useContext, ReactNode, useState } from "react";

interface ModalContextType {
  openRaidModal: () => void;
  closeRaidModal: () => void;
  setWallet: (id:string) => void
  isOpenedRaid: boolean;
  raid: RaidType | undefined;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpenedRaid, setIsOpenRaid] = useState<boolean>(false);
  const [raid, setRaid] = useState<RaidType>()
  const [wallet, setWallet] = useState<string>("")
  

  const openRaidModal = async () => {
    setIsOpenRaid(true);
    const res = await getOneRaid(wallet)
    setRaid(res?.data)
    document.body.classList.add("modal-open");
  };

  const closeRaidModal = () => {
    setIsOpenRaid(false);
    document.body.classList.add("modal-open");
  };
  const modalContextValue: ModalContextType = {
    openRaidModal,
    closeRaidModal,
    setWallet,
    isOpenedRaid,
    raid,
  };
  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
}
